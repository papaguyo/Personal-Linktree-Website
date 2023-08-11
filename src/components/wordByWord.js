import React, { useState, useEffect } from "react";
import "../styles/wordByWordAnimation.css";


const WordByWordAnimation = ({ text }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timer;

        if (currentIndex < text.length) {
            timer = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 13); // Adjust the delay (in milliseconds) between each character
        }

        return () => {
            clearTimeout(timer);
        };
    }, [currentIndex, text]);

    return (
        <div className="word-by-word-container">
            <span className="word-by-word-animation">{currentText}</span>
        </div>
    );
};

export default WordByWordAnimation;


