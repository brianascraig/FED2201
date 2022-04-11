import {React, Fragment} from 'react';
import './Features.css';
import { Col, Row } from 'react-bootstrap';
import CustomCard from '../CustomCard/CustomCard';

export default function features(props) {
    return (
        <div className="Features" id="features">
                <Row className='featuresContainer'>
                    <Col className='featuresCol'>
                        <CustomCard 
                            cardImg={props.cardImg1Src}
                            cardTitle={props.card1Title}
                            cardText={props.card1Text}
                            cardBtnText={props.card1Btn}
                        />
                    </Col>
                    <Col className='featuresCol'>
                        <CustomCard 
                                cardImg={props.cardImg2Src}
                                cardTitle={props.card2Title}
                                cardText={props.card2Text}
                                cardBtnText={props.card2Btn}
                            />
                    </Col>
                </Row> 
        </div>
    );
}