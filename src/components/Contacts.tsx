import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TbFileCv } from "react-icons/tb";

const ICON_SIZE = 36;

export default function Contacts() {
  return (
    <>
      <a href="https://www.linkedin.com/in/sxrthxk/" target="_blank">
        <FaLinkedinIn
          size={ICON_SIZE}
          className="hover:scale-125 duration-150"
        />
      </a>
      <a href="https://github.com/sxrthxk" target="_blank">
        <FaGithub size={ICON_SIZE} className="hover:scale-125 duration-150" />
      </a>
      <a href="mailto:sarthak.ag2001@gmail.com">
        <IoMailOutline
          size={ICON_SIZE}
          className="hover:scale-125 duration-150"
        />
      </a>
      <a target="_blank" href="/Sarthak_Gupta_Resume.pdf">
        <TbFileCv
          size={ICON_SIZE}
          className="hover:scale-125 duration-150"
        />
      </a>
    </>
  );
}
