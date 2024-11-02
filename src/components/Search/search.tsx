import { FormEvent, useRef, useState } from "react";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log("results", searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          ref={inputRef}
          type="search"
          value={searchValue}
          onChange={() => setSearchValue(inputRef.current?.value || "")}
        />
      </div>
      <button type="submit" onSubmit={handleSubmit}>
        Buscar
      </button>
    </form>
  );
};
