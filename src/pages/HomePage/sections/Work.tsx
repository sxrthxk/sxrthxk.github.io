import { workHistory } from "@/interface/constants/work";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";

export default function Work() {
  return (
    <div className="mt-12 ">
      <h1 className="text-4xl font-black text-primary">Work / Experience</h1>
      <div className="w-full mx-auto h-[0.5px] my-3 bg-white opacity-20"></div>
      <ul className="list-inside">
        {workHistory.map((work, index) => (
          <li
            key={index}
            className="bg-[#040911] mb-2 rounded-md p-4 text-white"
          >
            <a
              href={work.link}
              target="_blank"
              className="text-lg underline underline-offset-4 decoration-[#FFFFFF33] font-bold"
            >
              {work.title}
              <TbExternalLink className="inline ml-2 no-underline text-primary" />
            </a>
            <p className="text-base font-light">
              <span className="opacity-70">Role: </span>
              <span className="text-seconday">{work.role}</span>
            </p>
            <span className="text-white text-base opacity-50 font-medium">
              {work.startDate} - {work.endDate}
            </span>
            <div className="w-full mx-auto h-[0.5px] my-3 bg-white opacity-20"></div>
            <ul>
              {work.description.map((desc, index) => (
                <li
                  key={index}
                  className="list-outside text-base font-normal flex flex-row"
                >
                  <div>-</div>
                  <div className="ml-2">{desc}</div>
                </li>
              ))}
            </ul>
            <div className="w-full mx-auto h-[0.5px] my-3 bg-white opacity-20"></div>
            Stack:
            <ul className="flex flex-wrap gap-4 mt-2">
              {work.techStack.map((tech, index) => (
                <li key={index} className="text-white text-sm font-medium">
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
          </li>
        ))}
      </ul>
    </div>
  );
}
