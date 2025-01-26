import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ICON_SIZE = 36;

const Hero = () => {
  return (
    <>
      <div className="text-2xl opacity-70 italic ml-[2px]">Hi, I&apos;m</div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary mt-1">
        Sarthak <br />
        Gupta.
      </h1>
      <div className="text-md md:text-xl mt-3">
        I’m a{" "}
        <span className="font-black text-secondary">
          Full Stack Software Developer
        </span>{" "}
        passionate about crafting seamless digital experiences with intuitive
        programming practices. Amongst the general excitement of software
        development, I&apos;ve been embarking on my journey in the field of
        design.
      <iframe className="roxunded-[12px] mt-3 w-full md:w-3/4" src="https://open.spotify.com/embed/track/0lzNXoZINVBLHWNIxKxWOo?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        <div className="mt-3">
          With expertise in frontend frameworks, backend systems, and cloud
          technologies, I specialize in building scalable and user-friendly
          applications. Currently, I&apos;m wielding the code wand at{" "}
          <a
            href="https://anq.finance/"
            className="text-nowrap"
            target="_blank"
          >
            <span className="underline underline-offset-4 text-primary">Anq Finance</span>
            <FaExternalLinkAlt className="inline ml-2" />
          </a>
        </div>
      </div>
      <div className="w-full mx-auto h-[0.5px] mt-3 bg-white opacity-20"></div>
      <div className="text-md md:text-xl mt-3">
        Connect with me through my socials below, view my{" "}
        <a className="underline underline-offset-2" href="">
          resume
          <FiExternalLink className="inline ml-1 w-5 h-5" />
        </a>{" "}
        or dive into my work and journey below.{" "}
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
    </>
  );
};

export default Hero;
