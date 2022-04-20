import { getByTestId, render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Should display Banner", () => {
  test("Display Account", () => {
    render(<Banner />);
    const banner = screen.getByTestId("Banner");
    expect(banner).toBeInTheDocument();
  });
});