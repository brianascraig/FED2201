import React from 'react';
import './Home.css';
import Header from '../../Header/Header';
import StartGame from '../../StartGame/StartGame';
import Jumbotron from '../../Jumbotron/Jumbotron';
import PromoAds from '../../PromoAds/PromoAds';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../assets/images/sims4logo.PNG';
import playBtn from '../../../assets/images/simsplay.PNG'
import Features from '../../Features/Features';
import simsmansion from '../../../assets/images/simsmansion.PNG';
import simsyacht from '../../../assets/images/simyacht.PNG';
import banner from '../../../assets/images/bannerimg.PNG';
import upgradePromo from '../../../assets/images/updatepromo.PNG';
import packsPromo from '../../../assets/images/packspromo.PNG';

export default function home() {
    return (
        <Row className="Home" id="home">
                <Col sm={9} className="headerContainer">
                    <Header className="header"/>  
                    <Features 
                        className="features" 
                        cardImg1Src={simsmansion}
                        cardImg2Src={simsyacht}
                        card1Title="INDUSTRIAL MANSION STYLE"
                        card1Text="Make a glass-walled pool."
                        card1Btn="BUY NOW"
                        card2Title="YACHT STYLE"
                        card2Text="Surround your home with water for a yacht theme."
                        card2Btn="CHECK IT OUT"
                    />
                    <Jumbotron
                        className="jumbotron"
                        bannerImg={banner}
                    />
                    <PromoAds 
                        className="promoAds"
                        promo1={upgradePromo}
                        promo2={packsPromo}
                        promoText1="Game update available"
                        promoText2="New Expansion Packs"
                    />
                </Col>
                <Col sm={3} className="startGameContainer">
                    <StartGame 
                        className="startGame"
                        logoImg={logo}
                        playBtnImg={playBtn}
                    />
                </Col> 
        </Row>

        
    );

}