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
    title: "Prometheus Fire Guardian – Wildfire Risk Platform",
    year: 2025,
    description: "Built an interactive heat map with 10-day ML-powered wildfire risk forecasts by integrating geospatial, weather, and historical fire data",
    url: "https://pantkour-com.vercel.app/projects",
    type: "Project",
    techStack: ["Python", "Scikit-learn", "React.js", "PostgreSQL", "Rest APIs"],
  },
  {
    title: "Chatbot with LangChain",
    year: 2024,
    description: "Built an interactive AI assistant using LangChain and Llama 2 for intelligent, context-aware conversations.",
    url: "https://github.com/PantelisKour/chatbot_langchain",
    type:"Project",
    techStack: ["Python", "LangChain", "Pandas", "Transformers"],
  },
  {
    title: "Mechanisms for Analyzing 3D Point Clouds",
    year: 2023,
    description: "Developed techniques for processing, visualizing, and extracting insights from large-scale 3D point cloud data.",
    url: "https://pantkour-com.vercel.app/projects",
    type: "Thesis",
    techStack: ["Python", "Pandas", "NumPy"],
  }
];