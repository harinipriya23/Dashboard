import React from "react";

const PaginationControls = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePreviousBtn = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleNextBtn = () =>
    setCurrentPage((current) => Math.min(current + 1, totalPages));

  return (
    <div>
      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 rounded-md  dark:bg-themeDark-quaternary ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : " duration-300 bg-gray-300 hover:bg-gray-400 hover:dark:bg-themeDark-quinary"
          }`}
          onClick={handlePreviousBtn}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm font-medium">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={`px-4 py-2 rounded-md  dark:bg-themeDark-quaternary ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : " duration-300 bg-gray-300 hover:bg-gray-400 hover:dark:bg-themeDark-quinary"
          }`}
          onClick={handleNextBtn}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
