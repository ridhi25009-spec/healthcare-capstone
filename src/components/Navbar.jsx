import React from "react";

function Navbar({ toggleTheme, darkMode }) {
  return (
    <div className="navbar">
      <h2>HealthCare</h2>

      <button onClick={toggleTheme}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Navbar;