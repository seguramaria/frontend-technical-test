import { useState, useEffect } from "react";
import { AnimalResult } from "@/types";

export const usePagination = (
  results: AnimalResult[],
  resultsPerPage: number
) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedResults, setPaginatedResults] = useState<AnimalResult[]>([]);

  useEffect(() => {
    const start = currentPage * resultsPerPage;
    const end = start + resultsPerPage;
    setPaginatedResults(results.slice(start, end));
  }, [currentPage, results, resultsPerPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return {
    currentPage,
    paginatedResults,
    handleNextPage,
    handlePrevPage,
    disableNextButton: (currentPage + 1) * resultsPerPage >= results.length,
    disablePrevButton: currentPage === 0,
  };
};
