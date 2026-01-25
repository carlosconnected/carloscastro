import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SudokuCell from "./SudokuCell";

const defaultThickBorders = [false, false, false, false];

describe("SudokuCell", () => {
  describe("read-only (non-editable) cell", () => {
    it("renders the value as text", () => {
      render(
        <SudokuCell
          value={5}
          editable={false}
          solved={false}
          thickBorderSides={defaultThickBorders}
          onChange={() => {}}
        />
      );
      expect(screen.getByText("5")).toBeInTheDocument();
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });
  });

  describe("editable cell", () => {
    it("renders an input when editable", () => {
      render(
        <SudokuCell
          value={0}
          editable
          solved={false}
          thickBorderSides={defaultThickBorders}
          onChange={() => {}}
        />
      );
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue("");
    });

    it("displays existing value in input", () => {
      render(
        <SudokuCell
          value={7}
          editable
          solved={false}
          thickBorderSides={defaultThickBorders}
          onChange={() => {}}
        />
      );
      expect(screen.getByRole("textbox")).toHaveValue("7");
    });

    it("calls onChange with digit when user types 1–9", async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <SudokuCell
          value={0}
          editable
          solved={false}
          thickBorderSides={defaultThickBorders}
          onChange={onChange}
        />
      );
      await user.type(screen.getByRole("textbox"), "5");
      expect(onChange).toHaveBeenCalledWith(5);
    });

    it("calls onChange with 0 when user clears the cell", async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <SudokuCell
          value={5}
          editable
          solved={false}
          thickBorderSides={defaultThickBorders}
          onChange={onChange}
        />
      );
      const input = screen.getByRole("textbox");
      await user.clear(input);
      expect(onChange).toHaveBeenCalledWith(0);
    });

    it("is disabled when solved", () => {
      render(
        <SudokuCell
          value={3}
          editable
          solved
          thickBorderSides={defaultThickBorders}
          onChange={() => {}}
        />
      );
      expect(screen.getByRole("textbox")).toBeDisabled();
    });
  });
});
