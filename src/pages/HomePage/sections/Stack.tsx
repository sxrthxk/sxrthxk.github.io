import { currentStack, familiarStack } from "@/interface/constants/tech";
import Image from "next/image";

export default function Stack() {
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-black text-primary">Tech Stack</h1>
      <div className="w-full mx-auto h-[0.5px] my-3 bg-white opacity-20"></div>
      <ul className="list-inside flex flex-wrap">
        {currentStack.map((tech, index) => (
          <li
            key={index}
            className="m-2 rounded-md p-2 text-white border-[1px] border-white border-opacity-5 shadow-2xl"
          >
            <Image
              src={tech.logo}
              className="inline mr-2"
              alt={tech.name}
              width={40}
              height={40}
            />
            <span className="opacity-50">
              {tech.name === "React" ? "React / React Native" : tech.name}
            </span>
          </li>
        ))}
      </ul>
      <h2 className="mt-2">Also familiar with:</h2>
      <ul className="list-inside flex flex-wrap">
        {familiarStack.map((tech, index) => (
          <li
            key={index}
            className="bg-secondary m-2 rounded-md p-1 px-2 text-white border-[1px] border-white border-opacity-5 shadow-2xl"
          >
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
