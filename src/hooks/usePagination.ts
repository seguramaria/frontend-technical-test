import { useState, useEffect } from "react";
import { AnimalResult } from "@/types";

export const usePagination = (
  results: AnimalResult[],
  resultsPerPage: number
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedResults, setPaginatedResults] = useState<AnimalResult[]>([]);

  useEffect(() => {
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    setPaginatedResults(results.slice(start, end));
  }, [currentPage, results, resultsPerPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return {
    currentPage,
    paginatedResults,
    handleNextPage,
    handlePrevPage,
    disableNextButton: currentPage * resultsPerPage >= results.length,
    disablePrevButton: currentPage === 1,
  };
};
