import React from "react";
import HireMe from "./HireMe";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full flex h-[10vh] items-center px-6 bg-navy drop-shadow-xl sticky top-0 text-white justify-between rounded-b-lg z-20">
        <Logo />
        <div className="items-center space-x-4 hidden md:flex">
          <a href="">About Me</a>
          <a href="">Blogs</a>
          <a href="">Work</a>
          <a href="">Contact</a>
        </div>
        <div className="flex items-center space-x-4 fill-current text-red">
          <HireMe />
          <GiHamburgerMenu
            className="w-6 h-6 block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="h-screen w-screen bg-black opacity-50 fixed top-0 left-0 blur-md z-10"
            initial={{
              opacity: 0,
            }}
            onClick={() => setIsOpen(false)}
            animate={{ opacity: 0.75 }}
            exit={{
              opacity: 0,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="h-screen w-3/4 left-full fixed top-0 bg-gray-700 z-10"
            animate={isOpen ? "visible" : "invisible"}
            transition={{
              ease: "easeOut",
              bounce: 0.25,
            }}
            variants={{
              visible: {
                left: "25%",
              },
              invisible: {
                left: "100%",
              },
            }}
            exit={{
              left: "100%",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
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
