import React from "react";
import Hero from "./sections/Hero";
import Work from "./sections/Work";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-24 px-6 font-medium">
      <Hero />
      <Work />
    </div>
  );
};

export default HomePage;
