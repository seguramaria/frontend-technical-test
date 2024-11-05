import { act, renderHook } from "@testing-library/react";
import { useFetchData } from "@/hooks/useFetchData";
import fetchData from "@/utils/getAnimals";
import { AnimalResult } from "@/types";
import { waitFor } from "@testing-library/react";

jest.mock("@/utils/getAnimals");

describe("useFetchData hook", () => {
  const mockFetchData = fetchData as jest.MockedFunction<typeof fetchData>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns initial state correctly", () => {
    const { result } = renderHook(() => useFetchData());
    expect(result.current.results).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.animalTypes.length).toBeGreaterThan(0);
  });

  test("sets isLoading to true when a search query is provided", async () => {
    const { result } = renderHook(() => useFetchData("dog"));
    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });

  test("fetches results successfully when searchQuery matches an animal type", async () => {
    const mockData: AnimalResult[] = [
      {
        id: 1,
        url: "https://odd-suitcase.com",
        title: "Border Collie",
        description: "Caries cauda advenio vinco vulgivagus amissio.",
        image: "https://loremflickr.com/400/200/dog?lock=1467031506851803",
      },
    ];
    mockFetchData.mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useFetchData("dog"));

    await waitFor(() => expect(result.current.results).toEqual(mockData));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  test("sets error when searchQuery does not match any animal type", async () => {
    mockFetchData.mockResolvedValueOnce([]);

    const { result } = renderHook(() => useFetchData("invalidType"));

    await waitFor(() =>
      expect(result.current.error).toBe("No results found for")
    );
    expect(result.current.results).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });
});
