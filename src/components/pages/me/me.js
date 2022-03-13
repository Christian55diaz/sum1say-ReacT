// importing
import React from "react";

//info about me function
//export and calling function
export default function Me() {
    return(
        //adding css into the js file instead of using a css file
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Welcome, I'm Christian.
                {/* we put a break so there is room for this statement */}
                <br className="hidden lg:inline-block" /> Full Stack Web Developer
          </h1>
        <div>
            <h1 className="me-title">About me</h1>
        </div>
        <section className="me-container">
        <p>
        Welcome to my portfolio! My name is Christian Diaz. I over the six months being at the Columbia Enginering bootcamp have worked on over 
        twenty different projects over various topics and have worked on three group projects building full stack websites.This schooling is my 
        foundation and step towards the Software Enginering feild, where I will grow and develop more to hopefully create that game changing app!
        I have skills in Javascript, Html, CSS, MySQL, MongoDB, Mongoose, and Communication.
        </p>
        </section>
        </div>
            </section>
        
    );
}
