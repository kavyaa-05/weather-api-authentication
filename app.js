const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const session = require("express-session");
const axios = require("axios");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(session({
  secret: "secretKey",
  resave: false,
  saveUninitialized: true
}));
const db = new sqlite3.Database("users.db");
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);
app.get("/", (req, res) => {
  res.redirect("/login");
});
app.get("/register", (req, res) => {
  res.render("register", { message: null });
});
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.render("register", { message: "Please fill all fields" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, hashedPassword],
    (err) => {
      if (err) {
        return res.render("register", { message: "Username already exists" });
      }
      res.redirect("/login");
    }
  );
});app.get("/login", (req, res) => {
  res.render("login", { message: null });
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, user) => {
      if (!user) {
        return res.render("login", { message: "User not found" });
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.render("login", { message: "Invalid password" });
      }
      req.session.user = user.username;
      res.redirect("/dashboard");
    }
  );
});
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  res.render("dashboard", { user: req.session.user });
});
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});
app.get("/users", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  db.all("SELECT id, username FROM users", [], (err, rows) => {
    res.render("users", { users: rows });
  });
});

app.get("/weather", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  res.render("weather", { weather: null, error: null });
});
app.post("/weather", async (req, res) => {
  const city = req.body.city;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=22d2bf151617209da722704295956fa7
&units=metric`
    );
    const data = response.data;
    const weather = {
      city: data.name,
      temp: data.main.temp,
      condition: data.weather[0].main,
      icon: data.weather[0].icon
    };
    res.render("weather", { weather, error: null });
  } catch {
    res.render("weather", { weather: null, error: "City not found" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});