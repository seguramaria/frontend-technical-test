import { render, fireEvent } from "@testing-library/react";
import { ResultList } from "./ResultsList";

jest.mock("@/components/ResultItem/ResultItem", () => ({
  ResultItem: jest.fn(({ handleSelect, title }) => (
    <li data-testid="result-item" onClick={() => handleSelect(1)}>
      {title}
    </li>
  )),
}));

jest.mock("@/components/ResultPreview/ResultPreview", () => ({
  ResultPreview: jest.fn(({ description }) => <div>{description}</div>),
}));

describe("ResultList", () => {
  const mockResults = [
    {
      id: 1,
      url: "https://example.com/1",
      title: "Result 1",
      description: "Description 1",
      image: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      url: "https://example.com/2",
      title: "Result 2",
      description: "Description 2",
      image: "https://example.com/image2.jpg",
    },
  ];

  it("renders loading state", () => {
    const { getByTestId } = render(
      <ResultList results={[]} isLoading={true} animalTypes={[]} />
    );
    expect(getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders error message when the search query is wrong", () => {
    const { getByText } = render(
      <ResultList
        results={[]}
        isLoading={false}
        error="No results found for"
        searchQuery="dinosaur"
        animalTypes={[]}
      />
    );
    expect(getByText("No results found for")).toBeInTheDocument();
    expect(getByText('"dinosaur"')).toBeInTheDocument();
  });

  it("renders results correctly", () => {
    const { getByText } = render(
      <ResultList
        results={mockResults}
        isLoading={false}
        searchQuery="dog"
        animalTypes={["dog", "cat"]}
      />
    );
    expect(getByText("Result 1")).toBeInTheDocument();
    expect(getByText("Result 2")).toBeInTheDocument();
  });

  it("opens preview when item is selected", () => {
    const { getByText, getByTestId } = render(
      <ResultList
        results={mockResults}
        isLoading={false}
        searchQuery="dog"
        animalTypes={["dog", "cat"]}
      />
    );
    fireEvent.click(getByText("Result 1"));
    expect(getByTestId("preview-desktop")).toHaveTextContent("Description 1");
    expect(getByTestId("preview-mobile")).toHaveTextContent("Description 1");
  });

  it("closes preview when overlay is clicked", () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <ResultList
        results={mockResults}
        isLoading={false}
        searchQuery="dog"
        animalTypes={["dog", "cat"]}
      />
    );

    fireEvent.click(getByText("Result 1"));
    expect(getByTestId("preview-mobile")).toBeInTheDocument();
    fireEvent.click(getByTestId("preview-mobile"));
    expect(queryByTestId("preview-mobile")).not.toBeInTheDocument();
  });
});
