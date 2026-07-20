import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Internship", section: "internship" },
  { link: "Awards", section: "awards" },
  { link: "Courses", section: "courses" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:translate-x-0 lg:left-auto lg:text-md sm:text-xl backdrop-blur-xl lg:backdrop-blur-none sm:bg-black/85 lg:bg-transparent sm:w-full sm:max-w-[calc(100vw-2rem)] lg:max-w-none py-5 sm:px-6 lg:px-0 sm:rounded-3xl lg:rounded-none sm:border sm:border-white/10 lg:border-0 sm:shadow-2xl sm:shadow-black/50 lg:shadow-none">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
