import AllSkills from "./AllSkills";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills" className="max-w-[1200px] px-4 mx-auto">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <SkillsText />
      </motion.div>
      <AllSkills />
    </div>
  );
};

export default SkillsMain;
