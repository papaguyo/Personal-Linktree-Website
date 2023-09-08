import React, {useEffect, useRef} from "react";
import '../styles/SharePopupStyle.css'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Close from "@rsuite/icons/legacy/Close";
import WhatsApp from "@rsuite/icons/legacy/Whatsapp"
import NextArrow from "@rsuite/icons/legacy/PageNext"
import EmailIcon from '@rsuite/icons/Email'
import CopyIcon from '@rsuite/icons/Copy'



const SharePopup = (props) => {
    
    //Reference to the popup menu.
    const popupRef = useRef();
    
    
    //Close popup when clicking outside of it effect.
    useEffect(() => {
        let handler = (e) => {
            if(popupRef.current && !popupRef.current.contains(e.target)){
                props.setTrigger(false);    
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    
    
    // Clipboard link copy
    const copyLink = () => {
        const currentURL = window.location.href;
        const textArea = document.createElement('textarea');
        textArea.value = currentURL;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
    
    
    //Passing button trigger property as an argument. 
    return(props.trigger) ? (
        <motion.div animate={{y: -100, opacity: 1}} initial={{opacity: 0}} className="popup">
            <div className="popup-inner" ref={popupRef}>
                <button onClick={() => props.setTrigger(false)} className="close-btn"><Close/></button>
                {props.children}
                
                <h4 className="share-title">Share this website</h4>
                
                <div className="links-container">
                    <Link to="whatsapp://send?text=Your message!!!" className="link">
                        <WhatsApp className="icon6"/>
                        <span className="middle-content"> Share Via WhatsApp </span> 
                        <NextArrow className="icon6"/>
                    </Link>
                    
                    <Link to="mailto: &body=Check out GIRO's website at www." className="link">
                        <EmailIcon className="icon6"/>
                        <span className="middle-content">
                            Share Via Email    
                        </span>
                        <NextArrow className="icon6"/>
                    </Link>
                    
                    <Link to="#" onClick={copyLink} className="link">
                        <CopyIcon className="icon6"/>
                        <span className="middle-content">
                            Copy Website Link 
                        </span>
                        <NextArrow className="icon6"/>
                    </Link>
                </div>
                
            </div>
        </motion.div>
    ) : "";
}


export default SharePopup;