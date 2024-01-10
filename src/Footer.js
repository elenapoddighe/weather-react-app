import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <p>
        This page was coded by Elena Poddighe, is open-source on{" "}
        <a
          href="https://github.com/elenapoddighe/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://elenas-weather-react-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
