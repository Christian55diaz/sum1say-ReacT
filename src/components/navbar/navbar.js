    import React, {useState, useEffect} from 'react'
    import './navbar.css' 
    
    export default function Navbar() {
        const [toggleMenu, setToggleMenu] = useState(false)
        //allows button to show on full screen instead displaying null
        const [screenWidth, setScreenWidth] = useState
        (window.innerWidth)
        const toggleNav = () => {
            // !reverses my false use state
            setToggleMenu(!toggleMenu)
        }
        useEffect(() => {
         const  changeWidth = () => {
             setScreenWidth(window.innerWidth)
         }
         //everytime the window is resized we change the width
          window.addEventListener('resize', changeWidth)  
          //return so we do not keep addeventlistener in the memory
          return () => {
              window.removeEventListener('resize', changeWidth)
          }
        }, [])

      return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className='list'>
               <a href='#Me'><li className='items'>About Me</li></a>
               <a href='#Work'><li className='items'>Projects</li></a>
                <a href='#Contact'><li className='items'>Contact</li></a>
                </ul>
            )}
            <button onClick={toggleNav} className='btn'>click me</button>
        </nav>
      )
    }
    