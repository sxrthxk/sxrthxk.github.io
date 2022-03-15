import { useViewportScroll } from "framer-motion";
import React from "react";
import Header from "../lib/components/Header";
import Hero from "../lib/components/Hero";

const IndexPage = () => {

  const { scrollYProgress } = useViewportScroll()

  console.log(scrollYProgress)

  return (
    <div className="bg-blakc min-h-screen relative w-full">
      <Header />
      <Hero />
    </div>
  );
};

export default IndexPage;
