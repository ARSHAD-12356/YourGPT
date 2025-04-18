import React, { useContext } from "react";
import "./Chatsection.css";
import { LuSendHorizontal } from "react-icons/lu";
import Darkmode from "../Darkmode/Darkmode";
import { dataContext } from "../../Context/UserContext";
const Chatsection = () => {
  let { sent } = useContext(dataContext);

  return (
    <div className="chatsection">
      <div className="topsection">
        <div className="headings">
          <span>HELLO ARSHXCODER,</span>
          <span>I'm Your Own Assistant</span>
          <span>What can I help you...?</span>
        </div>
      </div>
      <div className="bottomsection">
        <input type="text" placeholder="Enter a prompt" />
        <button
          id="sendbtn"
          onClick={() => {
            sent();
          }}
        >
          <LuSendHorizontal />
        </button>
        <Darkmode />
      </div>
    </div>
  );
};

export default Chatsection;
