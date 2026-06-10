import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaNodeJs, FaRust, FaDatabase, FaJava, FaDocker, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPython, SiGo, SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMariadb, SiJira, SiAsana, SiClickup } from "react-icons/si";

const categories = [
  {
    label: "Frontend",
    color: "text-cyan",
    skills: [
      { skill: "HTML", icon: FaHtml5, color: "text-orange-400" },
      { skill: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
      { skill: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
      { skill: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { skill: "ReactJS", icon: FaReact, color: "text-cyan-400" },
      { skill: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { skill: "Tailwind", icon: SiTailwindcss, color: "text-cyan" },
    ],
  },
  {
    label: "Backend",
    color: "text-orange",
    skills: [
      { skill: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { skill: "Python", icon: SiPython, color: "text-yellow-300" },
      { skill: "Laravel", icon: FaLaravel, color: "text-red-500" },
      { skill: "Golang", icon: SiGo, color: "text-cyan-300" },
      { skill: "Rust", icon: FaRust, color: "text-orange-500" },
      { skill: "Java", icon: FaJava, color: "text-red-400" },
    ],
  },
  {
    label: "Database",
    color: "text-green-400",
    skills: [
      { skill: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { skill: "MongoDB", icon: FaDatabase, color: "text-green-400" },
      { skill: "MariaDB", icon: SiMariadb, color: "text-blue-300" },
    ],
  },
  {
    label: "Tools & Collaboration",
    color: "text-purple-400",
    skills: [
      { skill: "Docker", icon: FaDocker, color: "text-blue-500" },
      { skill: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { skill: "GitHub", icon: FaGithub, color: "text-white" },
      { skill: "Figma", icon: FaFigma, color: "text-purple-400" },
      { skill: "Jira", icon: SiJira, color: "text-blue-500" },
      { skill: "Asana", icon: SiAsana, color: "text-red-400" },
      { skill: "ClickUp", icon: SiClickup, color: "text-purple-500" },
    ],
  },
];

const AllSkills = () => {
  return (
    <div className="flex flex-col gap-12 mt-12">
      {categories.map((cat, catIdx) => (
        <motion.div
          key={catIdx}
          variants={fadeIn("up", catIdx * 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* Category label */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs uppercase tracking-widest font-bold ${cat.color}`}>
              {cat.label}
            </span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 pb-3">
            {cat.skills.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", i * 0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <SingleSkill
                  text={item.skill}
                  imgSvg={<item.icon />}
                  color={item.color}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
