//importing my projects from workdata and react
import React from "react";
import { projects } from "./workData";

export default function Projects() {
    return (
        // bringing in css again so that i do no have to make a seperate file
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Apps I've Built
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           These are my four favorite projects I've built during my time in my bootcamp.
          </p>
        </div>
        {/* here we are setting up in a way like a partials so that way I can import my projects from another file so that way it leaves me with a cleaner looking work.js file */}


        </section>
