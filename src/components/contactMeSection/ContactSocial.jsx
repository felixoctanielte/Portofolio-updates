import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="www.linkedin.com/in/felix-octaniel-telaumbanua-32042b28a" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/felixoctanielte" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/felixdlw?igsh=dHNyZnl2OXN2bXFt" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
