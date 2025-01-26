import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return <div className={"w-full h-0.5 bg-gray-200 " + className}>Divider</div>;
};

export default Divider;
