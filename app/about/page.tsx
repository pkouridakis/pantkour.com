import { experienceData } from "./experience-data";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">About</h1>

      {/* Intro */}
      <p className="mb-6">
        My interests lie in solving real-world challenges with AI, particularly in Earth Observation, and the Space Sector. 🌍🚀 
      </p>
      <a
        href="/docs/Pantelis_Kouridakis_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        >
        View my CV
      </a>
      

      {/* Professional Experience */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Professional Experience</h2>
      <div className="space-y-4">
        {experienceData.experience.map((item, index) => (
          <div key={index} className="space-y-1">
          {/* Title + Period */}
          <div className="flex justify-between items-start">
            <h3 className="text-black dark:text-white font-semibold">{item.title}</h3>
            <span className="text-neutral-600 dark:text-neutral-400">{item.period}</span>
          </div>

          {/* Company + Location */}
          <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
            <span>{item.description}</span>
            <span>{item.location}</span>
          </div>

          {/* Tech Stack */}
          {item.techStack && (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        ))}
      </div>

      {/* Education */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Education</h2>
      <div className="space-y-4">
        {experienceData.education.map((item, index) => (
          <div key={index} className="block">
            <div className="flex justify-between items-start">
              <h3 className="text-black dark:text-white font-semibold">{item.title}</h3>
              <span className="text-neutral-600 dark:text-neutral-400">{item.period}</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">{item.description}</p>
            {item.techStack && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
