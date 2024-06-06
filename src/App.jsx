import './App.css';
import DigitalClock from './topics/digitalclock';
import Pagination from './topics/pagination/pagination';
import StepProgress from './topics/step-progress/step-progress';
import Stopwatch from './topics/stopwatch/stopwatch';

function App() {
  return (
    <>
      <Pagination />
      <DigitalClock />
      <StepProgress />
      <Stopwatch />
    </>
  );
}

export default App;
