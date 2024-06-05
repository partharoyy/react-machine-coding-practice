import { useState } from 'react';
import './pagination.css';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const dummyData = Array.from({ length: 50 }, (v, i) => `item ${i + 1}`);
  const totalItemsPerPage = 10;
  const totalPages = Math.ceil(dummyData.length / totalItemsPerPage);
  const indexOfLastElement = currentPage * totalItemsPerPage;
  const indexOfFirstElement = indexOfLastElement - totalItemsPerPage;
  const currentsItemsOnThePage = dummyData.slice(indexOfFirstElement, indexOfLastElement);
  const pageButtonArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (num) => {
    setCurrentPage(num);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {currentsItemsOnThePage.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button disabled={currentPage === 1} onClick={handlePrevious} className='navBtn'>
        prev
      </button>
      {pageButtonArray.map((num) => (
        <button
          key={num}
          onClick={() => handlePageChange(num)}
          className={`numberBtn ${currentPage === num ? 'active' : ''}`}
        >
          {num}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={handleNext} className='navBtn'>
        next
      </button>
    </div>
  );
}

export default Pagination;
