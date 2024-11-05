import styles from "./Skeleton.module.css";

export const Skeleton = () => {
  return (
    <div className={styles.skeleton} data-testid="skeleton">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={styles.skeletonContainer}>
          <div
            className={`${styles.skeletonItem} ${styles.skeletonItemSmall}`}
          ></div>
          <div
            className={`${styles.skeletonItem} ${styles.skeletonItemMedium}`}
          ></div>
          <div
            className={`${styles.skeletonItem} ${styles.skeletonItemLarge}`}
          ></div>
        </div>
      ))}
    </div>
  );
};
