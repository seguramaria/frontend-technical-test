import { AnimalResult } from "@/types";
import styles from "./ResultList.module.css";
import { ResultItem } from "../ResultItem/ResultItem";
type Props = {
  results: AnimalResult[];
};

export const ResultList = ({ results }: Props) => {
  return (
    <div className={styles.resultsContainer}>
      <ul>
        {results.map((result) => (
          <ResultItem
            url={result.url}
            title={result.title}
            description={result.description}
          />
        ))}
      </ul>
      <div className={styles.resultPreview}></div>
    </div>
  );
};
