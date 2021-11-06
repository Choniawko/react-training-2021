import { render, screen, fireEvent } from "@testing-library/react";
import { FC } from "react";
import { BookContext, BookService } from "../../services/bookService/BookContext";
import { BookOverview } from "./BookOverview";

describe("Book Overview Component", () => {
  const bookServiceMock = {
    findAll: () => [
      {
        id: 1,
        authors: "John Example",
        title: "Example Book",
      },
      {
        id: 2,
        authors: "Joe Smith",
        title: "Another Book",
      },
    ],
  } as BookService;
  const wrapper: FC = ({ children }) => (
    <BookContext.Provider value={bookServiceMock}>{children}</BookContext.Provider>
  );
  it("renders the master table having three columns", () => {
    // given
    render(<BookOverview />, { wrapper });
    // when
    const noColumn = screen.getByText(/#/i);
    const authorsColumn = screen.getByText(/Authors/i);
    const titleColumn = screen.getByText(/Title/i);
    // then
    expect(noColumn).toBeInTheDocument();
    expect(authorsColumn).toBeInTheDocument();
    expect(titleColumn).toBeInTheDocument();
  });
  it("renders the master table rows", () => {
    // given
    render(<BookOverview />, { wrapper });
    // when
    const johnExamleRow = screen.getByText(/John Example/i);
    const joeSmithRow = screen.getByText(/Joe Smith/i);
    // then
    expect(johnExamleRow).toBeInTheDocument();
    expect(joeSmithRow).toBeInTheDocument();
  });
  it("renders details upon click on the row", () => {
    // given
    render(<BookOverview />, { wrapper });
    // when
    const row = screen.getByText(/John Example/i).closest("tr");
    row && fireEvent.click(row);
    // then
    expect(screen.getByText(/Authors:/i)).toBeInTheDocument();
  });

  it("updates a book row upon changes done in the details", () => {
    // given
    render(<BookOverview />, { wrapper });
    // when
    const row = screen.getByText(/John Example/i).closest("tr");
    row && fireEvent.click(row);
    const newAuthor = "New Author";
    const authors = screen.getByLabelText(/Authors:/i);
    fireEvent.change(authors, { target: { value: newAuthor } });
    const form = authors.closest("form");
    form && fireEvent.submit(form, { preventDefault: jest.fn() });
    row?.querySelector("td");
    const updatedAuthorCell = row?.querySelector("td");
    expect(updatedAuthorCell).toHaveTextContent(newAuthor);
  });
});
