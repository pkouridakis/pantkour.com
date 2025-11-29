import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.jpeg"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={90}
          priority
        />
      <h1 className="mb-8 text-2xl font-medium">🚀 Hi, Pantelis here.</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a Machine Learning Engineer & Space AI Explorer.
        </p>
        <p>
          I build intelligent systems that turn raw data into discovery – from ML-powered wildfire forecasting and Earth observation platforms to context-aware chatbots and 
          computer vision. Previously strengthened my engineering foundation with 3 years as an RPA Engineer (Power Automate), 
          now fully focused on geospatial ML, predictive systems, and impactful space/environmental applications.
        </p>
        <p> 
           Based in Athens, Greece 🇬🇷
        </p>
        <b>
          Got a project or idea? <a href="mailto:kouridakispantelis@gmail.com">Let’s Connect</a>
          </b>
      </div>
    </section>
  );
}
/*I craft intelligent systems that turn data into discovery. From AI-powered chatbots to Earth observation analytics, 
I focus on applying cutting-edge machine learning to solve real-world challenges and drive impact in the space and environmental sectors.*/