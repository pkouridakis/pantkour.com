export interface Experience {
  title: string;       // Job title or degree
  period: string;      // Year or period
  description: string; // Company / University
  location?: string;        // Optional link (GitHub, school, certificate)
  techStack?: string[]; // Optional skills, subjects, or tools
}

export const experienceData: {
  experience: Experience[];
  education: Experience[];
} = {
  experience: [
    {
      title: "AI Developer",
      period: "Feb 2025 - Present",
      description: "Prometheus Space Technologies",
      location: "London, United Kingdom",
      techStack: ["Python", "Scikit-learn", "React.js", "PostgreSQL", "Rest APIs"],
    },
    {
      title: "RPA Engineer",
      period: "May 2024 - Present",
      description: "Generali Hellas",
      location: "Athens, Greece",
      techStack: ["Power Platform", "Python", "OpenCV"],
    },
    {
      title: "RPA Developer",
      period: "Dec 2022 - May 2024",
      description: "Aambience Services",
      location: "Athens, Greece",
      techStack: ["Power Platform", "Python", "SQL", "Power BI"],
    },
    {
      title: "SAP Consultant",
      period: "Oct 2021 - Dec 2022",
      description: "GVision",
      location: "Athens, Greece",
      techStack: ["SAP B1", "SQL"],
    },
  ],
  education: [
    {
      title: "Machine Learning Specialization",
      period: "2024 - 2025",
      description: "University of Standford",
      techStack: ["Machine Learning", "Python", "Scikit-learn", "TensorFlow", "NumPy"],
    },
    {
      title: "BASc in Computer Science and Engineering",
      period: "2015 - 2023",
      description: "University of Peloponnese",
      techStack: ["Python", "C++","Java", "Algorithms"],
    },
  ],
};
