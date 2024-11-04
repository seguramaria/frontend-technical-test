import styles from "./PaginationControls.module.css";

type Props = {
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  disableButton: boolean;
  disableNextButton: boolean;
  disablePrevButton: boolean;
};

export const PaginationControl = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  disableButton,
  disablePrevButton,
  disableNextButton,
}: Props) => {
  return (
    <div
      className={`${styles.paginationControl}  ${
        disableButton ? styles.buttonsVisibility : ""
      }`}
    >
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
