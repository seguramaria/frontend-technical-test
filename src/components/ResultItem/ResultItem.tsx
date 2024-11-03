import styles from "./ResultItem.module.css";

type Props = {
  url: string;
  title: string;
  description: string;
};

export const ResultItem = ({ url, title, description }: Props) => {
  return (
    <li className={styles.list}>
      <div className={styles.url}>{url}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </li>
  );
};
