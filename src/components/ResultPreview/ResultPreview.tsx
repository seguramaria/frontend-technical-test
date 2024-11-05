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
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          style={{ objectFit: "cover", padding: "8px 8px 0 8px" }}
          priority
        />
      </div>
      <div className={styles.content}>
        <div className={styles.url}>{url}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
