import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hello, my name is Felix. I am a 3nd-year Informatics student at
        Multimedia Nusantara University with a strong interest in data analysis
        and artificial intelligence. With a background in programming and
        algorithmic thinking, I focus on developing solutions that are not only
        functional but also intelligent and adaptable to real-world needs. For
        me, AI is not just a technology, but a transformative tool that reshapes
        how we understand, process, and utilize information efficiently in this
        ever-evolving digital era.
      </p>
      <button className="border border-beige rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-beige transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
