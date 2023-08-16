import React from "react";
import {Text, StyleSheet} from 'react-native';
import '../styles/HomeStyles.css'
import HeartIcon from '@rsuite/icons/legacy/Heart'


const styles = StyleSheet.create({
    homeTextStyle: {
        color: "#ff9d49",
        fontFamily: 'JetBrains Mono'
    }
});
    
    
function Home() {
    return(
        <div className="home-container">
            <Text style={styles.homeTextStyle}>Made with <HeartIcon color="#CF4141"/> by GIRO</Text>
        </div>
    );
}

export default Home;