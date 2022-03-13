    import React, {useState, useEffect} from 'react'
    import './navbar.css' 
    
    export default function navbar() {
      return (
        <nav>
            <ul className='list'>
            <li className='items'>About Me</li>
            <li className='items'>Projects</li>
            <li className='items'>Contact</li>
            </ul>
        </nav>
      )
    }
    