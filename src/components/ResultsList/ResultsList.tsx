import { useState } from "react";
import { AnimalResult } from "@/types";
import styles from "./ResultsList.module.css";
import { ResultItem } from "@/components/ResultItem/ResultItem";
import { ResultPreview } from "@/components/ResultPreview/ResultPreview";
import { Skeleton } from "../Skeleton/Skeleton";

type Props = {
  results: AnimalResult[];
  isLoading: boolean;
  searchQuery?: string;
  error?: string | null;
  animalTypes: string[];
};

export const ResultList = ({
  results,
  isLoading,
  searchQuery,
  error,
  animalTypes,
}: Props) => {
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
      ) : error || searchQuery === undefined ? (
        <div className={styles.errorContainer}>
          {searchQuery && (
            <p>
              {error}{" "}
              <span className={styles.searchQuery}>"{searchQuery}"</span>
            </p>
          )}
          <p>
            Try looking for:{" "}
            <span className={styles.searchQuery}>{animalTypes.join(", ")}</span>
          </p>
        </div>
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
          <div
            className={styles.resultPreviewContainer}
            data-testid="preview-desktop"
          >
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
            <div
              className={styles.overlay}
              onClick={handleClosePreview}
              data-testid="preview-mobile"
            >
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
