import React, { useState } from 'react';
import "./Styles/Navbar.css";
import Logo from "../../assets/Images/logo.png"
import {Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className='navbar-container'>

        <div className="nav-logo">
            <img src={Logo} style={{width: "2rem", height: "2rem"}} alt="" /><h3 className='nav-heading'>Alexa Developers CU</h3>
        </div>

        <div className="nav-links" >
          <div className="nav-icons" onClick={()=>{setHamburger(!hamburger)}}>

            {hamburger ? 
            <RxCross2 />
            :
            <GiHamburgerMenu />
            }
          </div>
           <ul>
                <Link to="/" className='nav-items-links'><li>Home</li></Link>
                <Link to="#aboutus" className='nav-items-links'><li>About</li></Link>
                <Link to="#team" className='nav-items-links'><li>Team</li></Link>
                <Link to="#events" className='nav-items-links'><li>Events</li></Link>
                <Link to="/repositories" className='nav-items-links'><li>Repositories</li></Link>
            </ul>
        </div>
            {
              (hamburger) ? 
              <> 
                <div style={{flexBasis: "100%", height: 0}}></div>
                      <div className="mobile-menu menu-ham" style={{flexDirection: "column"}}>
                        <ul>
                          <Link to="/" className='nav-items-links'><li>Home</li></Link>
                          <Link to="#aboutus" className='nav-items-links'><li>About</li></Link>
                          <Link to="#team" className='nav-items-links'><li>Team</li></Link>
                          <Link to="#events" className='nav-items-links'><li>Events</li></Link>
                          <Link to="/repositories" className='nav-items-links'><li>Repositories</li></Link>
                        </ul>
                      </div>  
              </> : 
              <></>
            }
        
    </div>
  )
}
