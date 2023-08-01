import React, { useState } from "react";
import "./App.css";

function AppTime() {
  const [time, setTime] = useState(0);

  const updateTime = () => {
    setTime(time + 1);
  };

  return (
    <div className="App">
      <h2>{time}시</h2>
      <button type="button" onClick={updateTime}>
        시간 올리기
      </button>
    </div>
  );
}

export default AppTime;
