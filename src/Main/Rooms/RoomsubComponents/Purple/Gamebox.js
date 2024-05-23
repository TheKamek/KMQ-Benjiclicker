import React from "react";
import "./Gamebox.css";
const Gamebox = ({ backButtonClickRoom }) => {
  return (
    <div>
      Gamebox{" "}
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

export default Gamebox;
