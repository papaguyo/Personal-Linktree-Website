import React from "react";
import '../styles/SecondNavBarStyles.css'
import {Link} from "react-router-dom";
import GithubIcon from '@rsuite/icons/legacy/Github'
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin'
import EmailIcon from '@rsuite/icons/EmailFill'



const SecondNavBar = () => {
    return(
        <div className="container">
            <Link to="https://github.com/papaguyo" className="link"><GithubIcon className = "icon3"/> Github</Link>
            <Link to="https://papaguyo.itch.io/" className='link'>Itch.io</Link>
            <Link to="https://www.linkedin.com/in/guy-achiam-207b87231/" className='link'><LinkedinIcon className = "icon3"/> Linkedin</Link>
            <Link to="mailto:guy.achiam@gmail.com" className='link'><EmailIcon className="icon3" />Contact</Link>
        </div>
    );
}

export default SecondNavBar