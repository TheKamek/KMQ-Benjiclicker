import { useState, useEffect } from "react";
import "./App.css";
import Cookie from "./components/Cookie/Cookie";
import TopBar from "./components/TopBar/TopBar";
import Shop from "./components/Shop/Shop";

function App() {
  const [score, setScore] = useState(1000000000000);
  const [pointsToIncrease, setPointsToIncrease] = useState(1);
  const [autoClicksPerSecond, setAutoClicksPerSecond] = useState(0);
  const [cookieBurn, setCookieBurn] = useState(true);
  const [y, setY] = useState(0);
  const [pointMultiplier, setPointMultiplier] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => prevScore + autoClicksPerSecond);
      setY((pre) => pre - 3);
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClicksPerSecond]);
  useEffect(() => {
    if (y < 0) {
      setY(0);
    }
    if (y > 50) {
      setCookieBurn(false);
    } else {
      setCookieBurn(true);
    }
  }, [y]);
  const handleBenjiClick = () => {
    setScore((prevScore) => prevScore + pointsToIncrease * pointMultiplier);
    setY((pre) => pre + 1);
  };

  useEffect(() => {
    if (!cookieBurn) {
      setPointMultiplier(2);
    } else {
      setPointMultiplier(1);
    }
  }, [cookieBurn]);
  return (
    <div className="App">
      <TopBar score={score} autoClicksPerSecond={autoClicksPerSecond} />
      <Cookie
        onBenjiClick={handleBenjiClick}
        pointsToIncrease={pointsToIncrease}
        cookieBurn={cookieBurn}
        setCookieBurn={setCookieBurn}
        pointMultiplier={pointMultiplier}
      />
      <Shop
        setPointsToIncrease={setPointsToIncrease}
        pointsToIncrease={pointsToIncrease}
        setScore={setScore}
        score={score}
        setAutoClicksPerSecond={setAutoClicksPerSecond}
      />
    </div>
  );
}

export default App;
