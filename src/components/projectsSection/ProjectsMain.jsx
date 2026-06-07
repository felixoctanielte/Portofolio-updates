import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Travel Website",
    year: "May 2024",
    align: "right",
    image: "images/pariwisata.png",
    link: "https://web-pariwisata-umber.vercel.app",
  },
  {
    name: "Event Halloween",
    year: "October 2024",
    align: "left",
    image: "images/web-hallowen.png",
    link: "#",
  },
  {
    name: "TRY ON",
    year: "May 2025",
    align: "right",
    image: "images/tryon.png",
    link: "https://tryon-nine.vercel.app/",
  },
  {
    name: "Website Starlight",
    year: "Feb 2025 - present",
    align: "left",
    image: "images/starlight.png",
    link: "https://starlightumn2025.com/",
  },
   {
    name: "Bitlend ICP",
    year: "Jul 2025 - Agu 2025",
    align: "right",
    image: "images/bitlendicp.png",
    link: "https://youtu.be/DU6wxz8rpkY?si=StoWZiaXkXAcXwLa",
  },
  {
    name: "EduChain",
    year: "Agu 2025 - Agu 2025",
    align: "left",
    image: "images/educhain.png",
    link: "https://youtu.be/JGstXdF1rlA?si=s8HivQVn5hR9DNHG",
  },
   {
    name: "Clinic & Quick",
    year: "Sep 2025 - Dec 2025",
    align: "right",
    image: "images/clinic.png",
    link: "https://github.com/felixoctanielte/Hospital-apps",
  },
    {
    name: "Notification Gateway",
    year: "Apr - Present",
    align: "left",
    image: "images/gateaway.png",
    link: "",
  },
  {
    name: "The Art of Culinary Academy",
    year: "Mar 2025 - present",
    align: "right",
    image: "images/roy.png",
    link: "https://chefroylesmana.com/",
  }

];

const INITIAL_LIMIT = 6;

const ProjectsMain = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_LIMIT);
  const hasMore = projects.length > INITIAL_LIMIT;

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {visibleProjects.map((project, index) => (
          <SingleProject
            key={index}
            index={index}
            name={project.name}
            year={project.year}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      {hasMore && (
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3 border border-cyan text-cyan rounded-full hover:bg-cyan hover:text-black transition-all duration-300 font-semibold tracking-wide"
          >
            {showAll ? "Show Less" : `See More (${projects.length - INITIAL_LIMIT} more)`}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsMain;
