import { useEffect, useState } from 'react';
import './CurrencyConverter.css';

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  async function fetchExchangeRate() {
    try {
      const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await response.json();

      const calculateRate = data.rates[toCurrency];
      setExchangeRate(calculateRate);
      setConvertedAmount(amount * calculateRate).toFixed(2);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchExchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <div className='currency-main-container'>
        <div className='from'>
          <input
            type='number'
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            name='amount'
            placeholder='Enter a amount'
          />
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value='USD'>USD</option>
            <option value='INR'>INR</option>
            <option value='EUR'>EUR</option>
          </select>
        </div>
        <p>To</p>
        <div className='to'>
          <input type='text' readOnly value={convertedAmount} />
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value='USD'>USD</option>
            <option value='INR'>INR</option>
            <option value='EUR'>EUR</option>
          </select>
        </div>
        <p className='currency-info'>
          Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
        </p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
