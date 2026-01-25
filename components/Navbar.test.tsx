import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders desktop nav links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /hobbies/i })).toHaveAttribute(
      "href",
      "/hobbies"
    );
    expect(screen.getByRole("link", { name: /sudoku/i })).toHaveAttribute(
      "href",
      "/sudoku"
    );
  });

  it("renders mobile menu toggle button", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /toggle menu/i });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("opens mobile menu on toggle click and shows nav links", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /toggle menu/i });

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const navs = screen.getAllByRole("navigation");
    const mobileNav = navs[1];
    expect(within(mobileNav).getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(within(mobileNav).getByRole("link", { name: /hobbies/i })).toBeInTheDocument();
    expect(within(mobileNav).getByRole("link", { name: /sudoku/i })).toBeInTheDocument();
  });

  it("closes mobile menu when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /toggle menu/i });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const hobbiesLinks = screen.getAllByRole("link", { name: /hobbies/i });
    await user.click(hobbiesLinks[1]);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
