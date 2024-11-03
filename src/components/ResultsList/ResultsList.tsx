import { useState } from "react";
import { AnimalResult } from "@/types";
import styles from "./ResultsList.module.css";
import { ResultItem } from "@/components/ResultItem/ResultItem";
import { ResultPreview } from "@/components/ResultPreview/ResultPreview";
import { Skeleton } from "../Skeleton/Skeleton";

type Props = {
  results: AnimalResult[];
  isLoading: boolean;
};

export const ResultList = ({ results, isLoading }: Props) => {
  const [selectedItem, setSelectedItem] = useState<AnimalResult | null>(null);

  const handleSelect = (id: number) => {
    const item = results.find((result) => result.id === id);
    if (item) return setSelectedItem(item);
  };

  const handleClosePreview = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.resultsContainer}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <ul className={styles.resultsList}>
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
          <div className={styles.resultPreviewContainer}>
            {selectedItem && (
              <ResultPreview
                img={selectedItem.image}
                url={selectedItem.url}
                title={selectedItem.title}
                description={selectedItem.description}
              />
            )}
          </div>
          {selectedItem && (
            <div className={styles.overlay} onClick={handleClosePreview}>
              <div className={styles.resultPreview}>
                <ResultPreview
                  img={selectedItem.image}
                  url={selectedItem.url}
                  title={selectedItem.title}
                  description={selectedItem.description}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
