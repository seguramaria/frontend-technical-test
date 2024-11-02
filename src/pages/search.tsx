import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import fetchData from "@/utils/getAnimals";
import { AnimalKey, AnimalResult } from "@/types";
import { faker } from "@faker-js/faker";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [results, setResults] = useState<AnimalResult[]>([]);

  const animalTypes = Object.keys(faker.animal);

  const loadResults = async (searchQuery: string) => {
    if (animalTypes.includes(searchQuery)) {
      const results = await fetchData(searchQuery as AnimalKey);
      setResults(results);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      loadResults(searchQuery);
    }
  }, [searchQuery]);

  return (
    <main>
      <div>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </div>
    </main>
  );
}
