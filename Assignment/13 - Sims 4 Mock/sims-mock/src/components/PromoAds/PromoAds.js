import React from 'react';
import './PromoAds.css';
import { Col, Row } from 'react-bootstrap';

export default function promoAds(props) {
    return (
        <div className="PromoAds" id="promoAds">
            <Row className='promosContainer'>
                <Row>
                    <Col>
                        <p className='promoSectionTitle'>Stuff You Might Like</p>
                    </Col>
                </Row>
                <Col>
                <Row>
                        <Col sm={4}>
                            <img src={props.promo1} />
                        </Col>
                        <Col sm={8}>
                            <p className='promoTitle'>{props.promoText1}</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col sm={4}>
                            <img src={props.promo2} />
                        </Col>
                        <Col sm={8}>
                            <p className='promoTitle'>{props.promoText2}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}