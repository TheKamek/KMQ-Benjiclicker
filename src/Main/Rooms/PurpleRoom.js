import React, { useRef, useEffect, useState } from "react";
import Calendar from "./RoomsubComponents/Purple/Calendar";
const PurpleRoom = ({ backButtonClick }) => {
  const containerRef = useRef(null);
  const [containerRect, setContainerRect] = useState(null);
  const [currentObject, setCurrentObject] = useState(null);
  const [renderRoom, setRenderRoom] = useState(true);
  const [gamebox, setGamebox] = useState(false);
  const [gameboy, setGameboy] = useState(false);
  const [computer, setComputer] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const backButtonClickRoom = () => {
    setGamebox(false);
    setGameboy(false);
    setComputer(false);
    setCalendar(false);
    setYoutube(false);
    setRenderRoom(true);
  };
  useEffect(() => {
    const updateRect = () => {
      const container = containerRef.current;
      if (container) {
        setContainerRect(container.getBoundingClientRect());
      }
    };
    setTimeout(updateRect, 1000);
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
        y1: 0.535 * containerRect.height,
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
        x1: 0.52 * containerRect.width,
        x2: 0.59 * containerRect.width,
        y1: 0.309 * containerRect.height,
        y2: 0.474 * containerRect.height,
      },
      objectOfInterest4: {
        name: "Gameboy",
        x1: 0.367 * containerRect.width,
        x2: 0.475 * containerRect.width,
        y1: 0.705 * containerRect.height,
        y2: 0.89 * containerRect.height,
      },
      objectOfInterest5: {
        name: "Calendar",
        x1: 0.036 * containerRect.width,
        x2: 0.093 * containerRect.width,
        y1: 0.215 * containerRect.height,
        y2: 0.342 * containerRect.height,
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
      switch (clickedObject) {
        case "Calendar":
          setCalendar(true);
          setRenderRoom(false);
          console.log("Man");
          break;
        default:
          console.log(clickedObject);
      }
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
    <>
      {renderRoom ? (
        <div
          onClick={onClickGif}
          onMouseMove={onMouseMove}
          ref={containerRef}
          style={{ position: "relative" }}
        >
          <img src="GirlRoom.gif" alt="Room of girl" className="barGif" />

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
      ) : (
        <div>
          {gamebox && <div />}
          {gameboy && <div />}
          {computer && <div />}
          {youtube && <div />}
          {calendar && <Calendar backButtonClickRoom={backButtonClickRoom} />}
        </div>
      )}
    </>
  );
};

export default PurpleRoom;
