import React from "react";
import GIRO_GIF from '../assets/GIRO-GIF-NEW.gif'
import '../styles/TitleStyle.css'


const Title = () => {
    return(
        <div className="image-container">
            <img src={GIRO_GIF} alt="my-gif" loading="lazy"/>
        </div>
    );
}

export default Title;