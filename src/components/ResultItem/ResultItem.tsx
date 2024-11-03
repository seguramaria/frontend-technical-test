import styles from "./ResultItem.module.css";

type Props = {
  id: number;
  url: string;
  title: string;
  description: string;
  handleSelect: (id: number) => void;
};

export const ResultItem = ({
  id,
  url,
  title,
  description,
  handleSelect,
}: Props) => {
  return (
    <li className={styles.list} onClick={() => handleSelect(id)}>
      <div className={styles.url}>{url}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </li>
  );
};
