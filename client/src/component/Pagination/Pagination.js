import React from "react";

import "./Pagination.css";

function Pagination({ dataLength, currentPage, setCurrentPage, itemPerPage }) {
  const totalPages = Math.ceil(dataLength / itemPerPage);
  return (
    <div className="pagination">
      <div className="items">
        <button
          className="arrow"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        <button
          className="arrow"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span>{`${currentPage}/${totalPages}`}</span>
        <button
          className="arrow"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
        <button
          className="arrow"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
