import { Link } from "react-scroll";
import { BsArrowRight } from "react-icons/bs";

const highlights = [
  { label: "University", value: "Multimedia Nusantara University" },
  { label: "Major", value: "Informatics · 3rd Year" },
  { label: "Focus", value: "AI · Full Stack · Blockchain" },
];

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center max-w-[540px]">

      {/* Tag */}
      <span className="px-3 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs uppercase tracking-widest mb-5">
        Who I Am
      </span>

      <h2 className="text-5xl font-bold text-white mb-6">
        About <span className="text-cyan">Me</span>
      </h2>

      <p className="text-white/70 text-base leading-relaxed mb-8">
        Hello, I'm <span className="text-white font-semibold">Felix</span> — a
        passionate Informatics student with a strong interest in Blockchain
        and artificial intelligence. I focus on building solutions that are not
        only functional but also intelligent and adaptable to real-world needs.
        For me, AI is a transformative tool that reshapes how we process and
        utilize information in this ever-evolving digital era.
      </p>

      {/* Highlights */}
      <div className="flex flex-col gap-2 mb-8 md:self-start sm:self-center w-full">
        {highlights.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="text-cyan flex-shrink-0">▹</span>
            <span className="text-white/50 w-24 flex-shrink-0">{item.label}</span>
            <span className="text-white/80">{item.value}</span>
          </div>
        ))}
      </div>

      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="projects"
        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan text-black font-bold text-sm cursor-pointer hover:bg-cyan/80 transition-all duration-300 hover:scale-105 md:self-start sm:self-center"
      >
        My Projects <BsArrowRight />
      </Link>
    </div>
  );
};

export default AboutMeText;
