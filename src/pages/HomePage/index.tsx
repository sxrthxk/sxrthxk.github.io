import React from "react";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Stack from "./sections/Stack";
import Footer from "./sections/Footer";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto pt-12 md:pt-24 px-6 font-medium">
      <Hero />
      <Stack />
      <Work />
      <Footer />
    </div>
  );
};

export default HomePage;
