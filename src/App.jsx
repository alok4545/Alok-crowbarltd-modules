import React from "react";
import "./App.css";
// import logo from "./logo.png"; // if you don't have logo yet, keep this commented

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-text">CrowbarLtd</div>
        <nav className="nav">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">RAFFLES</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>

      <main className="main-content">
        <h1>Welcome to CrowbarLtd</h1>
        <p>Your digital-ops infrastructure solution.</p>
      </main>

      <footer className="footer">
        <div className="footer-logo-text">CrowbarLtd</div>
        <p>© 2025 CrowbarLtd.com</p>
      </footer>
    </div>
  );
}
