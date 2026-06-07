import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, image, link, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan/50 transition-all duration-500"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
      </div>

      <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center text-white text-base font-semibold hover:text-cyan transition-colors duration-300"
          >
            View Project <BsFillArrowUpRightCircleFill size={18} />
          </a>
        ) : (
          <span className="text-white/60 text-base">Coming Soon</span>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-base font-bold text-orange truncate">{name}</h2>
        <p className="text-white/50 text-sm mt-1">{year}</p>
      </div>
    </motion.div>
  );
};

export default SingleProject;
