import { render, screen } from "@testing-library/react";
import Logos from "./Logos";
import DropdownIcon from "../../../images/organisms/drop.svg";
import Blinklist from "../../../images/organisms/Blinklist.svg";
describe("logo img", () => {
  test("Render Search Button", () => {
    render(<Logos image={<DropdownIcon />} />);
    const iconElement = screen.getByTestId('custom-element');
    expect(iconElement).toBeInTheDocument();
  });

  test("renders learn react link", () => {
    render(<Logos image={<Blinklist/>} />);
    const iconElement = screen.getByTestId('custom-element');
    expect(iconElement).toBeInTheDocument();
  });
});
