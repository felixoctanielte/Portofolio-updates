import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FiCpu, FiGlobe, FiSmartphone } from "react-icons/fi";

const projectCategories = [
  {
    key: "Website",
    label: "Website",
    description:
      "Full-stack websites, dashboards, blockchain apps, and interactive web products.",
    icon: FiGlobe,
    initialLimit: 6,
    projects: [
      {
        name: "E-Commerce Website",
        year: "Jun 2026",
        image: "images/e-commerce.png",
        link: "https://e-commerce-umber.vercel.app/",
        description:
          "An e-commerce website built with PHP and MySQL featuring a product catalog, shopping cart, and secure checkout. Includes an admin panel for managing products, orders, and customer information.",
      },
      {
        name: "Velos - Logistics Tracking by Blockchain",
        year: "Jun 2026",
        image: "images/velos.png",
        link: "https://github.com/felixoctanielte/velos",
        description:
          "A blockchain-based logistics tracking system providing real-time shipment visibility and supply chain transparency. Features a unified interface for both customers and logistics providers.",
      },
      {
        name: "The Art of Culinary Academy",
        year: "Mar 2025 - Present",
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
          "A centralized notification gateway managing multi-channel message delivery for email, SMS, and push notifications with prioritized queues and retry mechanisms.",
      },
      {
        name: "Bitlend ICP",
        year: "Jul 2025 - Aug 2025",
        image: "images/bitlendicp.png",
        link: "https://youtu.be/DU6wxz8rpkY?si=StoWZiaXkXAcXwLa",
        description:
          "A decentralized crypto lending platform built on the Internet Computer Protocol, enabling users to lend and borrow digital assets via smart contracts.",
      },
      {
        name: "EduChain",
        year: "Aug 2025",
        image: "images/educhain.png",
        link: "https://youtu.be/JGstXdF1rlA?si=s8HivQVn5hR9DNHG",
        description:
          "A blockchain-based education platform that transparently verifies certificates and academic credentials, built on ICP for data security and immutability.",
      },
      {
        name: "Website Starlight",
        year: "Feb 2025 - Present",
        image: "images/starlight.png",
        link: "https://starlightumn2025.com/",
        description:
          "Official website for Starlight UMN 2025, featuring event info, artist lineup, ticketing, and a gallery with elegant design and smooth animations.",
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
    ],
  },
  {
    key: "Mobile",
    label: "Mobile",
    description:
      "Android and mobile-first applications focused on real user workflows.",
    icon: FiSmartphone,
    initialLimit: 4,
    projects: [
      {
        name: "Clinic & Quick",
        year: "Sep 2025 - Dec 2025",
        image: "images/clinic.png",
        link: "https://github.com/felixoctanielte/Hospital-apps",
        videoLink:
          "https://drive.google.com/drive/folders/1bOPOkcx1CX0YGHN4k6z6tVmBWK8Hv7sT",
        videoLabel: "View Video",
        description:
          "An Android outpatient queue management app built with Kotlin, Material Design XML, Firebase Authentication, and Cloud Firestore. The app supports patient, doctor, and hospital admin roles for online clinic registration, doctor schedule selection, real-time queue status, visit history, master data management, and appointment monitoring, with an additional Flask API deployed on PythonAnywhere.",
      },
      {
        name: "JalanAman",
        year: "Garuda Hacks 7.0",
        image: "images/jalan_aman_apk.jpeg",
        imageFit: "contain",
        link: "https://github.com/felixoctanielte/JalanAman.git",
        youtubeLink: "https://youtu.be/AC81-R-jfiY?si=gnLLjMwK5p_NEq8u",
        status: "Mobile Developer",
        description:
          "A mobile-first safety app and web dashboard for pedestrians and public transport users in Indonesia. I contributed as the mobile developer, building the Dioxus Android/iOS experience for quick risk reporting, route safety scoring, nearby report visibility, and one-tap SOS flows with local alarms, vibration, emergency notifications, WhatsApp fallback, and SOS email delivery.",
      },
    ],
  },
  {
    key: "AI Agent",
    label: "AI Agent",
    description:
      "Conversational automation and AI-powered tools that help users complete tasks faster.",
    icon: FiCpu,
    initialLimit: 3,
    projects: [
      {
        name: "SARFlow",
        year: "OpenClaw Agenthon Indonesia 2026",
        image: "images/agent.png",
        link: "https://github.com/felixoctanielte/OpenClaw2026_BEBAS_SARFlow.git",
        videoLink:
          "https://devpost.com/software/sarflow?ref_content=my-projects-tab&ref_feature=my_projects",
        videoLabel: "View Devpost",
        status: "Solo Developer",
        description:
          "An administrative AI co-pilot for Search and Rescue operations that turns unstructured reports into structured incident intake, missing-field checks, SOP-aware risk briefings, append-only timeline logs, and draft reports for human verification. Built with a multi-agent Python pipeline covering intake, extraction, RAG SOP checking, context enrichment, risk briefing, timeline management, report generation, and safety guardrails.",
      },
    ],
  },
];

const ProjectsMain = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

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

      <div className="mt-12 flex flex-col gap-14">
        {projectCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          const isExpanded = expandedCategories[category.key];
          const visibleProjects = isExpanded
            ? category.projects
            : category.projects.slice(0, category.initialLimit);
          const hiddenCount = category.projects.length - visibleProjects.length;

          return (
            <section key={category.key} className="scroll-mt-28">
              <motion.div
                variants={fadeIn("up", categoryIndex * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
              >
                <div className="max-w-[680px]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan/40 bg-cyan/10 text-cyan">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase text-orange">
                        Project Type
                      </p>
                      <h3 className="text-3xl font-bold text-white">
                        {category.label}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                    {category.description}
                  </p>
                </div>
                <span className="w-fit rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  {category.projects.length}{" "}
                  {category.projects.length === 1 ? "Project" : "Projects"}
                </span>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project, index) => (
                  <SingleProject
                    key={project.name}
                    index={index}
                    name={project.name}
                    year={project.year}
                    image={project.image}
                    imageFit={project.imageFit}
                    link={project.link}
                    videoLink={project.videoLink}
                    videoLabel={project.videoLabel}
                    youtubeLink={project.youtubeLink}
                    status={project.status}
                    category={category.label}
                    description={project.description}
                  />
                ))}
              </div>

              {hiddenCount > 0 && (
                <motion.div
                  variants={fadeIn("up", 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.5 }}
                  className="mt-8 flex justify-center"
                >
                  <button
                    onClick={() =>
                      setExpandedCategories((prev) => ({
                        ...prev,
                        [category.key]: !prev[category.key],
                      }))
                    }
                    className="rounded-lg border border-cyan px-8 py-3 font-semibold text-cyan transition-all duration-300 hover:bg-cyan hover:text-black"
                  >
                    {isExpanded
                      ? "Show Less"
                      : `See More ${category.label} (${hiddenCount} more)`}
                  </button>
                </motion.div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
