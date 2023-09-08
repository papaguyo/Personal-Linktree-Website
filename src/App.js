import React from "react";
import {View} from "react-native";
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


const App = () => {
    
    const [buttonPopup, setButtonPopup] = useState(false)
    
    return (
        <div className="App">
            <View style={{flex: 1}}>
                
                {/*Share popup menu button*/}
                <div className="second-button-container">
                    <button className="share-button" onClick={() => setButtonPopup(true)}>
                        <ShareIcon className="icon5"/>
                    </button>
                </div>
                
                {/*GIRO Title*/}
                <Routes location="/">
                    <Route path="/" element={<Title/>} />
                </Routes>

                {/*About prompt*/}
                <div className="textContainer">
                    <Routes location="/">
                        <Route path="/" element={<About/>} />
                    </Routes>
                </div>
                
                {/*Links navigation buttons*/}
                <SecondNavBar/>
                
                {/*Prompt message at bottom*/}
                <Routes location="/">
                    <Route path="/" element={<Home/>} />
                </Routes>
                
                {/*Share popup menu*/}
                <SharePopup trigger={buttonPopup} setTrigger={setButtonPopup}/>
                
            </View>
        </div>
    );
}

export default App;
