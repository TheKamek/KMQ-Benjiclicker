import "./TopBarStyle.css";

const TopBar = ({ score, autoClicksPerSecond }) => {
  return (
    <div className="topBarDiv">
      Score: {score} &nbsp;&nbsp;&nbsp; Clicks/s: {autoClicksPerSecond}
    </div>
  );
};

export default TopBar;
