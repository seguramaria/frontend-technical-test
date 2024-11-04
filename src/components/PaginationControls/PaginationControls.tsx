type Props = {
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  disableNextButton: boolean;
  disablePrevButton: boolean;
};

export const PaginationControl = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  disablePrevButton,
  disableNextButton,
}: Props) => {
  return (
    <div>
      <button onClick={handlePrevPage} disabled={disablePrevButton}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNextPage} disabled={disableNextButton}>
        Next
      </button>
    </div>
  );
};
