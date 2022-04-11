import React from 'react';
import './CustomCard.css';
import { Col, Row } from 'react-bootstrap';

export default function customCard(props) {
    return (
        <div className="customCard" id="customCard">
            <div className='customCardContainer'>
                <img className="cardImg" src={props.cardImg} />
                <div className='customCardContent'>
                    <h2 className='cardTitle'>{props.cardTitle}</h2>
                    <p className='cardText'>{props.cardText}</p>
                    <button className='cardBtn'>{props.cardBtnText}</button>
                </div>
            </div>
        </div>
    );
}

