import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css";

const Sidebar = () => {
  const [Extend, setExtend] = useState(false);

  useEffect(() => {
    console.log(Extend); // Logs the updated state
  }, [Extend]);

  return (
    <div className="sidebar-div">
      <GiHamburgerMenu
        id="ham"
        onClick={() => {
          setExtend((prev) => !prev);
        }}
      />
      <div className="newchat">
        <FaPlus />
        {Extend ? <p>New Chat</p> : null}
      </div>
      <div className="recent">
        <FaRegMessage />
        {Extend ? <p>who are you</p> : ""}
      </div>
    </div>
  );
};

export default Sidebar;
