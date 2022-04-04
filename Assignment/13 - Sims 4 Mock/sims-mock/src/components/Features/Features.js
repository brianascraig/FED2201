import React from 'react';
import './Features.css';
import { Col, Row } from 'react-bootstrap';

export default function features(props) {
    return (
        <div className="Features" id="features">
            <Row className='featuresContainer'>
                <Col className='featuresCol'>
                    <img className="featuresImg" src={props.featuredImg1} />
                </Col>
                <Col className='featuresCol'>
                    <img className="featuresImg" src={props.featuredImg2} />
                </Col>
            </Row>
        </div>
    );
}