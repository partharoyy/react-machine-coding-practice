import { useEffect, useState } from 'react';
import './stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState({ sec: 0, min: 0, hr: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          let newSec = prev.sec + 1;
          let newMin = prev.min;
          let newHr = prev.hr;

          if (newSec >= 60) {
            newMin += 1;
            newSec = 0;
          }

          if (newMin >= 60) {
            newHr += 1;
            newMin = 0;
          }

          return { sec: newSec, min: newMin, hr: newHr };
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setTime({ sec: 0, min: 0, hr: 0 });
    setIsRunning(false);
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <div className='time-container'>
        {`${time.hr.toString().padStart(2, '0')}:${time.min.toString().padStart(2, '0')}:${time.sec
          .toString()
          .padStart(2, '0')}`}
      </div>
      <div className='btn-container'>
        <button onClick={handleStart}>start</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </>
  );
}

export default Stopwatch;
