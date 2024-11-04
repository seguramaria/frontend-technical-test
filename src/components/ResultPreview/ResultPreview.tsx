import styles from "./ResultPreview.module.css";

type Props = {
  img: string;
  url: string;
  title: string;
  description: string;
};

export const ResultPreview = ({ img, url, title, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={img}
          alt={`${title} img`}
          className={styles.img}
          loading="lazy"
        />
      </div>
      <div className={styles.url}>{url}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
