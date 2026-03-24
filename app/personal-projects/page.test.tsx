import { render, screen } from "@testing-library/react";
import PersonalProjects from "./page";

describe("PersonalProjects page", () => {
  it("links to SpeakGym and carlosconnected with safe external attributes", () => {
    render(<PersonalProjects />);

    const speakgym = screen.getByRole("link", { name: /speakgym\.ai/i });
    expect(speakgym).toHaveAttribute("href", "https://speakgym.ai");
    expect(speakgym).toHaveAttribute("target", "_blank");
    expect(speakgym).toHaveAttribute("rel", "noopener noreferrer");

    const connected = screen.getByRole("link", {
      name: /carlosconnected\.com/i,
    });
    expect(connected).toHaveAttribute("href", "https://carlosconnected.com");
    expect(connected).toHaveAttribute("target", "_blank");
    expect(connected).toHaveAttribute("rel", "noopener noreferrer");
  });
});
