import React from "react";
import "./Gamebox.css";
const Gameboy = ({ backButtonClickRoom }) => {
  return (
    <div>
      Gameboy{" "}
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

export default Gameboy;
