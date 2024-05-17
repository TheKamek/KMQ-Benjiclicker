import React, { useState, useEffect } from "react";
import "./CookieStyle.css";

const Cookie = ({
  onBenjiClick,
  pointsToIncrease,
  cookieBurn,
  setCookieBurn,
  pointMultiplier,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const [yPos, setYPos] = useState([]);
  const [xPos, setXPos] = useState([]);

  const [divArray, setDivArray] = useState([]);

  const handleBenjiClick = () => {
    onBenjiClick();

    const yPos = Math.max(
      100,
      Math.floor(Math.random() * window.screen.height)
    );
    const xPos = Math.max(
      Math.floor(Math.random() * window.screen.width - 400)
    );

    setYPos((prevArray) => [...prevArray, yPos]);
    setXPos((prevArray) => [...prevArray, xPos]);

    setDivArray((prevArray) => [...prevArray, "value"]);

    setTimeout(() => {
      //remove first thing from array
      setYPos((prevDivArray) => prevDivArray.slice(1));
      setXPos((prevDivArray) => prevDivArray.slice(1));

      setDivArray((prevDivArray) => prevDivArray.slice(1));
    }, 3000);

    if (!isClicked) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  };

  return (
    <div className="main">
      <>
        {cookieBurn == true ? (
          <div>
            <img
              className={`benjiCookie ${isClicked ? "clicked" : ""}`}
              src="/benjamin-removebg-preview.png"
              alt="benji bench"
              onClick={() => {
                handleBenjiClick();
              }}
            />
          </div>
        ) : (
          <div>
            <img
              className={`benjiCookie ${isClicked ? "clicked" : ""}`}
              src="/benjamin-burn.png"
              alt="benji bench"
              onClick={() => {
                handleBenjiClick();
              }}
            />
          </div>
        )}
      </>
      {divArray.map((value, index) => (
        <div
          style={{
            position: "fixed",
            top: yPos[index],
            left: xPos[index],
          }}
          key={index}
        >
          +{pointsToIncrease * pointMultiplier}
        </div>
      ))}
    </div>
  );
};

export default Cookie;
