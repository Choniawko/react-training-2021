import { BookDetails } from "./BookDetails";
import { render, screen } from "@testing-library/react";

describe("BookDetails", () => {
  const currentBook = {
    id: 1,
    title: "Example Book",
    authors: "John Example",
  };
  const callbackMock = jest.fn();

  it("renders authors with a label", () => {
    // given
    render(<BookDetails initBook={currentBook} onBookChange={callbackMock} />);
    // when
    const label = screen.getByText(/Authors:/i);
    const authorsInput = screen.getByLabelText(/Authors:/i) as HTMLInputElement;
    // then
    expect(label).toBeInTheDocument();
    expect(authorsInput.value).toBe(currentBook.authors);
  });

  it("renders a title with a label", () => {
    // given
    render(<BookDetails initBook={currentBook} onBookChange={callbackMock} />);
    // when
    const label = screen.getByText(/Title:/i);
    const titleInput = screen.getByLabelText(/Title:/i) as HTMLInputElement;
    // then
    expect(label).toBeInTheDocument();
    expect(titleInput.value).toBe(currentBook.title);
  });
});
