import { BsDownload } from "react-icons/bs";
import { MdOutlineStarBorder } from "react-icons/md";

const NavbarBtn = () => {
  return (
    <a
      href="folderpdf/CV_Felix%20Octaniel%20Telaumbanua.pdf"
      download
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-cyan text-black text-sm font-bold hover:bg-cyan/80 transition-all duration-300 hover:scale-105 shadow-md shadow-cyan/20 flex-shrink-0"
    >
      <span className="sm:hidden md:block">Download CV</span>
      <MdOutlineStarBorder size={16} />
    </a>
  );
};

export default NavbarBtn;
