import React from "react";

type Props = {
  currentPage: number;
  resultsLength: number;
  resultsPerPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
};

export const PaginationControl = ({
  currentPage,
  resultsLength,
  resultsPerPage,
  handleNextPage,
  handlePrevPage,
}: Props) => {
  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 0}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button
        onClick={handleNextPage}
        disabled={(currentPage + 1) * resultsPerPage >= resultsLength}
      >
        Next
      </button>
    </div>
  );
};
