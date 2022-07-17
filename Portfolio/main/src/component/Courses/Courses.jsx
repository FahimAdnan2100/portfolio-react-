import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Courses extends Component {
  render() {
    return (
        <Fragment>
            <Container>
            <h1 className='serviceTitle text-center'>MY COURSES</h1>
                <div className='button'>

                </div>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Row margin>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <img className='courseImg' src="https://img.freepik.com/free-photo/virtual-assistant-circle-background-purple-gradient-disruptive-technology_53876-124676.jpg?w=1380&t=st=1657802287~exp=1657802887~hmac=8b5ec457a4e987247636c828abb477239f553fecefd12160d0fcaa6ea7d9cb70" alt="" />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <h5 className='servicename'>Laravel 8</h5>
                                <p className='servicedetail text-justify'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so.</p>
                                <a className='details' href="#">View Details</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <img className='courseImg' src="https://img.freepik.com/premium-photo/robot-humanoid-use-mobile-phone-tablet-global-network-connection_31965-7927.jpg?w=1800" alt="" />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <h5 className='servicename'>Laravel 8</h5>
                                <p className='servicedetail text-justify'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so.</p>
                                <a className='details' href="#">View Details</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                    <Row>
                    <Col lg={6} md={12} sm={12} className="p-2">
                                <img className='courseImg' src="https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-6376.jpg?w=1800" alt="" />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <h5 className='servicename'>Django</h5>
                                <p className='servicedetail text-justify'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so.</p>
                                <a className='details' href="#">View Details</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <img className='courseImg' src="https://img.freepik.com/premium-photo/robot-humanoid-use-laptop-sit-table-big-data-analytic_31965-9305.jpg?w=1380" alt="" />
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <h5 className='servicename'>Angular</h5>
                                <p className='servicedetail text-justify'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so.</p>
                                <a className='details' href="#">View Details</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
  }
}

export default Courses