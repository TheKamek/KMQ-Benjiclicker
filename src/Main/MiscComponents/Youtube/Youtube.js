import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitch,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Youtube.css";

const Youtube = ({ backButtonClickRoom }) => {
  return (
    <div className="container">
      <div className="social-icons">
        <a
          href="https://www.youtube.com/@KMQ-Kamek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
        </a>
        <a
          href="https://www.twitch.tv/sunshinelulutv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitch} className="icon twitch" />
        </a>
        <a
          href="https://www.instagram.com/luisabiglerpriv2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
        </a>
      </div>
      <button
        className="backButton"
        onClick={(event) => {
          event.stopPropagation();
          backButtonClickRoom(event);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Youtube;
