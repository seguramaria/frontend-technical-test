import { render, fireEvent } from "@testing-library/react";
import { PaginationControl } from "./PaginationControls";

describe("PaginationControl", () => {
  const mockHandleNextPage = jest.fn();
  const mockHandlePrevPage = jest.fn();

  const defaultProps = {
    currentPage: 1,
    handleNextPage: mockHandleNextPage,
    handlePrevPage: mockHandlePrevPage,
    disableButton: false,
    disableNextButton: false,
    disablePrevButton: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the current page number", () => {
    const { getByText } = render(<PaginationControl {...defaultProps} />);
    expect(getByText("1")).toBeInTheDocument();
  });

  it("calls handleNextPage when the next button is clicked", () => {
    const { getByText } = render(<PaginationControl {...defaultProps} />);
    fireEvent.click(getByText("Next"));
    expect(mockHandleNextPage).toHaveBeenCalledTimes(1);
  });

  it("calls handlePrevPage when the prev button is clicked", () => {
    const { getByText } = render(<PaginationControl {...defaultProps} />);
    fireEvent.click(getByText("Prev"));
    expect(mockHandlePrevPage).toHaveBeenCalledTimes(1);
  });

  it("disables the next button when disableNextButton is true", () => {
    const { getByText } = render(
      <PaginationControl {...defaultProps} disableNextButton={true} />
    );
    expect(getByText("Next").closest("button")).toBeDisabled();
  });

  it("disables the prev button when disablePrevButton is true", () => {
    const { getByText } = render(
      <PaginationControl {...defaultProps} disablePrevButton={true} />
    );
    expect(getByText("Prev").closest("button")).toBeDisabled();
  });

  it("applies the hidden button class when disableButton is true", () => {
    const { container } = render(
      <PaginationControl {...defaultProps} disableButton={true} />
    );
    expect(container.firstChild).toHaveClass("buttonsVisibility");
  });

  it("does not render the previous image when disablePrevButton is true", () => {
    const { queryByAltText } = render(
      <PaginationControl {...defaultProps} disablePrevButton={true} />
    );
    expect(queryByAltText("prev.svg")).not.toBeInTheDocument();
  });

  it("does not render the next image when disableNextButton is true", () => {
    const { queryByAltText } = render(
      <PaginationControl {...defaultProps} disableNextButton={true} />
    );
    expect(queryByAltText("next.svg")).not.toBeInTheDocument();
  });
});
