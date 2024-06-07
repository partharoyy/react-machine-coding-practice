import { useEffect, useState } from 'react';
import styles from './quotes-generator.module.css';

function QuotesGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchQuote() {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.quotable.io/quotes/random');
      const data = await response.json();

      if (data) {
        setQuotes(data[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleRefresh() {
    fetchQuote();
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h1>Random quotes generator</h1>
      <div className={styles.mainContainer}>
        <p className={styles.content}>{quotes.content}</p>
        <p className={styles.author}>- {quotes.author}</p>
      </div>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default QuotesGenerator;
