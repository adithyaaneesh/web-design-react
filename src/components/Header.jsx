import React from 'react'
import '../styles/Header.css'

const Header = () => {

  return (
    <header>
        <div className='container'>
            <nav>
                <div>
                    <h3>B. Harrison</h3>
                </div>
                <div className='menu-item'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
            
        </div>
    </header>
    
  )
}

export default Header
