import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const container = screen.getByRole("main");
  expect(container).toBeInTheDocument();
});
