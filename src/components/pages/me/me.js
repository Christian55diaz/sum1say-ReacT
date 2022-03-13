// importing
import React from "react";

//info about me function
//export and calling function
export default function Me() {
    return(
        //adding css into the js file instead of using a css file
        <section id="about">
            <div className=""></div>
            <div className=""></div>
            <h1 className="">
                Welcome, I'm Christian.
                {/* we put a break so there is room for this statement */}
                <br className="" /> Full Stack Web Developer
          </h1>
          <p className="">
        Welcome to my portfolio! My name is Christian Diaz. I over the six months being at the Columbia Enginering bootcamp have worked on over 
        twenty different projects over various topics and have worked on three group projects building full stack websites.This schooling is my 
        foundation and step towards the Software Enginering feild, where I will grow and develop more to hopefully create that game changing app!
        I have skills in Javascript, Html, CSS, MySQL, MongoDB, Mongoose, and Communication.
        </p>
            </section>
        
    );
}
