import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="felixoctanieltel05@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+62 823 7266 2504" Image={FaWhatsapp} />
      <SingleInfo text="Cluster Allogio Gading Serpong Allogio Barat 2 no. 38" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
