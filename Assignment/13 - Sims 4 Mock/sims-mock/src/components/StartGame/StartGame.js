import React from 'react';
import './StartGame.css';
import { Row, Col } from 'react-bootstrap';
import {BsThreeDots, BsImages} from 'react-icons/bs';

export default function startGame(props) {
    return (
        <Row className="StartGame" id="startGame">
           <Col className='mainCol'>
                <div>
                    <img src={props.logoImg}/>
                </div>
                <div>
                    <img src={props.playBtnImg} />
                </div>
                <div>
                    <button type='button' className='scenarioBtn'>Play Scenario</button> 
                </div>
                <Row>
                    <Col>
                        <button type='button' className='galleryBtn'><BsImages /></button> 
                        <p>Gallery</p>
                    </Col>
                    <Col>
                        <button type='button' className='optionsBtn'><BsThreeDots /></button> 
                        <p>Options</p>
                    </Col>
                   
                </Row>
           </Col>
        </Row>
    );
}