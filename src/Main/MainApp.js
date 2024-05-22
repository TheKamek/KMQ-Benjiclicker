import React, { useState, useRef } from "react";
import "./MainApp.css";
import OrangeRoom from "./Rooms/OrangeRoom";
import PurpleRoom from "./Rooms/PurpleRoom";
import RedRoom from "./Rooms/RedRoom";
import GreenRoom from "./Rooms/GreenRoom";
import GreyRoom from "./Rooms/GreyRoom";
const MainApp = () => {
  const [doorClickedOrange, setDoorClickedOrange] = useState(false);
  const [doorClickedPurple, setDoorClickedPurple] = useState(false);
  const [doorClickedRed, setDoorClickedRed] = useState(false);
  const [doorClickedGreen, setDoorClickedGreen] = useState(false);
  const [doorClickedGrey, setDoorClickedGrey] = useState(false);
  const containerRef = useRef(null);

  const handleClick = (event) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const clickX = event.clientX - containerRect.left;
    const clickY = event.clientY - containerRect.top;
    const doorAreaOrange = {
      x1: 0.235 * containerRect.width,
      x2: 0.29 * containerRect.width,
      y1: 0.73 * containerRect.height,
      y2: 0.85 * containerRect.height,
    };
    const doorAreaPurple = {
      x1: 0.815 * containerRect.width,
      x2: 0.875 * containerRect.width,
      y1: 0.73 * containerRect.height,
      y2: 0.85 * containerRect.height,
    };
    const doorAreaRed = {
      x1: 0.65 * containerRect.width,
      x2: 0.69 * containerRect.width,
      y1: 0.73 * containerRect.height,
      y2: 0.85 * containerRect.height,
    };
    const doorAreaGreen = {
      x1: 0.45 * containerRect.width,
      x2: 0.52 * containerRect.width,
      y1: 0.73 * containerRect.height,
      y2: 0.85 * containerRect.height,
    };
    const doorAreaGrey = {
      x1: 0.026 * containerRect.width,
      x2: 0.055 * containerRect.width,
      y1: 0.73 * containerRect.height,
      y2: 0.85 * containerRect.height,
    };

    if (
      clickX > doorAreaOrange.x1 &&
      clickX < doorAreaOrange.x2 &&
      clickY > doorAreaOrange.y1 &&
      clickY < doorAreaOrange.y2
    ) {
      setDoorClickedOrange(true);
      console.log("Orange Door clicked");
    }
    if (
      clickX > doorAreaPurple.x1 &&
      clickX < doorAreaPurple.x2 &&
      clickY > doorAreaPurple.y1 &&
      clickY < doorAreaPurple.y2
    ) {
      setDoorClickedPurple(true);
      console.log("Purple Door clicked");
    }
    if (
      clickX > doorAreaRed.x1 &&
      clickX < doorAreaRed.x2 &&
      clickY > doorAreaRed.y1 &&
      clickY < doorAreaRed.y2
    ) {
      setDoorClickedRed(true);
      console.log("Red Door clicked");
    }
    if (
      clickX > doorAreaGreen.x1 &&
      clickX < doorAreaGreen.x2 &&
      clickY > doorAreaGreen.y1 &&
      clickY < doorAreaGreen.y2
    ) {
      setDoorClickedGreen(true);
      console.log("Green Door clicked");
    }
    if (
      clickX > doorAreaGrey.x1 &&
      clickX < doorAreaGrey.x2 &&
      clickY > doorAreaGrey.y1 &&
      clickY < doorAreaGrey.y2
    ) {
      setDoorClickedGrey(true);
      console.log("Grey Door clicked");
    }
  };

  return (
    <div className="mainDiv" ref={containerRef} onClick={handleClick}>
      {!(
        doorClickedOrange ||
        doorClickedPurple ||
        doorClickedRed ||
        doorClickedGreen ||
        doorClickedGrey
      ) ? (
        <img src="/World.png" alt="World" className="mainImg" />
      ) : (
        <div
          className={
            doorClickedOrange
              ? "orangeBackground"
              : doorClickedPurple
              ? "purpleBackground"
              : doorClickedRed
              ? "redBackground"
              : doorClickedGreen
              ? "greenBackground"
              : doorClickedGrey
              ? "greyBackground"
              : ""
          }
        >
          {doorClickedOrange && <OrangeRoom />}
          {doorClickedPurple && <PurpleRoom />}
          {doorClickedRed && <RedRoom />}
          {doorClickedGreen && <GreenRoom />}
          {doorClickedGrey && <GreyRoom />}
        </div>
      )}
    </div>
  );
};

export default MainApp;
