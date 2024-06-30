import React, { useEffect, useState } from "react";

const Countdown = () => {
  let initialTime = 60;
  const [time, settime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      settime(prevTime=> {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div>
      {time > 0 ? <h1>Remaining Time: {time} seconds</h1> : <h1>Time's up!</h1>}
    </div>
  );
};

export default Countdown;
