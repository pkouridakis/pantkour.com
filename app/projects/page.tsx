import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Pantelis Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="block transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-start">
              {/* Title + Type */}
              <div className="flex items-center gap-2">
                <h2 className="text-black dark:text-white text-lg font-semibold">
                  {project.title}
                </h2>
                <span
                className={`inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full 
                  ${project.type === "Project"
                    ? "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100"
                    : project.type === "Thesis"
                    ? "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
              >
                {project.type}
              </span><p>Available on request</p>
              </div>

              {/* Year */}
              <span className="text-neutral-600 dark:text-neutral-400">
                {project.year}
              </span>
            </div>

            {/* Description */}
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            {/* Tech stack badges */}
            {project.techStack.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
