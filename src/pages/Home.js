import React from "react";
import {Text, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
        color: "#CACACA"
    }
});
    
    
function Home() {
    return(
        <div style={styles.container}>
            <Text></Text>
        </div>
    );
}

export default Home;