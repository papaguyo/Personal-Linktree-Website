import React from "react";
import {View, StyleSheet} from "react-native";
import {Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Title from "./pages/Title";
import "./styles/styles.css";
import './App.css';
import '../src/styles/dividerStyles.css'
import SecondNavBar from "./components/SecondNavBar";
import Home from "./pages/Home";
import SharePopup from "./components/SharePopup";
import {useState} from "react";
import ShareIcon from '@rsuite/icons/legacy/Share'


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
    
    buttonTextStyle:{
        color: "#ffad66"
    },
        
});


const App = () => {
    
    const [buttonPopup, setButtonPopup] = useState(false)
    
    return (
        <div className="App">
            <View style={styles.generalViewStyle}>
                
                <div className="second-button-container">
                    <button className="share-button" onClick={() => setButtonPopup(true)}>
                        <ShareIcon className="icon5"/>
                    </button>
                </div>
                
                <div style={styles.captionStyle}>
                    <Routes location="/">
                        <Route path="/" element={<Title/>} />
                    </Routes>
                </div>

                <div className="textContainer">
                    <Routes location="/">
                        <Route path="/" element={<About/>} />
                    </Routes>
                </div>
                
                <div>
                    <SecondNavBar/>    
                </div>


                <div>
                    <Routes location="/">
                        <Route path="/" element={<Home/>} />
                    </Routes>
                </div>
                
                <div>
                    
                </div>
                <SharePopup trigger={buttonPopup} setTrigger={setButtonPopup}/>
                
            </View>
        </div>
    );
}

export default App;
