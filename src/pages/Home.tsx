import React from "react";
import GridPattern from "../components/GridPattern";
import Introduction from "../components/home/Introduction";
import Border from "../components/home/Border";
import AboutMe from "../components/home/AboutMe";
import WorkExperience from "../components/home/WorkExperience";
import Skill from "../components/home/Skill";
import MyWork from "../components/home/MyWork";
import Contact from "../components/home/Contact";
import Stars from "../components/Stars";

const Home = () => {
  return (
    <div className="w-fit lg:w-[100%] h-full overflow-y-scroll overflow-x-hidden text-[white]">
      <GridPattern />
      <Introduction />
      <AboutMe />
      <WorkExperience />
      <Skill />
      <MyWork />
      <Contact />
    </div>
  );
};

export default Home;
