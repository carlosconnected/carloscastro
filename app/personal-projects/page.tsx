import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal projects",
  description:
    "SpeakGym.ai and carlosconnected.com — projects by Carlos Castro Vargas.",
};

const projects = [
  {
    name: "SpeakGym.ai",
    url: "https://speakgym.ai",
    description:
      "A project focused on helping people learn how to speak a foreign language. The app features are based on science and research.",
  },
  {
    name: "carlosconnected.com",
    url: "https://carlosconnected.com",
    description:
      "Space I have to spread my passion for breathing and body movement.",
  },
] as const;

export default function PersonalProjects() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Personal projects
        </h1>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
          A few things I build and nurture outside of my day job—products and
          spaces that reflect how I learn, move, and connect.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <section
            key={project.url}
            className="bg-white rounded-xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-700 underline underline-offset-2"
              >
                {project.name}
              </Link>
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {project.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
