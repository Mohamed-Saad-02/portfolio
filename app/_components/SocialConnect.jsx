import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { socialConnect } from "@constants/constants";

const social = [
  { icon: <FaLinkedin className="size-8" />, link: socialConnect.linkedIn },
  { icon: <FaGithub className="size-8" />, link: socialConnect.gitHub },
  { icon: <FaWhatsapp className="size-8" />, link: socialConnect.whatsApp },
  { icon: <IoMail className="size-8" />, link: socialConnect.mail },
];

function SocialConnect() {
  return (
    <div className="flex items-center gap-6 text-primary">
      {social.map(({ link, icon }, i) => (
        <a key={i} target="_blank" href={link}>
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialConnect;
