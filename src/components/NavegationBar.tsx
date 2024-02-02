import React from 'react'

export default function NavegationBar() {
  return (
    <header>
        <nav className='navegationBar'>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                {/* <li>
                    <a href="about">About</a>
                </li> */}
                <li>
                    <a href="characters">Characters</a>
                </li>
            </ul>

        </nav>
    </header>
  )
}
