import React from "react";
import "./App.css"; // Import du fichier CSS

function App() {
  return (
    <div className="app">
      {/* En-tête / Navigation */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            alt="Evernote Logo"
          />
          <span>Perzonalize-Crypto-Agent</span>
        </div>
        <nav className="nav-links">
          <a href="#plans">Plans</a>
          <a href="#features">Dashboard</a>
          <a href="#help">Fonctionnalités</a>
          <a href="#about">Avancement</a>
        </nav>
        <div className="auth-buttons">
          <button className="btn-outline">Log In</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </header>

      {/* Section principale (Hero) */}
      <main className="hero">
        <div className="hero-text">
          <h1>Un agent pour une meilleure productivité</h1>
          <p>
          PerzonalizeCryptoAgent vous mets à disposition un agent qui vous permet d'automatiser vos tâches et de gagner du temps.
          </p>
          <button className="btn-primary">Sign Up For Free</button>
        </div>
        <div className="hero-image">
          {/* Ordinateur + smartphone */}
          <img
            src="https://cdn.evernote.com/marketing/www/assets/homepage-repackaging/hero_device_evernote.png"
            alt="Evernote App on devices"
          />
          {/* Petite icône étoile, si vous voulez la reproduire */}
          <div className="star-icon">⭐</div>
        </div>
      </main>

      {/* Pied de page (facultatif) */}
      <footer className="footer">
        <p>© 2025 CryptoAgent Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
