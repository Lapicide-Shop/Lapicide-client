import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../assets/arrow.png'
import './Navbar.css'
import classNames from "classnames";
function Navbar(){
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }
    return(
        <>
        <nav className={`${openMenu ? 'openNav' : 'closeNav'}`}>
        <div>
                <div className="nav-Link">
                    <Link to='/' onClick={closeMenu}>
                        <li>TEST</li>
                    </Link>
                    <Link to='/about' onClick={closeMenu}>
                        <li>ABOUT</li>
                    </Link>
                    <Link to='/shop' onClick={closeMenu}>
                        <li>SHOP</li>
                    </Link>
                </div>
                <div className="social-link">
                    
                        <Link to="https://www.instagram.com/emilievizcano/">
                        <div className="social">
                            <img className="arrow-nav" src={arrow} alt="arrow-list"/>
                            <li>INSTAGRAM</li>
                        </div>
                        </Link>
                    
                        <Link to="https://twitter.com/sen_vz">
                        <div className="social">
                            <img  className="arrow-nav" src={arrow} alt="arrow-list"/>
                            <li>TWITTER</li>
                        </div>    
                        </Link>
                    
                        <Link to="https://emilievizcano.com/">
                        <div className="social">
                            <img className="arrow-nav" src={arrow} alt="arrow-list"/>
                            <li>WEBSITE</li>
                        </div>
                        </Link>
                    
                </div>

        </div>
        </nav>
        <button  className={classNames ("navbar-burger", {'open': openMenu})} onClick={handleOpenMenu}>
            <span className="burger-bar"></span>
        </button>
      
      </>
    )
}

export default Navbar