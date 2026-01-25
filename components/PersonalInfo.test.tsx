import { render, screen } from "@testing-library/react";
import PersonalInfo from "./PersonalInfo";

describe("PersonalInfo", () => {
  it("renders the name", () => {
    render(<PersonalInfo />);
    expect(screen.getByRole("heading", { name: /carlos castro/i })).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<PersonalInfo />);
    expect(
      screen.getByText(/full stack dev with multiple passions in life/i)
    ).toBeInTheDocument();
  });

  it("renders the profile image with correct alt", () => {
    render(<PersonalInfo />);
    const img = screen.getByRole("img", { name: /carlos/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/yo.jpg");
  });

  it("renders LinkedIn, GitHub, and Email links", () => {
    render(<PersonalInfo />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/carlosconnected"
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/carlosconnected"
    );
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:carlos.castro.vargas@gmail.com"
    );
  });

  it("opens social links in a new tab", () => {
    render(<PersonalInfo />);
    const links = screen.getAllByRole("link");
    links.forEach((link: HTMLElement) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});
