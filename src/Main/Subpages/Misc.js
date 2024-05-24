import React, { useState } from "react";
import "./Misc.css";
import Calendar from "../MiscComponents/Calendar/Calendar";
import Youtube from "../MiscComponents/Youtube/Youtube";
import BenjiApp from "../MiscComponents/Cookie/BenjiApp";
const Misc = () => {
  const [calendar, setCalendar] = useState(false);
  const [youtube, setYoutube] = useState(false); // Add more states as needed
  const [activeComponent, setActiveComponent] = useState(null);
  const [cookieClicker, setCookieClicker] = useState(false);

  const fieldTexts = [
    "Birthday-Calendar",
    "Social Media",
    "Cookie Clicker",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    "Field 4",
    // Add more custom texts as needed
  ];

  const handleItemClick = (index) => {
    setActiveComponent(index);
    switch (index) {
      case 0:
        setCalendar(true);
        break;
      case 1:
        setYoutube(true);
        break;
      case 2:
        setCookieClicker(true);
        break;
      default:
    }
  };

  const handleBackClick = () => {
    setActiveComponent(null);
    setCalendar(false); // Reset calendar state on back click
    setYoutube(false); // Reset youtube state on back click
    setCookieClicker(false); // Reset cookie clicker state on back click
  };

  return (
    <div className="misc-container">
      {activeComponent === null ? (
        fieldTexts.map((text, index) => (
          <div
            key={index}
            className="misc-item"
            onClick={() => handleItemClick(index)}
          >
            {text}
          </div>
        ))
      ) : (
        <div>
          {calendar && <Calendar backButtonClickRoom={handleBackClick} />}
          {youtube && <Youtube backButtonClickRoom={handleBackClick} />}
          {cookieClicker && <BenjiApp backButtonClickRoom={handleBackClick} />}
        </div>
      )}
    </div>
  );
};

export default Misc;
