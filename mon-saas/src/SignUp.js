// src/SignUp.js
import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Logique d'inscription : appel API, validations, etc.
    console.log("Inscription avec :", email);
  };

  return (
    <div className="signup-container">
      {/* Partie gauche : formulaire */}
      <div className="signup-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/60/Evernote_logo.png"
          alt="Evernote Logo"
          className="signup-logo"
        />
        <h1>Bienvenue sur Evernote !</h1>
        <p>Inscrivez-vous et commencez à prendre des notes.</p>

        <form onSubmit={handleSignUp} className="signup-form">
          <input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Continuer</button>
        </form>

        <div className="signup-or">ou</div>

        <div className="signup-social">
          <button className="social-btn google-btn">
            Continuer avec Google
          </button>
          <button className="social-btn apple-btn">
            Continuer avec Apple
          </button>
        </div>

        <p className="signup-terms">
          En créant un compte, vous acceptez les <a href="#terms">Conditions d’utilisation</a> 
          et notre <a href="#privacy">Politique de confidentialité</a>.
        </p>

        <p className="signup-existing">
          Vous avez déjà un compte ? <a href="/login">Connexion</a>
        </p>

        <footer className="signup-footer">
          <p>© 2025 Evernote Corporation. All rights reserved.</p>
          <div className="signup-footer-links">
            <a href="#legal">Legal</a>
            <a href="#privacy">Privacy</a>
          </div>
        </footer>
      </div>

      {/* Partie droite : illustrations, slogans, etc. */}
      <div className="signup-right">
        <div className="signup-shapes">
          {/* Vous pouvez remplacer ces "div" par de vraies images ou SVG */}
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
        </div>
        <div className="signup-slogans">
          <h2>Work. School. Life.</h2>
          <h2>Remember everything.</h2>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
