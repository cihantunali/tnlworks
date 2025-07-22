import React from "react";
import "../scss/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} <span className="tnl-brand">TNLWorks</span> — All rights reserved.
        </p>
        <p className="footer-note">
          This site is built with React & GitHub Pages. Open-source and free to customize.
        </p>
      </div>
    </footer>
  );
}