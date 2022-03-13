   import "./intro.css"
   //importing my personal picture
  

   const Intro = () => {
        return (
            //i = shortcut for index
            <div className="i">
                {/* left side of the header(intro) */}
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-welcome">Welcome, My name is</h2>
                        <h1 className="i-gov">Christian Diaz</h1>
                        <div className="i-title">
                           <div className="i-title-wrapper">
                                <div className="i-title-career">Full Stack Web Developer
                                </div>
                               </div>
                               <div className="i-about-me">
                                   I over the six months being at the Columbia Enginering bootcamp
                                   have worked on over twenty different projects over various topics 
                                   and have worked on three group projects building full stack websites.

                                   This schooling is my step towards the Software Enginering feild, where I will
                                   grow and develop more to hopefully create that game changing app!
                                   </div>
                            </div>
                        </div>
                    </div>
                    {/* right side of the header(intro) */}
                <div className="i-right">right
                    
                </div>
            </div>
        )
    }

    export default Intro