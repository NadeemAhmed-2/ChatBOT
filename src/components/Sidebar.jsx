
import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const toggleSidebar = () => {
    setExtended((prev) => !prev);
  };

  return (
    <div className={`sidebar ${extended ? "extended" : ""}`}>
      <div className="top">
        <img
          onClick={toggleSidebar}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is React?</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          <p>Activities</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;