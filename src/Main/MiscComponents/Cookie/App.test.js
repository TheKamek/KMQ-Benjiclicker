import { render, screen } from "@testing-library/react";
import BenjiApp from "../Main/MiscComponents/Cookie/BenjiApp";

test("renders learn react link", () => {
  render(<BenjiApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
