import React, { useState } from "react";
import DoctorList from "./components/DoctorList";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      <h1>🏥 Healthcare Appointment System</h1>

      <DoctorList />
      <Dashboard />
    </div>
  );
}

export default App;