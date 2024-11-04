import fetchData from "@/utils/getAnimals";
import { AnimalKey, AnimalResult } from "@/types";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";

export const useFetchData = (searchQuery?: string) => {
  const [results, setResults] = useState<AnimalResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const animalTypes = Object.keys(faker.animal).slice(1, -1);

  const loadResults = async (searchQuery: string) => {
    setIsLoading(true);
    try {
      if (animalTypes.includes(searchQuery)) {
        const fetchedResults = await fetchData(searchQuery as AnimalKey);
        setResults(fetchedResults);
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

  return {
    results,
    isLoading,
    error,
    animalTypes,
  };
};