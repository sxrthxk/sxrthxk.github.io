import React from "react";
import HireMe from "./HireMe";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full flex h-[10vh] items-center px-6 bg-navy drop-shadow-xl sticky top-0 text-white justify-between rounded-b-lg z-20">
        <Logo />
        <div className="flex items-center space-x-4 fill-current text-red">
          <HireMe />
          <GiHamburgerMenu
            className="w-6 h-6"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </header>
      <>
        {isOpen && (
          <motion.div
            className="h-screen w-screen bg-black opacity-50 fixed top-0 left-0 blur-md"
            initial={{
              opacity: 0,
            }}
            onClick={() => setIsOpen(false)}
            animate={{ opacity: 1 }}
          ></motion.div>
        )}
        <motion.div
          className="h-screen w-3/4 fixed right-0 top-0 bg-gray-700 z-10"
          animate={isOpen ? "visible" : "invisible"}
          transition={{
            ease: "easeOut",
            bounce: 0.25,
          }}
          variants={{
            visible: {
              x: 0,
            },
            invisible: {
              x: 300,
            },
          }}
        ></motion.div>
      </>
    </>
  );
};

export default Header;

const Logo = () => {
  return (
    <h1 className="flex items-center space-x-1 text-xl md:text-2xl">
      <span className="text-beige">{"< "}</span>
      <span className="mb-0.5 bg-gradient-to-tr from-green-500 to-blue-500 text-transparent bg-clip-text font-semibold uppercase">
        sxrthxk
      </span>
      <span className="text-beige">{" />"}</span>
    </h1>
  );
};
