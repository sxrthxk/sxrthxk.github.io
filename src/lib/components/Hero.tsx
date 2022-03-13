import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = () => {
  return (
    <div className=" bg-gradient-to-tr from-blakc to-black ">
      <div className="w-full h-[90vh] m-auto flex max-w-4xl text-white items-center justify-evenly">
        <div className="flex flex-col space-y-3">
          <h1 className="text-6xl max-w-md">Hello, I am Sarthak Gupta</h1>
          <span className="text-lg animate-pulse">
            I am a Full Stack Web Developer based in
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
              {" "}
              INDIA{" "}
            </span>
            🇮🇳
          </span>
          <span className="">I like animations and colors</span>
        </div>
        <div className="flex flex-col items-end group">
          <div className="border-white border-2 rounded-full">
            <div className="w-80 h-80 overflow-hidden rounded-full m-2">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFG7058aPVJIQ/profile-displayphoto-shrink_800_800/0/1626882171325?e=1652918400&v=beta&t=tbCCselYI14xRp21qzYlebQry9Ny8Mm70RqxsX7OLiA"
                alt="Image"
                placeholder="blurred"
              />
            </div>
          </div>
          <a
            href="linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-navy group-hover:text-[#0077b5] transition-all"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
