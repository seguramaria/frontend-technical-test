import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./Search";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => ({
  useRouter() {},
}));

describe("Search Component", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  it("renders correctly with initial search query", () => {
    render(<Search searchQuery="dog" />);

    const inputElement = screen.getByRole("searchbox");
    expect(inputElement).toHaveValue("dog");
  });

  it("updates search value when typing", () => {
    render(<Search />);
    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "cat" } });
    expect(input).toHaveValue("cat");
  });

  it("clears the search value when clear button is clicked", () => {
    render(<Search searchQuery="dog" />);
    const clearButton = screen.getByRole("button", { name: "✕" });
    fireEvent.click(clearButton);
    expect(screen.getByRole("searchbox")).toHaveValue("");
  });

  it("does not navigate if search value is empty", () => {
    render(<Search />);
    const submitButton = screen.getByRole("button", { name: "Buscar" });
    fireEvent.click(submitButton);
    expect(mockRouter.asPath).toBe("/");
  });
});
