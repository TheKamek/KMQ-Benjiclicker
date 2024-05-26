import React, { useState } from "react";
import "./MainApp.css";
import Github from "./Subpages/Github";
import Misc from "./Subpages/Misc";
import Notes from "./Subpages/Notes";
const MainApp = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <div className="Home">Home Content</div>;
      case "Contact":
        return <div className="Contact">Contact Content</div>;
      case "Github":
        return <Github></Github>;
      case "Data":
        return <div className="Data">Data Content</div>;
      case "Library":
        return <Notes></Notes>;
      case "Misc":
        return <Misc></Misc>;
      default:
        return <div className="Home">Home Content</div>;
    }
  };

  return (
    <div className="main-app">
      <div className="topbar">
        <nav>
          <ul>
            {["Home", "Contact", "Github", "Data", "Library", "Misc"].map(
              (tab) => (
                <li
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
      {activeTab === "Home" ? (
        <div className="feed">
          <div className="feedAccurate">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="feed-item">
                This is a placeholder for your component {index + 1}
              </div>
            ))}
          </div>
        </div>
      ) : (
        renderContent()
      )}
    </div>
  );
};

export default MainApp;
