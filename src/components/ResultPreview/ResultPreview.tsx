import styles from "./ResultPreview.module.css";
import Image from "next/image";

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
        <Image
          src={img}
          alt={`${title} img`}
          className={styles.img}
          width={400}
          height={200}
          loading="lazy"
        />
      </div>
      <div className={styles.url}>{url}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
