import './App.css';
import DigitalClock from './topics/digitalclock';
import Pagination from './topics/pagination/pagination';
import StepProgress from './topics/step-progress';

function App() {
  return (
    <>
      <Pagination />
      <DigitalClock />
      <StepProgress />
    </>
  );
}

export default App;
