import { useState } from "react";
import { AnimalResult } from "@/types";
import styles from "./ResultsList.module.css";
import { ResultItem } from "@/components/ResultItem/ResultItem";
import { ResultPreview } from "@/components/ResultPreview/ResultPreview";

type Props = {
  results: AnimalResult[];
};

export const ResultList = ({ results }: Props) => {
  const [selectedItem, setSelectedItem] = useState<AnimalResult | null>(null);

  const handleSelect = (id: number) => {
    const item = results.find((result) => result.id === id);
    if (item) return setSelectedItem(item);
  };

  return (
    <div className={styles.resultsContainer}>
      <ul>
        {results.map((result) => (
          <ResultItem
            key={result.id}
            id={result.id}
            url={result.url}
            title={result.title}
            description={result.description}
            handleSelect={(id) => handleSelect(id)}
          />
        ))}
      </ul>
      <div className={styles.resultPreview}>
        {selectedItem && (
          <ResultPreview
            img={selectedItem.image}
            url={selectedItem.url}
            title={selectedItem.title}
            description={selectedItem.description}
          />
        )}
      </div>
    </div>
  );
};
