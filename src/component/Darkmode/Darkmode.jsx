import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import "./Darkmode.css";

const Darkmode = () => {
  const [mode, setMode] = useState("darkmode");

  function toggle() {
    if (mode === "darkmode") {
      setMode("lightmode");
    } else {
      setMode("darkmode");
    }
  }
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div>
      <button
        onClick={() => {
          toggle();
          console.log(mode);
        }}
        className="darkmodebtn"
      >
        <FiSun />
      </button>
    </div>
  );
};

export default Darkmode;
