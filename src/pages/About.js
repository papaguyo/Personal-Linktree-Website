import React from "react";
import {Text, StyleSheet} from 'react-native';
import WordByWord from "../components/wordByWord";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        color: "#CACACA",
    },
    
    textStyle:{
        fontFamily: 'JetBrains Mono',
        fontSize: '16px',
        textAlign: 'left',
        color: "#ff9d49"
    }
});

function About() {
    const textToAnimate = "Hey there, I'm Guy, a student for Computer Science and Video Games Development\n" +
        "at The Hebrew University Of Jerusalem and Bezalel Academy of arts and Design.\n" +
        "I enjoy creating fun & casual games and code visual captivating projects.\n\n" +
        "I'm always open to new opportunities,\n" + 
        "so dont hesitate to reach out and lets rock it together!"; 
        
    
    return(
        <div style={styles.container}>
            <Text style={styles.textStyle}>
                <WordByWord text={textToAnimate} />    
            </Text>
        </div>
    );
}

export default About;