export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  type: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Wildfire Prediction",
    year: 2025,
    description: "ML model predicting wildfire risk using historical data",
    url: "https://github.com/mithrilai",
    type: "Project",
    techStack: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "Chatbot with LangChain",
    year: 2024,
    description: "A conversational AI assistant built with LangChain and LLMs",
    url: "https://opendeeplearning.xyz/",
    type:"Project",
    techStack: ["Python", "Pandas"],
  },
  {
    title: "Mechanisms for Analyzing 3D Point Clouds",
    year: 2023,
    description: "Techniques for processing and extracting insights from 3D point cloud data",
    url: "https://opendeeplearning.xyz/",
    type: "Thesis",
    techStack: ["Python", "Pandas"],
  }
];