import './App.css';
import CurrencyConverter from './topics/currency-converter/CurrencyConverter';
import DigitalClock from './topics/digitalclock';
import Pagination from './topics/pagination/pagination';
import QuotesGenerator from './topics/quotes-generator/quotes-generator';
import StepProgress from './topics/step-progress/step-progress';
import Stopwatch from './topics/stopwatch/stopwatch';
import Tooltip from './topics/tooltip/tooltip';

function App() {
  return (
    <>
      <Pagination />
      <DigitalClock />
      <StepProgress />
      <Stopwatch />
      <QuotesGenerator />
      <Tooltip />
      <CurrencyConverter />
    </>
  );
}

export default App;
