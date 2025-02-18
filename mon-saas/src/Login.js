// src/LoginPage.js
import React, { useState } from "react";
import "./Login.css";

function LoginPage() {
  const [username, setUsername] = useState("");

  // Fonction qui sera appelée lors de la soumission du formulaire
  const handleLogin = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique de connexion (appel API, etc.)
    console.log("Tentative de connexion avec :", username);
    // Exemple : redirection après connexion réussie
    // navigate("/dashboard");
  };

  return (
    <div className="login-container">
      {/* Logo Evernote */}
      <header className="login-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/60/Evernote_logo.png"
          alt="Evernote Logo"
          className="evernote-logo"
        />
      </header>

      <main className="login-main">
        <h1>Connexion</h1>
        <p>pour continuer vers votre compte Evernote</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Adresse email ou nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Continuer</button>
        </form>

        <div className="separator">ou</div>

        <div className="social-buttons">
          <button className="social-btn google-btn">
            Continuer avec Google
          </button>
          <button className="social-btn apple-btn">
            Continuer avec Apple
          </button>
        </div>

        <div className="links">
          <p>
            Vous n’avez pas de compte ? <a href="#signup">Inscription</a>
          </p>
          <p>
            Vous ne pouvez pas vous connecter ? <a href="#help">Cliquez ici</a>
          </p>
        </div>
      </main>

      <footer className="login-footer">
        <p>© 2025 Evernote Corporation. All rights reserved.</p>
        <div className="footer-links">
          <a href="#security">Security</a>
          <a href="#legal">Legal</a>
          <a href="#privacy">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
