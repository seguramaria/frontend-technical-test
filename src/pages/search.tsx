import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import fetchData from "@/utils/getAnimals";
import { AnimalKey, AnimalResult } from "@/types";
import { faker } from "@faker-js/faker";
import { Header } from "@/components/Header/Header";
import { ResultList } from "@/components/ResultsList/ResultsList";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || undefined;
  const [results, setResults] = useState<AnimalResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const animalTypes = Object.keys(faker.animal);

  const loadResults = async (searchQuery: string) => {
    setIsLoading(true);
    setError(null);
    try {
      if (animalTypes.includes(searchQuery)) {
        const results = await fetchData(searchQuery as AnimalKey);
        setResults(results);
      } else {
        setError("No results found for");
      }
    } catch {
      setError("Loading error, please try again");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      loadResults(searchQuery);
    }
  }, [searchQuery]);

  return (
    <>
      <Header searchQuery={searchQuery} />
      <main>
        <ResultList
          results={results}
          isLoading={isLoading}
          searchQuery={searchQuery}
          error={error}
          animalTypes={animalTypes.slice(1, -1)}
        />
      </main>
    </>
  );
}
