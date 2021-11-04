import { render, screen, fireEvent } from "@testing-library/react";
import { BookOverview } from "./BookOverview";

describe("Book Overview Component", () => {
  it("renders the master table having three columns", () => {
    // given
    render(<BookOverview />);
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
    render(<BookOverview />);
    // when
    const johnExamleRow = screen.getByText(/John Example/i);
    const joeSmithRow = screen.getByText(/Joe Smith/i);
    // then
    expect(johnExamleRow).toBeInTheDocument();
    expect(joeSmithRow).toBeInTheDocument();
  });
  it("selects a table row upon its click", () => {
    // given
    render(<BookOverview />);
    // when
    const row = screen.getByText(/John Example/i).closest("tr");
    row && fireEvent.click(row);
    // then
    expect(screen.getByText(/Authors:/i)).toBeInTheDocument();
  });
});
