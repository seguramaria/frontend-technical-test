import { render } from "@testing-library/react";
import { Header } from "./Header";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Header", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  it("renders the logo and search input when on results page", () => {
    mockRouter.setCurrentUrl("/results");

    const { getByAltText, getByRole } = render(
      <Header isResultsPage searchQuery="dog" />
    );

    expect(getByAltText("Google logo")).toBeInTheDocument();
    expect(getByRole("searchbox")).toHaveValue("dog");
  });

  it("renders the title and link when not on results page", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Agile Content")).toBeInTheDocument();
  });
});
