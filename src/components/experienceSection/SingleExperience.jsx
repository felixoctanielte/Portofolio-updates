import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsBriefcaseFill } from "react-icons/bs";

const SingleExperience = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="group border border-white/10 bg-white/[0.03] hover:border-cyan/40 hover:bg-cyan/[0.03] transition-all duration-500 rounded-2xl p-6 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors duration-300">
          <BsBriefcaseFill className="text-cyan" size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-cyan font-bold text-base leading-tight">
            {experience.job}
          </h3>
          <p className="text-orange font-semibold text-sm mt-0.5">
            {experience.company}
          </p>
          <p className="text-white/40 text-xs mt-1">{experience.date}</p>
        </div>
      </div>

      <div className="h-[1px] bg-white/10" />

      {/* Responsibilities */}
      <ul className="flex flex-col gap-2">
        {experience.responsibilities.map((resp, i) => (
          <li key={i} className="flex gap-2 text-white/65 text-sm leading-relaxed">
            <span className="text-cyan mt-[2px] flex-shrink-0">▹</span>
            {resp}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
