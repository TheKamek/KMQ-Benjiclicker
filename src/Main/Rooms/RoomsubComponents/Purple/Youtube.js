import React from "react";
import "./Youtube.css";
const Youtube = ({ backButtonClickRoom }) => {
  return (
    <div>
      Youtube{" "}
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

export default Youtube;
