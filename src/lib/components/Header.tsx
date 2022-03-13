import React from "react";

const Header = () => {
  return (
    <header className="w-full flex h-[10vh] items-center px-6 bg-navy drop-shadow-xl sticky top-0 text-white justify-between rounded-b-lg">
      <Logo />
    </header>
  );
};

export default Header;

const Logo = () => {
  return (
    <h1 className="flex items-center space-x-1 text-2xl">
      <span className="text-beige">{"< "}</span>
      <span className="mb-0.5 bg-gradient-to-tr from-green-500 to-blue-500 text-transparent bg-clip-text font-semibold uppercase">
        sxrthxk
      </span>
      <span className="text-beige">{" />"}</span>
    </h1>
  );
};
