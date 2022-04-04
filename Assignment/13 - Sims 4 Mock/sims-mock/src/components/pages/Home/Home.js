import React from 'react';
import './Home.css';
import Header from '../../Header/Header';
import StartGame from '../../StartGame/StartGame';

export default function home() {
    return (
        <div className="Home row no-gutters" id="home">

                <div className="headerContainer col-9">
                    <Header className="header"/>
                    
                </div>

                <div className="startGameContainer col-3">
                    <StartGame className="startGame" />
                </div>
        </div>
    );
}