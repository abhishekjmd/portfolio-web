import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import BookOpen from "../../icons/book-open";
import { useAnimationControls } from "framer-motion";
import clsx from "clsx";
import { FadeIn } from "../FadeIn";
import { useGlobalContext } from "../../context/ContextProvider";
import Border from "./Border";

const skills = [
  {
    skill: "Languages",
    buttonClassNames: "rounded-tl-full",
    textClassNames: "-translate-x-2",
  },
  {
    skill: "Front",
    buttonClassNames: "rounded-tr-full",
    textClassNames: "translate-x-3 translate-y-1",
  },
  {
    skill: "Back",
    buttonClassNames: "rounded-bl-full",
    textClassNames: "translate-x-8 -translate-y-3",
  },
  {
    skill: "Tools",
    buttonClassNames: "rounded-br-full",
    textClassNames: "translate-x-3 -translate-y-3",
  },
];

const skillsLogos = {
  ["Languages" as string]: [
    {
      name: "JavaScript",
      image: "../../../logos/js-logo.png",
    },
    {
      name: "TypeScript",
      image: "../../../logos/ts-logo.png",
    },
    {
      name: "Python",
      image: "../../../logos/python-logo.png",
    },
    {
      name: "C#",
      image: "../../../logos/csharp-logo.png",
    },
  ],
  ["Front" as string]: [
    {
      name: "HTML5",
      image: "../../../logos/html5-logo.png",
    },
    {
      name: "CSS3",
      image: "../../../logos/css-logo.png",
    },
    {
      name: "ReactJS",
      image: "../../../logos/react-logo.png",
    },
    {
      name: "NextJS",
      image: "../../../logos/nextjs-logo.png",
    },
    {
      name: "Native",
      image: "../../../logos/rnative-logo.png",
    },
    {
      name: "TailwindCSS",
      image: "../../../logos/tailwindcss-logo.jpg",
    },
    {
      name: "Shopify",
      image: "../../../logos/shopify.jpg",
    },
    {
      name: "MaterialUI",
      image: "../../../logos/materialui-logo.png",
    },
    {
      name: "WordPress",
      image: "../../../logos/wordpress.png",
    },
  ],
  ["Back" as string]: [
    {
      name: "NodeJS",
      image: "../../../logos/nodejs-logo.png",
    },
    {
      name: "ExpressJS",
      image: "../../../logos/express-logo.png",
    },
    {
      name: "NestJS",
      image: "../../../logos/nestjs-logo.png",
    },
    {
      name: "MongoDB",
      image: "../../../logos/mongodb-logo.webp",
    },
    {
      name: "PostgresSql",
      image: "../../../logos/postgres-logo.png",
    },
    {
      name: "Firebase",
      image: "../../../logos/firebase-logo.jpg",
    },
    {
      name: "Heroku",
      image: "../../../logos/heroku-logo.webp",
    },
    {
      name: "DigitalOcean",
      image: "../../../logos/digital-ocean-logo.svg",
    },
    {
      name: "awsS3",
      image: "../../../logos/s3-logo.png",
    },
  ],
  ["Tools" as string]: [
    {
      name: "Git",
      image: "../../../logos/git-logo.png",
    },
    {
      name: "Github",
      image: "../../../logos/github-logo.webp",
    },
    { name: "Docker", image: "../../../logos/docker-logo.png" },
    {
      name: "EsLint",
      image: "../../../logos/eslint-logo.png",
    },
    {
      name: "Redux",
      image: "../../../logos/redux-logo.png",
    },
    {
      name: "Bitbucket",
      image: "../../../logos/bitbucket.png",
    },
    {
      name: "Figma",
      image: "../../../logos/figma-logo.webp",
    },
    {
      name: "Mailchimp",
      image: "../../../logos/mailchimp-logo.webp",
    },
  ],
};

const skillsTitles = {
  ["Languages" as string]: "Programming Languages",
  ["Front" as string]: "Frontend",
  ["Back" as string]: "Backend",
  ["Tools" as string]: "Tools",
};

const Skill = () => {
  const [activeSkill, setActiveSkill] = useState("Languages");
  const controls = useAnimationControls();
  const { sectionRef } = useGlobalContext();
  const skillsRef = useRef();
  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start("hidden");
    await controls.start("visible");
  };

  useEffect(() => {
    sectionRef.current["skills"] = skillsRef.current;
  }, [sectionRef]);

  return (
    <div ref={skillsRef} className="flex text-[white]">
      <Container>
        <div className="relative lg:mt-16 flex flex-col gap-6 z-10">
          <div>
            <Border />
          </div>
          <SectionHeader
            className="relative"
            icon={
              <>
                <BookOpen height={28} width={28} />
                <span className="bg-[#939aff] icon-blur absolute inset-0 -z-10"></span>
              </>
            }
            title="Skills"
            description={
              <div className="mt-2">
                <span className="text-[#939aff]">Full Stack software</span>{" "}
                developer{" "}
                <span className="text-[#939aff]">with experience</span> in
                Front-End and <span className="text-[#939aff]">Back-End</span>{" "}
                technologies
              </div>
            }
          />
        </div>
        <div className="mt-10 lg:mt-24 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-12">
          <div className="skills-picker  w-[250px] lg:w-[325px] lg:h-[325px] m-[10px] h-[250px] col-span-3 row-span-3 place-self-center isolate">
            <div className="rounded-full inset-6 absolute grid grid-cols-2  gap-2 rotate-45">
              {skills.map((skill) => (
                <button
                  onClick={handleChangeSkill}
                  key={skill.skill}
                  className={clsx(
                    "rounded-[500px] skills-buttons",
                    skill.buttonClassNames,
                    activeSkill === skill.skill && "skills-buttons-active"
                  )}
                >
                  <p
                    className={clsx(
                      "text-xl lg:text-3xl text-white font-semibold tracking-wide w-min -rotate-45",
                      skill.textClassNames
                    )}
                  >
                    {skill.skill}
                    <span
                      className={clsx(
                        "transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full",
                        activeSkill === skill.skill ? "h-[18px]" : "h-[2px]"
                      )}
                    ></span>
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:grid grid-cols-3 hidden">
            {skillsLogos[activeSkill].map((skill, index) => {
              if (!skill.name)
                return <div key={index} className="h-[115px] w-24" />;
              return (
                <FadeIn
                  key={skill.name}
                  className="h-[115px] w-24  place-self-center flex flex-col"
                >
                  <div className="mt-auto ">
                    <img
                      src={skill.image}
                      className="object-contain rounded-md m-auto"
                      alt=""
                      height={64}
                      width={64}
                      style={{
                        width: 64,
                        height: 64,
                      }}
                    />
                    <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">
                      {skill.name}
                    </h3>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-3 lg:hidden">
          {skillsLogos[activeSkill].map((skill, index) => {
            if (!skill.name)
              return <div key={index} className="h-[115px] w-24" />;

            return (
              <FadeIn
                key={skill.name}
                className="h-[115px] w-24  place-self-center flex flex-col"
              >
                <div className="mt-auto ">
                  <img
                    src={skill.image}
                    className="object-contain rounded-md m-auto"
                    alt=""
                    height={64}
                    width={64}
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  />
                  <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">
                    {skill.name}
                  </h3>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Skill;
