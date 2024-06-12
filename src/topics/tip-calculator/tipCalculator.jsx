'./tipCalculator.css';

import { useState } from 'react';

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(10);
  const [splitCount, setSplitCount] = useState(1);
  const [tipAmount, setTipAmount] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  function handleCalculateTip() {
    if (!billAmount || billAmount <= 0 || !tipPercentage || tipPercentage <= 0) {
      setErrorMsg('Enter valid bill and tip amount');
      setTipAmount(null);
      return;
    }

    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    const totalAmount = bill + tip;
    const totalAmountPerPerson = totalAmount / splitCount;
    const tipAmountPerPerson = tip / splitCount;

    setTipAmount({
      totalAmount: totalAmount.toFixed(2),
      tipPerPerson: tipAmountPerPerson.toFixed(2),
      totalPerPerson: totalAmountPerPerson.toFixed(2),
    });
    setErrorMsg('');
  }

  return (
    <div>
      <h1>Tip calculator</h1>
      <div className='tip-main-container'>
        <div>
          <label>Bill Amount</label>
          <input type='number' value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />
        </div>
        <div>
          <label>Tip Percentage</label>
          <input type='number' value={tipPercentage} onChange={(e) => setTipPercentage(e.target.value)} />
        </div>
        <div>
          <label>Number of people</label>
          <input type='number' value={splitCount} onChange={(e) => setSplitCount(e.target.value)} />
        </div>
        <button onClick={handleCalculateTip}>Calculate Tip</button>
        {tipAmount ? (
          <div>
            <p>Total Amount: {tipAmount.totalAmount} </p>
            <p>Tip per person: {tipAmount.tipPerPerson}</p>
            <p>Total amount per person: {tipAmount.totalPerPerson}</p>
          </div>
        ) : null}
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </div>
  );
}

export default TipCalculator;
