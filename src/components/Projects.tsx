import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Countdown Timer  React j.s Next.js ",
    desc: "A Countdown Timer with the help of Next j.s React j.s and Tailwind css and typescript A Countdown Timer that display the remaining time in minutes,and second very useful and helpful and use button Start, Pause, Reset .A Next.js and React powered website to track time with an interactive countdown timer",
    img: "/project 1.png",
    tags: ["React", "Node", "Next.js"],
  },
  {
    id: 1,
    title: "Interactive Resume",
    desc: "A Static Interactive Resume with the help of HTML, CSS, TYPESCRIPT",
    img: "/project 2.png",
    tags: ["HTML", "CSS", "TYPESCRIPT"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid grid:gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
