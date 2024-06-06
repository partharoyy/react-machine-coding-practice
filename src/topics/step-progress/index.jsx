import { useState } from 'react';
import './index.css';

function StepProgress() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = Array.from({ length: 5 }, (_, i) => `Step ${i + 1}`);

  const handlePrev = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const calculateCurrentStepWidth = () => {
    return `${(100 / steps.length - 1) * activeStep}%`;
  };

  return (
    <div className='main-container'>
      <h1>Step progress </h1>
      <div className='steps-container'>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{ width: calculateCurrentStepWidth() }}
            className={`step ${i <= activeStep ? 'active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>
      <button onClick={handlePrev} disabled={activeStep === 0} className={`btn`}>
        prev
      </button>
      <button onClick={handleNext} disabled={activeStep === steps.length - 1} className={`btn`}>
        next
      </button>
    </div>
  );
}

export default StepProgress;
