import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'

export class Footer extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid className='footer-section'>
                <Row>
                    <Col lg={3} md={6} sm={12} className='p-5 text-center'>
                        <h2 className='footer-name text-center'>Follow Us </h2>
                        <div className='social-container'>
                        <a className='youtube social' href="#">
                            
                            <FontAwesomeIcon  className='fontaa' icon={faYoutube} />
                        </a>
                        <a href="#" className='facebook social'>
                        <FontAwesomeIcon  className='fontaa' icon={faFacebook} />
                        </a>
                        <a href="#" className='twitter social'>
                        <FontAwesomeIcon  className='fontaa' icon={faTwitter} />
                            </a>
                            </div>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h2 className='footer-name text-center'>Address</h2>
                        <p className='fotteraddress'>1234 Basundhara, Dhaka, Bangladesh
                           

                        </p>
                        <p className='fotteraddress'>
                        <FontAwesomeIcon  className='fontaa1' icon={faEnvelope} />
                            Email : fahimadnan2100@gmail.com
                            

                        </p>
                        <p className='fotteraddress'>
                        <FontAwesomeIcon  className='fontaa1' icon={faPhone} />
                            phone : +8801781724451
                            

                        </p>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h2 className='footer-name '>Information</h2>
                        <a className='footerlink' href="#">About Me</a><br />
                        <a className='footerlink' href="#">Company Profile Me</a><br />
                        <a  className='footerlink' href="#">Contact Us</a>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h2 className='footer-name '>Policy</h2>
                        <a className='footerlink' href="#">Refund Policy</a><br />
                        <a className='footerlink' href="#">Terms And Condition</a><br />
                        <a className='footerlink' href="#">Privacy Policy</a>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='text-center copyright'>
                <a href="#">
                © Copyright 2022 by Machine Learning. All Rights Researved.
                </a>
            </Container>
      </Fragment>
    )
  }
}

export default Footer
