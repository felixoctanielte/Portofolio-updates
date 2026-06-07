import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center md:text-left sm:text-center md:items-start sm:items-center">

      {/* Role badge */}
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex md:justify-start sm:justify-center"
      >
        <span className="px-4 py-1.5 rounded-full border border-cyan/40 bg-cyan/10 text-cyan text-sm uppercase tracking-widest font-semibold">
          Full Stack Developer · AI Engineer
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase leading-tight"
        style={{
          textShadow: "0 0 40px rgba(21, 209, 233, 0.3)",
        }}
      >
        <span className="text-white">Felix</span>
        <br />
        <span className="text-cyan">Octaniel</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base text-white/70 max-w-[420px] leading-relaxed"
      >
        Passionate Software Engineer & Instructor with 3+ years of experience
        building intelligent, end-to-end digital solutions.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-3 flex-wrap md:justify-start sm:justify-center mt-1"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan text-black font-bold text-sm cursor-pointer hover:bg-cyan/80 transition-all duration-300 hover:scale-105"
        >
          View My Work <BsArrowRight />
        </Link>
        <a
          href="folderpdf/CV_Felix%20Octaniel%20Telaumbanua.pdf"
          download
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:border-cyan hover:text-cyan transition-all duration-300"
        >
          Download CV
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-4 md:justify-start sm:justify-center mt-1"
      >
        {[
          { Icon: FiGithub, href: "https://github.com/felixoctanielte", label: "GitHub" },
          { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/felix-octaniel-telaumbanua-32042b28a", label: "LinkedIn" },
          { Icon: FaInstagram, href: "https://www.instagram.com/felixdlw?igsh=dHNyZnl2OXN2bXFt", label: "Instagram" },
        ].map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-cyan hover:text-cyan transition-all duration-300 hover:scale-110"
          >
            <Icon size={16} />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroText;
