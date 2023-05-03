import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  return (
    <div className="App">
      <h1>Timer</h1>
      {timer}
    </div>
  );
}
