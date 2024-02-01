import React from 'react'
import logo from '../img/marvel.png'

const Header = () => {
    return (
        <header className="header_container">
            <img src={logo} className='img'/>
        </header>
    )
}

export default Header