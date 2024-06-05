import { useEffect, useState } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h1>Digital clock</h1>
      <p style={{ color: 'purple', fontWeight: 'bolder', fontSize: '2rem' }}>{time.toLocaleTimeString()}</p>
      <p style={{ color: 'brown', fontWeight: 'bold', fontSize: '1.5rem' }}>
        {time.toLocaleDateString(undefined, {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
    </div>
  );
}

export default DigitalClock;
