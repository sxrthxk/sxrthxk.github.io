import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import Head from "next/head";
import { Metadata } from "next";

const ICON_SIZE = 36;

export const metadata: Metadata = {
  title: "Sarthak Gupta | SDE@Anq",
};
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-24 px-6 font-medium">
      <Head>
        <title>Sarthak Gupta</title>
      </Head>
      <div className="text-2xl opacity-70 italic ml-[2px]">Hi, I&apos;m</div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#9CB380] mt-1">
        Sarthak <br />
        Gupta
      </h1>
      <div className="text-md md:text-xl mt-3">
        I’m a{" "}
        <span className="text-[#CC2200] font-black">Software Developer</span>{" "}
        passionate about crafting seamless digital experiences with intuitive
        design and efficient code{" "}
        <span className="italic font-thin">(Yes, ChatGPT)</span>.
        <div className="mt-3">
          With expertise in frontend frameworks, backend systems, and cloud
          technologies, I specialize in building scalable and user-friendly
          applications. Currently, I'm weilding the code wand at{" "}
          <a
            href="https://anq.finance/"
            className="text-nowrap"
            target="_blank"
          >
            <span className="underline underline-offset-4">Anq Finance</span>
            <FaExternalLinkAlt className="inline ml-2" />
          </a>
        </div>
      </div>
      <div className="w-full mx-auto h-[0.5px] mt-3 bg-white opacity-20"></div>
      <div className="text-md md:text-xl mt-3">
        Connect with me through my socials below to dive into my work and
        journey.{" "}
        <span className="italic font-thin">(Or just have a chat?)</span>
      </div>
      <div className="mt-6 flex gap-4">
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
          <MdAlternateEmail
            size={ICON_SIZE}
            className="hover:scale-125 duration-150"
          />
        </a>
      </div>
    </div>
  );
}
