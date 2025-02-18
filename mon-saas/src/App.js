// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import "./App.css"; 

// -- Composant "Home" : votre page actuelle --
function Home() {
  // Hook pour naviguer vers d’autres routes
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* En-tête / Navigation */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Evernote Logo" />
          <span>Perzonalize-Crypto-Agent</span>
        </div>
        <nav className="nav-links">
          <a href="#plans">Plans</a>
          <a href="#features">Dashboard</a>
          <a href="#help">Fonctionnalités</a>
          <a href="#about">Avancement</a>
        </nav>
        <div className="auth-buttons">
          {/* On remplace l'ancienne balise button par un onClick qui redirige */}
          <button className="btn-outline" onClick={() => navigate("/login")}>
            Log In
          </button>
          <button className="btn-primary" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </header>

      {/* Section principale (Hero) */}
      <main className="hero">
        <div className="hero-text">
          <h1>Un agent pour une meilleure productivité</h1>
          <p>
            PerzonalizeCryptoAgent vous mets à disposition un agent qui vous
            permet d'automatiser vos tâches et de gagner du temps.
          </p>
          <button className="btn-primary">Sign Up For Free</button>
        </div>
        <div className="hero-image">
          {/* Ordinateur + smartphone */}
          <img
            src="https://cdn.evernote.com/marketing/www/assets/homepage-repackaging/hero_device_evernote.png"
            alt="Evernote App on devices"
          />
          {/* Petite icône étoile */}
          <div className="star-icon">⭐</div>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="footer">
        <p>© 2025 CryptoAgent Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}

// -- Composant principal App : gère les routes --
function App() {
  return (
    <Router>
      <Routes>
        {/* Page d’accueil */}
        <Route path="/" element={<Home />} />
        {/* Page de connexion */}
        <Route path="/login" element={<Login />} />
        {/* Page d’inscription */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
