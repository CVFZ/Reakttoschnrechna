import logo from './blue-car-hp-left-bmw.ico';
import './App.css';
import React from 'react';
import './Headline1'


import ReactDOM from 'react-dom';
import Headline1 from "./Headline1";

import Calculation from "./Calculation";



function App() {

    return (

        <div className="App">

            <header className="App-header">

                <form>
                <Headline1></Headline1>
                    <Calculation></Calculation>



                </form>

                <img src={logo} className="App-logo" alt="logo"/>


            </header>


        </div>
    );

}


export default App;
