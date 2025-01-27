import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import MusicEmbed from "@/components/MusicEmbed";
import Contacts from "@/components/Contacts";


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
        <MusicEmbed />
        <div className="mt-3">
          With expertise in frontend frameworks, backend systems, and cloud
          technologies, I specialize in building scalable and user-friendly
          applications. Currently, I&apos;m wielding the code wand at{" "}
          <a
            href="https://anq.finance/"
            className="text-nowrap"
            target="_blank"
          >
            <span className="underline underline-offset-4 text-primary">
              Anq Finance
            </span>
            <FaExternalLinkAlt className="inline ml-2" />
          </a>
        </div>
      </div>
      <div className="w-full mx-auto h-[0.5px] mt-3 bg-white opacity-20"></div>
      <div className="text-md md:text-xl mt-3">
        Connect with me through my socials below, view my{" "}
        <a className="underline underline-offset-2" target="_blank" href="/Sarthak_Gupta_Resume.pdf">
          resume
          <FiExternalLink className="inline ml-1 w-5 h-5" />
        </a>{" "}
        or dive into my work and journey below.{" "}
      </div>
      <div className="mt-6 flex gap-4">
        <Contacts />
      </div>
    </>
  );
};

export default Hero;
