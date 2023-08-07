import React from "react";
import {Text, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
        color: "#ffad66"
    }
});

function Title() {
    return(
        <div style={styles.container}>
            <h1>
                GIRO
            </h1>
        </div>
    );
}

export default Title;