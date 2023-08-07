import React from "react";
import {Link} from "react-router-dom";
import '../styles/NavBar.css'
import GithubIcon from '@rsuite/icons/legacy/Github'
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin'
const NavBar = () => {
    return(
        <>
            <div className='navContainer'>
                <div className='links'>
                    <ul>
                        <li>
                            <Link to="https://github.com/papaguyo" className='link'><GithubIcon className="icon2" /> Github</Link>
                            <Link to="https://papaguyo.itch.io/" className='link'>Itch.io</Link>
                            <Link to="https://www.linkedin.com/in/guy-achiam-207b87231/" className='link'><LinkedinIcon className="icon2"/> Linkedin</Link>
                        </li>
                    </ul>
                </div>    
            </div>
        </>
    )
}

export default NavBar;