import { Link } from "react-scroll";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const footerLinks = [
  { name: "About Me", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Internship", section: "internship" },
  { name: "Awards", section: "awards" },
  { name: "Courses", section: "courses" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const socials = [
  { Icon: FiGithub, href: "https://github.com/felixoctanielte", label: "GitHub" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/felix-octaniel-telaumbanua-32042b28a", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com/felixdlw?igsh=dHNyZnl2OXN2bXFt", label: "Instagram" },
];

const FooterMain = () => {
  return (
    <div className="px-4 mt-24">
      <div className="w-full h-[1px] bg-white/10"></div>
      <div className="max-w-[1200px] mx-auto pt-12 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[280px]">
            <div className="flex items-center gap-3">
              <img src="images/logo.png" alt="logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Building intelligent, end-to-end digital solutions with passion
              and precision.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-cyan hover:text-cyan transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    to={item.section}
                    className="text-white/50 text-sm hover:text-cyan transition-all duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-4"></div>
        <p className="text-center text-white/30 text-xs">
          © 2025 Felix Octaniel Telaumbanua · All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterMain;
