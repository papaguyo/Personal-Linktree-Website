import React from "react";
import '../styles/SecondNavBarStyles.css'
import {Link} from "react-router-dom";
import GithubIcon from '@rsuite/icons/legacy/Github'
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin'
import EmailIcon from '@rsuite/icons/EmailFill'
import GamePad from '@rsuite/icons/legacy/Gamepad'
import NextArrow from "@rsuite/icons/legacy/PageNext"



const SecondNavBar = () => {
    return(
        <div className="container">
            <Link to="https://github.com/papaguyo" className="link">
                <GithubIcon className = "icon3"/>
                <span className="middle">
                    Github
                </span>
                <NextArrow className="icon3"/>
            </Link>
            
            <Link to="https://papaguyo.itch.io/" className='link'>
                <GamePad className="icon3"/>
                <span className="middle">
                    Itch.io
                </span>
                <NextArrow className="icon3"/>
            </Link>
            
            <Link to="https://www.linkedin.com/in/guy-achiam-207b87231/" className='link'>
                <LinkedinIcon className = "icon3"/>
                <span className="middle">
                    Linkedin
                </span>
                <NextArrow className="icon3"/>
            </Link>
            
            <Link to="mailto:guy.achiam@gmail.com" className='link'>
                <EmailIcon className="icon3" />
                <span className="middle">
                    Contact
                </span> 
                <NextArrow className="icon3"/>
            </Link>
        </div>
    );
}

export default SecondNavBar