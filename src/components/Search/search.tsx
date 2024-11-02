import { FormEvent, useRef, useState } from "react";
import styles from "./search.module.css";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log("results", searchValue);
  };

  const clearSearch = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formBox}>
        <img
          src={"search.svg"}
          alt="Search Icon"
          className={styles.searchIcon}
        />
        <input
          ref={inputRef}
          type="search"
          className={styles.input}
          value={searchValue}
          onChange={() => setSearchValue(inputRef.current?.value || "")}
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
      <button
        type="submit"
        onSubmit={handleSubmit}
        disabled={searchValue === ""}
        className={styles.submitButton}
      >
        Buscar
      </button>
    </form>
  );
};
