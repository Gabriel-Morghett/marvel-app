import React from 'react'

// css
import "../styles/NavegationBar.css"

export default function NavegationBar() {
  return (
    <nav className='navegationBar'>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="auth">Authentication</a>
            </li>
            {/* <li>
                <a href="about">About</a>
            </li> */}
            <li>
                <a href="characters">Characters</a>
            </li>
        </ul>

    </nav>
  )
}
