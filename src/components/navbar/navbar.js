    import React, {useState, useEffect} from 'react'
    import './navbar.css' 
    
    export default function navbar() {
        const [toggleMenu, setToggleMenu] = useState(false)
        //allows button to show on full screen instead displaying null
        const [screenWidth, setScreenWidth] = useState
        (window.innerWidth)
        const toggleNav = () => {
            // !reverses my false use state
            setToggleMenu(!toggleMenu)
        }

      return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className='list'>
                <li className='items'>About Me</li>
                <li className='items'>Projects</li>
                <li className='items'>Contact</li>
                </ul>
            )}
            <button onClick={toggleNav} className='btn'>click me</button>
        </nav>
      )
    }
    