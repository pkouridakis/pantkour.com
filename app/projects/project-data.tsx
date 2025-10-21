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
    description: "ML-based app that predicts wildfire risk for a selected location on the map, providing a 10-day forecast.",
    url: "https://pantkour-com.vercel.app/projects",
    type: "Project",
    techStack: ["Python", "Scikit-learn", "React.js", "PostgreSQL", "Rest APIs"],
  },
  {
    title: "Chatbot with LangChain",
    year: 2024,
    description: "AI assistant built with LangChain and Llama 2 for interactive, context-aware conversations.",
    url: "https://github.com/PantelisKour/chatbot_langchain",
    type:"Project",
    techStack: ["Python", "LangChain", "Pandas"],
  },
  {
    title: "Mechanisms for Analyzing 3D Point Clouds",
    year: 2023,
    description: "Techniques for processing and extracting insights from 3D point cloud data",
    url: "https://pantkour-com.vercel.app/projects",
    type: "Thesis",
    techStack: ["Python", "Pandas"],
  }
];