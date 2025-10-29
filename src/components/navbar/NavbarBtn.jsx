//import { Link } from "react-scroll";
import { MdOutlineStarBorder } from "react-icons/md";

const NavbarBtn = () => {
  return (
    <a 

    href="folderpdf/CV_Felix%20Octaniel%20Telaumbanua.pdf" 

    download
    className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
        Download CV
      <div className="sm:hidden md:block">
        <MdOutlineStarBorder />
      </div>
    </a>
  );
};

export default NavbarBtn;
