import { Tech } from "./tech";

export const workHistory = [
  {
    title: "ANQ Digital Finserv",
    role: "Software Development Engineer",
    startDate: "Jul 2023",
    endDate: "Present",
    link: "https://anq.finance",
    description: [
      "Led a team to deliver a credit card module for a major bank.",
      "Set up Firebase Crashlytics for crash monitoring.",
      "Worked closely with designers to improve the app's UX.",
      "Enhanced the CRM app to boost user retention.",
    ],
    techStack: [
      Tech.ReactNative,
      Tech.DenoJS,
      Tech.Firebase,
      Tech.Figma,
      Tech.NodeJS,
      Tech.TypeScript,
      Tech.PGSQL,
    ],
  },
  {
    title: "ANQ Digital Finserv",
    role: "Technology Intern",
    startDate: "Jun 2022",
    endDate: "Jul 2023",
    link: "https://anq.finance",
    description: [
      "Built a React Native app with solid user adoption.",
      "Managed app distribution on Google Play Console.",
      "Worked on debugging backend systems with Deno.js.",
    ],
    techStack: [
      Tech.ReactNative,
      Tech.DenoJS,
      Tech.NextJS,
      Tech.TailwindCSS,
      Tech.TypeScript,
    ],
  },
  {
    title: "Vadelabs",
    role: "Software Development Engineering Intern",
    startDate: "Dec 2021",
    endDate: "Mar 2022",
    link: "https://vadelabs.com",
    description: [
      "Optimized the landing page for faster load times.",
      "Built backend logic with Clojure and Datomic.",
      "Deployed services on Google Cloud.",
    ],
    techStack: [Tech.Clojure, Tech.Datomic, Tech.GoogleCloud, Tech.NextJS],
  },
  {
    title: "Easypie.app",
    role: "Software Development Engineer",
    startDate: "Oct 2021",
    endDate: "Dec 2021",
    link: "https://easypie.app",
    description: [
      "Built an authentication system with Firebase.",
      "Improved app performance by optimizing queries.",
    ],
    techStack: [Tech.NextJS, Tech.NodeJS],
  },
  {
    title: "Braynix AI LLP",
    role: "Full Stack Developer Intern",
    startDate: "Sep 2021",
    endDate: "Oct 2021",
    link: "https://braynixai.com",
    description: [
      "Created UIs with Next.js and TailwindCSS.",
      "Deployed ML models using Nginx and pm2.",
    ],
    techStack: [
      Tech.NextJS,
      Tech.TailwindCSS,
      Tech.NodeJS,
      Tech.Python,
      Tech.Flask,
      Tech.Nginx,
    ],
  },
];
