import { WorkI } from "@/interface/constants/work";
import Image from "next/image";

export function TechStackFooter({
  techStack,
}: {
  techStack: WorkI["techStack"];
}) {
  return (
    <ul className="flex flex-wrap gap-4 mt-2">
      {techStack.map((tech, index) => (
        <li key={index} className="text-white text-sm font-medium hover:scale-110 transition-all">
          <Image
            src={tech.logo}
            className="inline mr-2"
            alt={tech.name}
            width={40}
            height={40}
          />
          {/* <span className="opacity-50">{tech.name}</span> */}
        </li>
      ))}
    </ul>
  );
}
