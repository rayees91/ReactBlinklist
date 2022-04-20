import { getByTestId, render, screen } from "@testing-library/react";
import Explore from "./Explore";
describe("Should display Explore", () => {
  test("Display Explore", () => {
    render(<Explore />);
    const explore = screen.getByTestId("Explore");
    expect(explore).toBeInTheDocument();
  });
});