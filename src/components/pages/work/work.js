//importing my projects from workdata and react
import React from "react";
import { projects } from "./workData";

export default function Projects() {
    return (
        // bringing in css again so that i do no have to make a seperate file
        <section id="Work" className="intro-app">
          <h1 className="">
              Apps I've Built
              </h1>
              <p className="">
           These are my four favorite projects I've built during my time in my bootcamp.
          </p>
        {/* here we are setting up in a way like a partials so that way I can import my projects from another file so that way it leaves me with a cleaner looking work.js file */}
        <div className="project-section">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image} >
              {/* then we grab a specific picture */}
              <img
                  alt="gallery"
                  className="work-img"
                  src={project.image}
                />
                <div className="proj-stuff">
                  <h2 className="sub-title">
                      {/* if project has subtitle add it */}
                    {project.subtitle}
                  </h2>
                  {/* project title */}
                  <h1 className="proj-title">
                    {project.title}
                  </h1>
                  {/* project description */}
                  <p className="des-title">{project.description}</p>
                </div>
            </a>
          ))}
        </div>
    </section>
  );
}
