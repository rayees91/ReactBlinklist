import { render, screen } from "@testing-library/react";
import Account from "./Account";

describe("Should display Account Logo", () => {
  test("Display Account", () => {
    render(<Account />);
    const account = screen.getByAltText("Account");
    expect(account).toBeInTheDocument();
  });
});