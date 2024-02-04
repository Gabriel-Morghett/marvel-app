import React from 'react'

// css
import "../styles/NavegationBar.css"

export default function NavegationBar() {
  return (
    <nav className='navegationBar'>
        <ul>
            <li>
                <a href="/">Authentication</a>
            </li>
            <li>
                <a href="characters">Characters</a>
            </li>
            <li>
                <a href="comics">Comics</a>
            </li>
            <li>
                <a href="creators">Creators</a>
            </li>
        </ul>

    </nav>
  )
}
