import React, { useRef, useEffect, useState } from "react";
import "./Rooms.css";

const RedRoom = ({ backButtonClick }) => {
  const containerRef = useRef(null);
  const [containerRect, setContainerRect] = useState(null);
  const [currentObject, setCurrentObject] = useState(null);

  useEffect(() => {
    const updateRect = () => {
      const container = containerRef.current;
      if (container) {
        setContainerRect(container.getBoundingClientRect());
      }
    };

    // Initial setting after a short delay to ensure accurate measurement
    setTimeout(updateRect, 1000);

    // Update on resize
    window.addEventListener("resize", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  const getObjectsOfInterest = () => {
    if (!containerRect) return {};

    return {
      objectOfInterest1: {
        name: "PC",
        x1: 0.769 * containerRect.width,
        x2: 0.81 * containerRect.width,
        y1: 0.53 * containerRect.height,
        y2: 0.69 * containerRect.height,
      },
      objectOfInterest2: {
        name: "Gamebox",
        x1: 0.828 * containerRect.width,
        x2: 0.975 * containerRect.width,
        y1: 0.29 * containerRect.height,
        y2: 0.699 * containerRect.height,
      },
      objectOfInterest3: {
        name: "Youtube",
        x1: 0.48 * containerRect.width,
        x2: 0.59 * containerRect.width,
        y1: 0.626 * containerRect.height,
        y2: 0.744 * containerRect.height,
      },
      objectOfInterest4: {
        name: "CookieJar",
        x1: 0.257 * containerRect.width,
        x2: 0.395 * containerRect.width,
        y1: 0.57 * containerRect.height,
        y2: 0.7 * containerRect.height,
      },
      objectOfInterest5: {
        name: "Calender",
        x1: 0.036 * containerRect.width,
        x2: 0.093 * containerRect.width,
        y1: 0.227 * containerRect.height,
        y2: 0.352 * containerRect.height,
      },
    };
  };

  const checkObjectOfInterest = (x, y) => {
    const objects = getObjectsOfInterest();
    for (let key in objects) {
      const obj = objects[key];
      if (x > obj.x1 && x < obj.x2 && y > obj.y1 && y < obj.y2) {
        return obj.name;
      }
    }
    return null;
  };

  const onClickGif = (event) => {
    if (!containerRect) return;

    const clickX = event.clientX - containerRect.left;
    const clickY = event.clientY - containerRect.top;

    const clickedObject = checkObjectOfInterest(clickX, clickY);
    if (clickedObject) {
      console.log("Clicked on:", clickedObject);
    }
  };

  const onMouseMove = (event) => {
    if (!containerRect) return;

    const moveX = event.clientX - containerRect.left;
    const moveY = event.clientY - containerRect.top;

    const hoveredObject = checkObjectOfInterest(moveX, moveY);
    if (hoveredObject !== currentObject) {
      if (hoveredObject) {
        console.log("Entered:", hoveredObject);
      } else if (currentObject) {
        console.log("Left:", currentObject);
      }
      setCurrentObject(hoveredObject);
    }
  };

  const objects = getObjectsOfInterest();

  return (
    <div
      onClick={onClickGif}
      onMouseMove={onMouseMove}
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <img className="barGif" src="pixel-bar.gif" alt="Gif of bar" />
      {/* Temporary code to visualize the objects of interest */}
      {Object.values(objects).map((obj, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${obj.x1}px`,
            top: `${obj.y1}px`,
            width: `${obj.x2 - obj.x1}px`,
            height: `${obj.y2 - obj.y1}px`,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: "2px solid white",
            pointerEvents: "none",
          }}
        ></div>
      ))}
      {/* End of temporary code */}
      <button
        className="backButton"
        onClick={(event) => {
          event.stopPropagation();
          backButtonClick(event);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default RedRoom;
