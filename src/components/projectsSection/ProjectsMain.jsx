import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Personal AI Agent",
    year: "Jul 2026",
    image: "images/agent.png",
    link: "https://chat-bot-zeta-mocha.vercel.app/",
    description:
      "A personal AI agent built with Python and integrated with Gemini. The agent can assist users with various tasks, such as answering questions, providing recommendations, and managing schedules via a conversational web interface.",
  },
  {
    name: "E-Commerce Website",
    year: "Jun 2026",
    image: "images/e-commerce.png",
    link: "https://e-commerce-umber.vercel.app/",
    description:
      "An e-commerce website built with PHP and MySQL featuring a product catalog, shopping cart, and secure checkout. Includes an admin panel for managing products, orders, and customer information.",
  },
  {
    name: "Velos — Logistics Tracking by Blockchain",
    year: "Jun 2026",
    image: "images/velos.png",
    link: "https://github.com/felixoctanielte/velos",
    description:
      "A blockchain-based logistics tracking system providing real-time shipment visibility and supply chain transparency. Features a unified interface for both customers and logistics providers.",
  },
  {
    name: "The Art of Culinary Academy",
    year: "Mar 2025 - present",
    image: "images/roy.png",
    link: "https://chefroylesmana.com/",
    description:
      "Official website for Chef Roy Lesmana's culinary academy, featuring chef profiles, cooking classes, signature menus, and an online booking system.",
  },
  {
    name: "Notification Gateway",
    year: "Apr 2025 - Present",
    image: "images/gateaway.png",
    link: "",
    description:
      "A centralized notification gateway managing multi-channel message delivery (email, SMS, push). Supports prioritized message queues with retry mechanisms.",
  },
  {
    name: "Clinic & Quick",
    year: "Sep 2025 - Dec 2025",
    image: "images/clinic.png",
    link: "https://github.com/felixoctanielte/Hospital-apps",
    description:
      "A hospital clinic management app streamlining patient registration, doctor scheduling, and medical record management, built with React Native for mobile.",
  },
  {
    name: "Bitlend ICP",
    year: "Jul 2025 - Agu 2025",
    image: "images/bitlendicp.png",
    link: "https://youtu.be/DU6wxz8rpkY?si=StoWZiaXkXAcXwLa",
    description:
      "A decentralized crypto lending platform built on the Internet Computer Protocol (ICP), enabling users to lend and borrow digital assets via smart contracts.",
  },
  {
    name: "EduChain",
    year: "Agu 2025 - Agu 2025",
    image: "images/educhain.png",
    link: "https://youtu.be/JGstXdF1rlA?si=s8HivQVn5hR9DNHG",
    description:
      "A blockchain-based education platform that transparently verifies certificates and academic credentials, built on ICP for data security and immutability.",
  },
  {
    name: "Website Starlight",
    year: "Feb 2025 - present",
    image: "images/starlight.png",
    link: "https://starlightumn2025.com/",
    description:
      "Official website for Starlight UMN 2025, featuring event info, artist lineup, ticketing, and a gallery with elegant design and stunning animations.",
  },
  {
    name: "TRY ON",
    year: "May 2025",
    image: "images/tryon.png",
    link: "https://tryon-nine.vercel.app/",
    description:
      "A web-based virtual try-on app that lets users preview products through their camera, integrating AI-powered augmented reality technology.",
  },
  {
    name: "Event Halloween",
    year: "October 2024",
    image: "images/web-hallowen.png",
    link: "#",
    description:
      "A dark-themed Halloween event landing page with a countdown timer, photo gallery, and event details brought to life with interactive animations.",
  },
  {
    name: "Travel Website",
    year: "May 2024",
    image: "images/pariwisata.png",
    link: "https://web-pariwisata-umber.vercel.app",
    description:
      "A responsive travel website showcasing local tourism destinations with a modern UI. Built with React and Tailwind CSS featuring smooth scroll animations.",
  },
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
            key={project.name}
            index={index}
            name={project.name}
            year={project.year}
            image={project.image}
            link={project.link}
            description={project.description}
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
            {showAll
              ? "Show Less"
              : `See More (${projects.length - INITIAL_LIMIT} more)`}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsMain;
