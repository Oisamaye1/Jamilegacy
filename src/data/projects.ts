import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "BeShop",
    title: "Ecommerce Website",
    description:
      "Beshop is an Ecommerce shop specifically designed for the sale of electronic gadgets like phone, laptops, game console etc.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Oisamaye1/Beshop",
    url: "https://beshop-peach.vercel.app/",
    tags: ["NextJS", "Javascript", "REST API", "ShadCN", ],
  },
  {
    id: "Dream Agency",
    title: "Web Application",
    description:
      "Dream Agency is a web application for a web service provider brand",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Oisamaye1/dream-agency",
    url: "https://dream-agency-xi.vercel.app/",
    tags: ["NextJS", "Javascript", "CSS", "Chakra UI", "AntUI" ],
  },
  {
    id: "Portfolio Website",
    title: "Web Application",
    description:
      "This is portfolio website deveoped with Flask, and the Jinja template",
    icon: "/skills/flask.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Oisamaye1/benjamin-personal",
    url: "https://benjamin-resume-website.onrender.com/",
    tags: ["HTML", "CSS", "Flask", "Python"],
  },
  {
    id: "Exercise App",
    title: "Web Application",
    description:
      "This is an open excercise app where anyone can log in and get info on any available excercises.",
    icon: "/skills/flask.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl:  "https://github.com/Oisamaye1/exercise-app",
    url: "https://exercise-generator-app.onrender.com/",
    tags: ["Python", "Flask", "HTML", "CSS"],
  },
  {
    id: "Mix-Fit",
    title: "Web Application",
    description:
      "This is the Frontend of a fit website where subscribers can signup and track their fitness metrics",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Oisamaye1/Mix-Fit",
    url: "https://mix-fit.vercel.app/",
    tags: ["Python", "Flask", "HTML", "CSS"],
  },
  
];
export default projects;
