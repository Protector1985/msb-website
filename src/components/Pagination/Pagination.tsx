"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

//Reusable pagination component
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="page-navigation-area">
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
            >
              <i className="bx bx-chevrons-left"></i>
            </button>
          </li>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index + 1}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage + 1)}
            >
              <i className="bx bx-chevrons-right"></i>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
