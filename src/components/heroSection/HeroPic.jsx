import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { MdOutlineStarBorder } from "react-icons/md";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      {/* Outer orbital ring */}
      <div className="absolute w-[420px] h-[420px] rounded-full border border-cyan/10 animate-[spin_25s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan shadow-lg shadow-cyan/60" />
      </div>

      {/* Middle orbital ring */}
      <div className="absolute w-[340px] h-[340px] rounded-full border border-cyan/15 animate-[spin_18s_linear_infinite_reverse]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-orange shadow-md shadow-orange/60" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan/60" />
      </div>

      {/* Spinning star */}
      <div className="absolute flex justify-center items-center animate-pulse -z-10">
        <MdOutlineStarBorder className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Inner glow */}
      <div className="absolute w-[260px] h-[260px] rounded-full bg-cyan/5 blur-3xl animate-pulse" />

      {/* Photo */}
      <div className="relative z-10">
        <div className="relative">
          {/* Hexagon clip image */}
          <img
            src="images/hexagenimage.png"
            alt="Felix Octaniel"
            className="max-h-[420px] w-auto relative z-10 drop-shadow-2xl"
          />
          {/* Glow under image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-cyan/20 blur-2xl rounded-full" />
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-0 md:right-[-10px] bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 shadow-lg z-20"
      >
        <p className="text-white text-xs font-semibold">Full Stack Dev</p>
        <p className="text-cyan text-[10px] mt-0.5">3+ Years Exp</p>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 left-0 md:left-[-10px] bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 shadow-lg z-20"
      >
        <p className="text-white text-xs font-semibold">AI Engineer</p>
        <p className="text-orange text-[10px] mt-0.5">Blockchain · ICP</p>
      </motion.div>
    </motion.div>
  );
};

export default HeroPic;
