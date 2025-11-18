import "./header.scss"
import logo from "../../assets/logo-passoia.png"
import menu from "../../assets/icon-menu-mobile.png"
import React, { useState } from 'react';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return(
        <header>
            <img className="logo-header" src={logo} alt="logo marca da página" />
            <div className="navigation-menu">
                <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} >
                    <img className="menu-mobile" src={menu} alt="menu" />
                </button>

                <div 
                    className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
                    onClick={closeMenu}>   
                </div>

                <nav className={isMenuOpen ? 'active' : ''}>
                    <ul className="list-links">
                        <li className="nav-item">
                            <a href="#">LOOKS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">LANÇAMENTOS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">NOVIDADE</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header