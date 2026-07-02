# 🌦️ Weather App with User Authentication

A full-stack web application built using **Node.js**, **Express.js**, **EJS**, **SQLite**, and the **OpenWeather API**. The application allows users to register, log in securely, view registered users, and check real-time weather information for any city.

---

## 🚀 Features

- 🔐 User Registration with encrypted passwords using **bcrypt**
- 🔑 Secure Login & Logout using **Express Session**
- 👤 Session-based Authentication
- 🌤️ Real-time Weather Search using **OpenWeather API**
- 📋 View Registered Users
- 🎨 Responsive User Interface with **Bootstrap 5**
- 🌈 Dynamic Weather Themes based on weather conditions
- ⚠️ Error handling for invalid login credentials and city names

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS

### Backend
- Node.js
- Express.js

### Database
- SQLite3

### Authentication
- bcrypt
- express-session

### API
- OpenWeather API
- Axios

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app-authentication.git
```

### 2. Navigate to the project folder

```bash
cd weather-app-authentication
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
API_KEY=YOUR_OPENWEATHER_API_KEY
SESSION_SECRET=your_secret_key
```

### 5. Run the application

```bash
node app.js
```

### 6. Open your browser

```
http://localhost:3000
```

---

## 📸 Application Screens

- Login Page
- Register Page
- User Dashboard
- Weather Search
- Registered Users List

---

## 🔑 Authentication Flow

- User registers with a username and password.
- Passwords are securely hashed using **bcrypt**.
- Users log in using valid credentials.
- Sessions are managed using **Express Session**.
- Protected routes are accessible only to authenticated users.

---

## 🌤 Weather API

This project uses the **OpenWeather API** to fetch real-time weather information.

Information displayed:
- City Name
- Temperature (°C)
- Weather Condition
- Weather Icon

The application also changes the background theme dynamically based on weather conditions.

---

## 📚 Learning Outcomes

Through this project, I learned how to:

- Build a complete full-stack application using Express.js
- Implement secure authentication using bcrypt
- Manage user sessions
- Connect applications with external REST APIs
- Store and retrieve data using SQLite
- Handle errors effectively
- Build responsive interfaces using Bootstrap
- Protect routes using session-based authentication

---

## 🚀 Future Improvements

- Forgot Password
- Password Reset
- Weather Forecast (5-Day)
- User Profile Page
- Search History
- JWT Authentication
- MongoDB Integration
- Deployment on Render or Railway

---

## 👨‍💻 Author

**Kavyaa**



## ⭐ If you found this project helpful, don't forget to Star this repository!
