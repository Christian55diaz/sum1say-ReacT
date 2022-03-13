// setup import react
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        {/* setup how the contact me is going to work */}
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                christian55diaz@gmail.com
              </a>
              {/* you could also add phone # and location but I will not be doing that as of now */}
              </div>
          </div>
        </div>
</section> 
    )
}