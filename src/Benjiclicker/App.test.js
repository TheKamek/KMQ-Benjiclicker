import { render, screen } from "@testing-library/react";
import BenjiApp from "./BenjiApp";

test("renders learn react link", () => {
  render(<BenjiApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
