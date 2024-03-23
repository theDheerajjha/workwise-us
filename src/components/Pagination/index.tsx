import React, { useState } from "react";
import "./index.scss"; // Import the CSS file

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const [currentPageState, setCurrentPageState] = useState(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPageState(page);
  };

  const prevButtonDisabled = currentPageState === 1;
  const nextButtonDisabled = currentPageState === totalPages;

  return (
    <div
      className="pagination-container"
      style={{ backgroundColor: "#308D46" }}
    >
      <div className="pagination">
        <button
          className="prev-button"
          disabled={prevButtonDisabled}
          onClick={() => handlePageChange(currentPageState - 1)}
        >
          Prev
        </button>
        <button
          className="next-button"
          disabled={nextButtonDisabled}
          onClick={() => handlePageChange(currentPageState + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
