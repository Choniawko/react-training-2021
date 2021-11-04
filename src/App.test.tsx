import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const titleElement = screen.getByText(/hello world!/i);
  expect(titleElement).toBeInTheDocument();
});
