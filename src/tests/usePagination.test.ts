import { renderHook, act } from "@testing-library/react";
import { usePagination } from "@/hooks/usePagination";
import { AnimalResult } from "@/types";

const mockData: AnimalResult[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Animal ${index + 1}`,
  url: "https://odd-suitcase.com",
  description: "Caries cauda advenio vinco vulgivagus amissio.",
  image: "https://loremflickr.com/400/200/dog?lock=1467031506851803",
}));

describe("usePagination", () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("initializes correctly on the first page", () => {
    const { result } = renderHook(() => usePagination(mockData, 10));
    expect(result.current.currentPage).toBe(0);
    expect(result.current.paginatedResults.length).toBe(10);
    expect(result.current.paginatedResults[0].title).toBe("Animal 1");
  });

  it("goes to the next page and shows correct results", () => {
    const { result } = renderHook(() => usePagination(mockData, 10));

    act(() => {
      result.current.handleNextPage();
    });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.paginatedResults[0].title).toBe("Animal 11");
  });

  it("goes back to the previous page and shows correct results", () => {
    const { result } = renderHook(() => usePagination(mockData, 10));

    act(() => {
      result.current.handleNextPage();
    });

    act(() => {
      result.current.handlePrevPage();
    });

    expect(result.current.currentPage).toBe(0);
    expect(result.current.paginatedResults[0].title).toBe("Animal 1");
  });

  it("disables the 'previous' button on the first page", () => {
    const { result } = renderHook(() => usePagination(mockData, 10));
    expect(result.current.disablePrevButton).toBe(true);
  });

  it("disables the 'next' button on the last page", () => {
    const { result } = renderHook(() => usePagination(mockData, 10));

    act(() => {
      Array.from({ length: 9 }).forEach(() => result.current.handleNextPage());
    });

    expect(result.current.disableNextButton).toBe(true);
  });

  it("enables the 'next' button while not on the last page", () => {
    const { result } = renderHook(() => usePagination(mockData, 10));
    expect(result.current.disableNextButton).toBe(false);

    act(() => {
      result.current.handleNextPage();
    });

    expect(result.current.disableNextButton).toBe(false);
  });
});
