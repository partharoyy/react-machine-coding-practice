import { useState } from 'react';
import './tooltip.css';

function Tooltip() {
  const [isVisible, setIsVisible] = useState(false);
  let timer;

  function handleMouseEnter() {
    timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }

  function handleMouseLeave() {
    setIsVisible(false);
    clearTimeout(timer);
  }

  return (
    <div>
      <h1>Tooltip</h1>
      <div className='hover'>
        <p className='tooltip'>{isVisible ? 'I am tooltip' : ''}</p>
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Hover on me
        </p>
      </div>
    </div>
  );
}

export default Tooltip;
