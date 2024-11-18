import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Intermediate,
        icon: "/skills/python.svg",
      },
      {
        title: "C++",
        level: SkillLevel.Beginner,
        icon: "/skills/cpp.png",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      
      {
        title: "Django",
        level: SkillLevel.Expert,
        icon: "/skills/django.png",
      },
      {
        title: "Flask",
        level: SkillLevel.Intermediate,
        icon: "/skills/flask.png",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "Flutter",
        level: SkillLevel.Intermediate,
        icon: "/skills/flutter.svg",
      },
      {
        title: "React Native",
        level: SkillLevel.Intermediate,
        icon: "/skills/native.png",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "Graphics Design",
    items: [
      {
        title: "Adobe Illustrator",
        level: SkillLevel.Expert,
        icon: "/skills/illustrator.svg",
      },
      {
        title: "Photoshop",
        level: SkillLevel.Expert,
        icon: "/skills/photoshop.svg",
      },
      {
        title: "Canva",
        level: SkillLevel.Expert,
        icon: "/skills/canva.svg",
      },
      {
        title: "Figma",
        level: SkillLevel.Expert,
        icon: "/skills/figma.svg",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
