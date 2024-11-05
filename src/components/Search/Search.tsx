import { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Search.module.css";
import Image from "next/image";

type Props = {
  isResultsPage?: boolean;
  searchQuery?: string;
};

export const Search = ({ isResultsPage, searchQuery }: Props) => {
  const [searchValue, setSearchValue] = useState<string>(searchQuery || "");
  const router = useRouter();

  useEffect(() => {
    setSearchValue(searchQuery || "");
  }, [searchQuery]);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (searchValue) {
      router.push(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${isResultsPage ? styles.formResults : ""}`}
    >
      <div className={styles.formBox}>
        <Image src="/search.svg" alt="Search Icon" width={24} height={24} />

        <input
          type="search"
          className={styles.input}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="button"
          onClick={clearSearch}
          disabled={!searchValue}
          className={styles.clearButton}
        >
          ✕
        </button>
      </div>
      {!isResultsPage && (
        <button
          type="submit"
          disabled={searchValue === ""}
          className={styles.submitButton}
        >
          Buscar
        </button>
      )}
    </form>
  );
};
