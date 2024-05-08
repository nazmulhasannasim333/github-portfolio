import React from "react";
import SectionTitle from "../helper/section-title";
import Image from "next/image";
import reactjs from "@/app/assets/skills/react.png";
import nodejs from "@/app/assets/skills/node.png";
import expressjs from "@/app/assets/skills/express.png";
import mongodb from "@/app/assets/skills/mongodb.png";
import html from "@/app/assets/skills/html5.png";
import css from "@/app/assets/skills/css3.png";
import tailwind from "@/app/assets/skills/tailwind.png";
import bootstrap from "@/app/assets/skills/bootstrap.png";
import firebase from "@/app/assets/skills/firebase.png";
import GlowCard from "../helper/glow-card";

const skills = [
  {
    name: "React js",
    para: "React.js is a powerful JavaScript library for building user interfaces with component-based architecture.",
    logo: reactjs,
  },

  {
    name: "Node js",
    para: "Node.js is a runtime environment that allows server-side JavaScript execution.",
    logo: nodejs,
  },
  {
    name: "Express js",
    para: "Express.js is a minimalistic and flexible web application framework for Node.js.",
    logo: expressjs,
  },
  {
    name: "MongoDB",
    para: "MongoDB is a scalable and flexible NoSQL database that stores data in JSON.",
    logo: mongodb,
  },
  {
    name: "HTML5",
    para: "HTML is the standard markup language for creating the structure and content of web pages.",
    logo: html,
  },

  {
    name: "CSS3",
    para: "CSS is a styling language used to describe the presentation and visual appearance of HTML elements.",
    logo: css,
  },
  {
    name: "Tailwind CSS",
    para: "Tailwind CSS is a utility-first CSS framework that provides a wide range of pre-built classes.",
    logo: tailwind,
  },
  {
    name: "Bootstrap",
    para: "Bootstrap is a popular front-end framework that collection of pre-designed components.",
    logo: bootstrap,
  },
  {
    name: "Firebase",
    para: " Firebase is a comprehensive backend-as-a-service platform by Google that offers a suite services",
    logo: firebase,
  },
  // {
  //   name: "VS Code",
  //   para: "VS Code is a feature-rich source code editor that supports multiple programming languages.",
  //   logo: vscode,
  // },
  // {
  //   name: "Figma",
  //   para: "Figma is a collaborative and cloud-based design tool that empowers teams to create.",
  //   logo: figma,
  // },
  // {
  //   name: "Canva",
  //   para: "Canva is a user-friendly graphic design platform that enables users to create professional-looking designs.",
  //   logo: canva,
  // },
];

const MySkills = () => {
  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <SectionTitle title="Skills" />

      <div className="grid py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {skills.map((skill, i) => (
          <GlowCard key={i} identifier={`my-skill-${i}`}>
            <div
              // data-aos="fade-up"
              // data-aos-delay={i * 300}
              className="sm:cursor-pointer 
             relative group w-full h-[170px] flex items-center
              gap-5 px-3 py-3 bg-primary-bg"
            >
              <div className="w-1/5">
                <Image
                  src={skill?.logo}
                  height={100}
                  width={100}
                  alt="skill"
                  className=" group-hover:scale-110 duration-200"
                />
              </div>
              <div className="w-4/5">
                <h6 className="text-2xl">{skill.name}</h6>
                <p className="italic">{skill.para}</p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
