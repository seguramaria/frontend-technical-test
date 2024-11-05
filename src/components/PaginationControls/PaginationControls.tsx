import styles from "./PaginationControls.module.css";
import Image from "next/image";

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
        {!disablePrevButton && (
          <Image
            alt="Show previous results"
            src="/prev.svg"
            width={24}
            height={24}
          />
        )}
        <span>Prev</span>
      </button>
      <span>{currentPage}</span>
      <button
        onClick={handleNextPage}
        disabled={disableNextButton}
        className={styles.button}
      >
        <span> Next</span>
        {!disableNextButton && (
          <Image
            alt="Show next results"
            src="/next.svg"
            width={24}
            height={24}
          />
        )}
      </button>
    </div>
  );
};
