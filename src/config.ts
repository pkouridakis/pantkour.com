export const siteConfig = {
  name: "Pantelis Kouridakis",
  title: "Data Scientist & Space AI Explorer",
  description: "Portfolio website of Pantelis Kouridakis",
  accentColor: "var(--accent)",
  avatar: "/avatar.jpg",
  location: "Athens, Greece",
  cvLink: "",
  social: {
    email: "kouridakispantelis@gmail.com",
    linkedin: "https://www.linkedin.com/in/pantelis-kouridakis/",
    github: "https://github.com/pkouridakis",
  },
  services: [
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Building predictive models and ML pipelines for geospatial and environmental data.",
    },
    {
      icon: "🛰️",
      title: "Earth Observation",
      description: "Satellite imagery analysis using Sentinel-2 and Google Earth Engine for environmental monitoring.",
    },
    {
      icon: "🔄",
      title: "Process Automation",
      description: "RPA solutions and AI-driven workflow automation with Microsoft Power Platform.",
    },
  ],
  aboutMe:
    "I build intelligent systems that turn raw data into discovery – from ML-powered wildfire forecasting and Earth observation platforms to context-aware chatbots and computer vision. Previously strengthened my engineering foundation with 3 years as an RPA Engineer (Power Automate), now fully focused on geospatial ML, predictive systems, and impactful space/environmental applications.",
  skills: ["Python", "Machine Learning", "Geospatial Analysis", "NLP", "FastAPI"],
  projects: [
    {
      name: "Methane Emission Detection Pipeline",
      description:
        "Physics-aware satellite pipeline for methane plume detection using Sentinel-2, TROPOMI, and Carbon Mapper data.",
      link: "https://github.com/pkouridakis/",
      categories: ["ml", "geo"],
      skills: ["Python", "Pandas", "Scikit-learn", "Geospatial Analysis"],
    },
    {
      name: "Career Coach Recommender",
      description:
        "Certificate recommendation engine combining content-based filtering, co-occurrence analysis, and semantic similarity via sentence embeddings.",
      link: "https://github.com/pkouridakis/career-coach-recommender",
      categories: ["ml", "web"],
      skills: ["Python", "FastAPI", "NLP", "Pandas", "Matplotlib"],
    },
    {
      name: "NDVI Time-Series Explorer",
      description:
        "Satellite-based vegetation monitoring using Sentinel-2 data and Google Earth Engine for detecting deforestation and post-fire recovery.",
      link: "https://github.com/pkouridakis/ndvi-time-series-explorer",
      categories: ["geo"],
      skills: ["Python", "Google Earth Engine", "Pandas", "Matplotlib"],
    },
    {
      name: "Wildfire Risk Platform",
      description:
        "Interactive heat map with 10-day ML-powered wildfire risk forecasts integrating geospatial, weather, and historical fire data.",
      link: "https://github.com/pkouridakis/",
      categories: ["geo", "ml", "web"],
      skills: ["Python", "Geospatial Analysis", "Scikit-learn", "React.js", "PostgreSQL"],
    },
    {
      name: "Chatbot with LangChain",
      description:
        "Interactive AI assistant using LangChain and Llama 2 for intelligent, context-aware conversations.",
      link: "https://github.com/pkouridakis/chatbot_langchain",
      categories: ["ml"],
      skills: ["Python", "LangChain", "Pandas", "Transformers"],
    },
    {
      name: "3D Point Cloud Analysis — Thesis",
      description:
        "Techniques for processing, visualizing, and extracting insights from large-scale 3D point cloud data.",
      link: "https://github.com/pkouridakis/",
      categories: ["th"],
      skills: ["Python", "Pandas", "NumPy"],
    },
  ],
  experience: [
    {
      company: "Kotsovolos — PPC Group",
      title: "Data Scientist",
      dateRange: "May 2026 - Present",
      location: "Athens, Greece",
      bullets: [
        "Applied data science methodologies using Python and SQL to analyze complex datasets, generate business insights, and support AI-driven initiatives across the organization.",
      ],
    },
    {
      company: "Methara",
      title: "AI Developer",
      dateRange: "May 2026 - Present",
      location: "Bremen, Germany",
      bullets: [
        "Developing AI-driven methane emission estimation models from satellite hyperspectral data.",
        "Building ML pipelines for processing Earth Observation data at scale.",
      ],
    },
    {
      company: "Prometheus Space Technologies",
      title: "AI Developer",
      dateRange: "Feb 2025 - Nov 2025",
      location: "London, UK",
      bullets: [
        "Developed a wildfire risk prediction system using machine learning and Earth Observation data.",
        "Trained and evaluated ML models (classification & regression) for geospatial risk estimation.",
        "Built a full-stack AI web application with Flask and React.",
        "Integrated real-time weather and geospatial APIs for dynamic predictions.",
      ],
    },
    {
      company: "Generali",
      title: "RPA Developer",
      dateRange: "May 2024 - May 2026",
      location: "Athens, Greece",
      bullets: [
        "Led RPA initiatives using Microsoft Power Platform, automating 20+ processes and reducing operational costs.",
        "Designed and deployed an AI-powered chatbot using LangChain and LLMs to automate internal workflows.",
        "Integrated Python-based AI components with enterprise automation solutions.",
        "Trained team members on Power Automate, boosting team productivity.",
      ],
    },
    {
      company: "Aambience Services",
      title: "RPA Developer",
      dateRange: "Dec 2022 - May 2024",
      location: "Athens, Greece",
      bullets: [],
    },
    {
      company: "GVision",
      title: "SAP Consultant",
      dateRange: "Oct 2021 - Dec 2022",
      location: "Athens, Greece",
      bullets: [],
    },
  ],
  education: [
    {
      school: "University of Peloponnese",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2015 - 2021",
      achievements: [
        "Core coursework included: Machine Learning, Artificial Intelligence, Data Structures & Algorithms, Databases, Computer Networks and Software Engineering",
      ],
    },
    {
      school: "Stanford University (Coursera)",
      degree: "Machine Learning Specialization",
      dateRange: "2025 - 2025",
      achievements: [
        "Covered supervised & unsupervised learning, neural networks, model evaluation, best practices and data-centric AI",
        "Applied concepts through practical assignments and programming exercises",
      ],
    }
  ],
};
