import React from "react";
import {View, StyleSheet} from "react-native";
import {Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Title from "./pages/Title";
import "./styles/styles.css";
import './App.css';
import NavBar from "./components/NavBar";
import '../src/styles/dividerStyles.css'
import SecondNavBar from "./components/SecondNavBar";


const styles = StyleSheet.create({
    generalViewStyle: {
        flex: 1,
        backgroundColor: '#2A2A2A'
    },
    
    captionStyle: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh'
    },
    
    linksStyle: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh'
    },
    
    textStyle:{
        flex: 1,
        display: 'flex',
        height: '20vh',
    },
    
    buttonTextStyle:{
        color: "#ffad66"
    },
        
});


const App = () => {
    
    return (
        <div className="App">
            <View style={styles.generalViewStyle}>
                  
                <div style={styles.captionStyle}>
                    <Routes location="/">
                        <Route path="/" element={<Title/>} />
                    </Routes>
                </div>

                <div style={styles.textStyle} className="textContainer">
                    <Routes location="/">
                        <Route path="/" element={<About/>} />
                    </Routes>
                </div>
                
                <div>
                    <SecondNavBar/>    
                </div>
                
                  
                {/*<NavBar />*/}
                  
            </View>
        </div>
    );
}

export default App;
