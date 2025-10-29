import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
//import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
//import { SiExpress } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { SiGo } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from  "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  // {
  //   skill: "PHP",
  //   icon: FaPhp,
  // },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Laravel",
    icon: FaLaravel,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
 {
   skill: "Python",
   icon: SiPython,
 },
  {
    skill: "Golang",
    icon: SiGo,
  },
  {
    skill: "Rust",
    icon: FaRust,
  },
  {
    skill: "MongoDB",
    icon: FaDatabase,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
