// setup import react
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="">
      <div className="">
        <div className="">
        {/* setup how the contact me is going to work */}
        <div className="">
              <h2 className="">
                EMAIL
              </h2>
              <a className="" href = "mailto: christian55diaz@gmail.com">
                EMAIL
              </a>
              {/* you could also add phone # and location but I will not be doing that as of now */}
              </div>
          </div>
        </div>
        <form
        // start of contact me form
        netlify
        name="contact"
        className="">
            <h2 className="">
                Contact Me
                </h2>
                <p className="">
                    Fill out the fields below if you would like to get in contact with me.
                    </p>
            
            </form>
</section> 
    )
}