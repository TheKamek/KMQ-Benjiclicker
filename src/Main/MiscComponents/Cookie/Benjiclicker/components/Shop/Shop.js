import React, { useState } from "react";
import "./ShopStyle.css";

const Shop = ({
  setPointsToIncrease,
  pointsToIncrease,
  setScore,
  score,
  setAutoClicksPerSecond,
}) => {
  const [shopOpen, setShopOpen] = useState(true);
  const [autoclicker, setautoclicker] = useState(0);
  const [Gautoclicker, setGautoclicker] = useState(0);
  const [Rautoclicker, setRautoclicker] = useState(0);
  const closeShop = () => {
    setShopOpen(!shopOpen);
  };

  return (
    <>
      {shopOpen ? (
        <div className="shopMain">
          <div className="topDiv">
            <h1>Shop</h1>
          </div>
          <p
            onClick={() => {
              closeShop();
            }}
            className="closeBTN"
          >
            -{">"}
          </p>
          <div className="shopItems">
            <div
              className="item"
              onClick={() => {
                if (score >= pointsToIncrease * 25) {
                  setScore(score - pointsToIncrease * 25);
                  setPointsToIncrease(pointsToIncrease + 1);
                }
              }}
            >
              💪 Gym-Master: {pointsToIncrease}, Buy: {pointsToIncrease * 25}
            </div>
            <div
              className="item"
              onClick={() => {
                if (
                  score >=
                  (1 + autoclicker) * 100 + autoclicker * autoclicker * 25
                ) {
                  setScore(
                    score -
                      ((1 + autoclicker) * 100 + autoclicker * autoclicker * 25)
                  );
                  setautoclicker(autoclicker + 1);
                  setAutoClicksPerSecond((prev) => prev + 1);
                }
              }}
            >
              Lia's Motivation 1C/s: {autoclicker}, Buy:{" "}
              {(1 + autoclicker) * 100 + autoclicker * autoclicker * 25}
            </div>
            <div
              className="item"
              onClick={() => {
                if (
                  score >=
                  (1 + Gautoclicker) * 1000 + Gautoclicker * Gautoclicker * 25
                ) {
                  setScore(
                    score -
                      ((1 + Gautoclicker) * 1000 +
                        Gautoclicker * Gautoclicker * 25)
                  );
                  setGautoclicker(Gautoclicker + 1);
                  setAutoClicksPerSecond((prev) => prev + 20);
                }
              }}
            >
              Erschrockener-Andri-Clicker 20C/s: {Gautoclicker}, Buy:{" "}
              {(1 + Gautoclicker) * 1000 + Gautoclicker * Gautoclicker * 25}
              <br />
              <div className="nextLineDiv">
                {Array.from({ length: Math.min(10, Gautoclicker) }, (_, i) => (
                  <img
                    key={i}
                    alt={`Gautoclicker ${i}`}
                    src="/gallu.jpg"
                    className={`imgSub animated-delay`}
                    style={{ "--delay": `${Math.random() * 5}s` }}
                  />
                ))}
              </div>
            </div>

            <div
              className="item"
              onClick={() => {
                if (
                  score >=
                  (1 + Rautoclicker) * 50000 + Rautoclicker * Rautoclicker * 25
                ) {
                  setScore(
                    score -
                      ((1 + Rautoclicker) * 50000 +
                        Rautoclicker * Rautoclicker * 25)
                  );
                  setRautoclicker(Rautoclicker + 1);
                  setAutoClicksPerSecond((prev) => prev + 150);
                }
              }}
            >
              Wütender-Andri-Clicker 150C/s: {Rautoclicker}, Buy:{" "}
              {(1 + Rautoclicker) * 50000 + Rautoclicker * Rautoclicker * 25}
              <br />
              <div>
                {Array.from({ length: Math.min(10, Rautoclicker) }, (_, i) => (
                  <img
                    key={i}
                    alt={`Rautoclicker ${i}`}
                    src="/ruthu.png"
                    className="imgSub"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p
          onClick={() => {
            closeShop();
          }}
          className="openBTN"
        >
          {"<"}-
        </p>
      )}
    </>
  );
};

export default Shop;
