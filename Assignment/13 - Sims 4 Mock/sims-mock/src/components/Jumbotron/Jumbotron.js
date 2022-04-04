import React from 'react';
import './Jumbotron.css';
import { Row, Col } from 'react-bootstrap';

export default function jumbotron(props) {
    return (
        <div className="Jumbotron" id="jumbotron">
           <Row className='bannerContainer'>
               <Col>
                    <div>
                        <img src={props.bannerImg}/>
                    </div>
               </Col>
           </Row>
        </div>
    );
}