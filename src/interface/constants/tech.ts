import Logos from '@/assets/svg/tech'

export const Tech = {
  React: { name: "React", logo: Logos.ReactSVG },
  ReactNative: { name: "React Native", logo: Logos.ReactSVG },
  Firebase: { name: "Firebase", logo: Logos.FirebaseSVG },
  Figma: { name: "Figma", logo: Logos.FigmaSVG },
  NodeJS: { name: "Node.js", logo: Logos.NodeJSSVG },
  DenoJS: { name: "Deno.js", logo: Logos.DenoJSSVG },
  NextJS: { name: "Next.js", logo: Logos.NextJSSVG },
  TailwindCSS: { name: "TailwindCSS", logo: Logos.TailwindCSSSVG },
  Clojure: { name: "Clojure", logo: Logos.ClojureSVG },
  Datomic: { name: "Datomic", logo: Logos.DatomicSVG },
  GoogleCloud: { name: "Google Cloud", logo: Logos.GoogleCloudSVG },
  Flask: { name: "Flask", logo: Logos.FlaskSVG },
  Nginx: { name: "Nginx", logo: Logos.NginxSVG },
  TypeScript: { name: "TypeScript", logo: Logos.TypeScriptSVG },
  Python: { name: "Python", logo: Logos.PythonSVG },
  PGSQL: { name: "PostgreSQL", logo: Logos.PGSQLSVG },
  Redux: { name: "Redux", logo: Logos.ReduxSVG },
  Docker: { name: "Docker", logo: Logos.DockerSVG },
  Mongo: { name: "MongoDB", logo: Logos.MongoSVG },
  CICD: { name: "CI/CD" },
  Azure: { name: "Azure" },
  Laravel: { name: "PHP/Laravel" },
};

export const currentStack = [
  Tech.React,
  Tech.TypeScript,
  Tech.NodeJS,
  Tech.NextJS,
  Tech.Mongo,
  Tech.Docker,
  Tech.DenoJS,
  Tech.TailwindCSS,
  Tech.PGSQL,
  Tech.Redux,
];

export const familiarStack = [
  Tech.Clojure,
  Tech.Datomic,
  Tech.GoogleCloud,
  Tech.Flask,
  Tech.Nginx,
  Tech.Python,
  Tech.Azure,
  Tech.CICD,
  Tech.Laravel
];