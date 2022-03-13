    import React, {useState, useEffect} from 'react'
    import './navbar.css' 
    
    export default function navbar() {
        const [toggleMenu, setToggleMenu] = useState(false)
        const toggleNav = () => {
            // !reverses my false use state
            setToggleMenu(!toggleMenu)
        }

      return (
        <nav>
            {toggleMenu && (
                <ul className='list'>
                <li className='items'>About Me</li>
                <li className='items'>Projects</li>
                <li className='items'>Contact</li>
                </ul>
            )}
            <button className='btn'>click me</button>
        </nav>
      )
    }
    