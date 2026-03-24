import { render, screen, within } from "@testing-library/react";
import Hobbies from "./page";

describe("Hobbies page", () => {
  it("renders the page title and intro", () => {
    render(<Hobbies />);
    expect(
      screen.getByRole("heading", { level: 1, name: /hobbies/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/different forms of\s+communication/i),
    ).toBeInTheDocument();
  });

  it("renders category sections in order with subtitles", () => {
    render(<Hobbies />);

    const sectionHeadings = screen.getAllByRole("heading", { level: 2 });
    expect(sectionHeadings.map((h) => h.textContent?.trim())).toEqual([
      "Yoga",
      "Dancing",
      "Languages",
      "Breathwork",
    ]);
  });

  it("renders hobby cards under each section", () => {
    render(<Hobbies />);

    const yogaSection = screen
      .getByRole("heading", {
        level: 2,
        name: "Yoga",
      })
      .closest("section");
    expect(yogaSection).not.toBeNull();
    expect(
      within(yogaSection!).getByRole("heading", {
        level: 3,
        name: "Ashtanga Vinyasa Yoga",
      }),
    ).toBeInTheDocument();

    const dancingSection = screen
      .getByRole("heading", {
        level: 2,
        name: "Dancing",
      })
      .closest("section");
    expect(
      within(dancingSection!).getByRole("heading", {
        level: 3,
        name: "Contact Improvisation Dance",
      }),
    ).toBeInTheDocument();

    const languagesSection = screen
      .getByRole("heading", {
        level: 2,
        name: "Languages",
      })
      .closest("section");
    expect(
      within(languagesSection!).getByRole("heading", {
        level: 3,
        name: "Spanish",
      }),
    ).toBeInTheDocument();

    const breathworkSection = screen
      .getByRole("heading", {
        level: 2,
        name: "Breathwork",
      })
      .closest("section");
    expect(
      within(breathworkSection!).getByRole("heading", {
        level: 3,
        name: "Retbirthing Breathwork",
      }),
    ).toBeInTheDocument();
  });

  it("renders one hobby card per item in the hobbies data", () => {
    render(<Hobbies />);
    const hobbyTitles = screen.getAllByRole("heading", { level: 3 });
    expect(hobbyTitles).toHaveLength(14);
  });
});
