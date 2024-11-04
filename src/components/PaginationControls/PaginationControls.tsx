import styles from "./PaginationControls.module.css";

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
    <div className={styles.paginationControl}>
      <button
        onClick={handlePrevPage}
        disabled={disablePrevButton}
        className={styles.button}
      >
        {!disablePrevButton && <img src="/prev.svg" />}
        <span>Prev</span>
      </button>
      <span>{currentPage}</span>
      <button
        onClick={handleNextPage}
        disabled={disableNextButton}
        className={styles.button}
      >
        <span> Next</span>
        {!disableNextButton && <img src="/next.svg" />}
      </button>
    </div>
  );
};
