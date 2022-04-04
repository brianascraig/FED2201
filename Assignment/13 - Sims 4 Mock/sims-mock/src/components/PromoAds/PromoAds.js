import React from 'react';
import './PromoAds.css';
import { Col, Row } from 'react-bootstrap';

export default function promoAds(props) {
    return (
        <div className="PromoAds" id="promoAds">
              <Row className='promosContainer'>
                <Col>
                    <img src={props.promo1} />
                </Col>
                <Col>
                    <img src={props.promo2} />
                </Col>
            </Row>
        </div>
    );
}