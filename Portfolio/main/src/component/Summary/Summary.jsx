import React, { Component, Fragment } from 'react'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import '../../css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faFileText, faLaptop, faPlus} from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
class Summary extends Component {
  render() {
    return (
        <Fragment>
            <h1 className='serviceTitle text-center'>SUMMARY</h1>
                <div className='button'>

                </div>
            <Container fluid className="summarybanner p-0">
            
                <div className='summaryoverlay'>
                    <Container  className='text-center'>
                        <Row >
                            <Col lg={8} md={6} sm={12}>


                                <Row className="countsection">
                                    <Col  >
                                    <FontAwesomeIcon className='fontaa' icon={faGlobe} />
                                        <h1 className='countnum'>
                                        <CountUp start={0} end={35000}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      {/* <button onClick={0}>Start</button> */}
    </div>
  )}
                                            </CountUp>
                                            
                                            </h1>
                                        <h4 className='countname'>Student Worldwide</h4>
                                        <div className='button1'>

                </div>
                                    </Col>
                                    <Col>
                                    <FontAwesomeIcon className='fontaa' icon={faLaptop} />
                                        <h1 className='countnum'>
                                        <CountUp start={0} end={10}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      {/* <button onClick={0}>Start</button> */}
    </div>
  )}
                                            </CountUp>
                                    </h1>
                                        <h4 className='countname'>Course Published</h4>
                                        <div className='button1'>

                </div>
                                    </Col>
                                    <Col>
                                    <FontAwesomeIcon className='fontaa' icon={faFileText} />
                                        <h1 className='countnum'>
                                        <CountUp start={0} end={100000}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      {/* <button onClick={0}>Start</button> */}
    </div>
  )}
                                            </CountUp>
                                    </h1>
                                        <h4 className='countname'>Student Review</h4>
                                        <div className='button1'>

                </div>
                                    </Col>
                                    
                                    
                                </Row>

                            </Col>

                            <Col lg={4} md={6} sm={12}>
                            <Card className='workCard' style={{ width: '18rem' }}>
  
      <Card.Body>
        <Card.Title className='cardTitle' >What I Have Achived</Card.Title>
        <Card.Text>
                                            <p className='cardSubTitle text-justify'><FontAwesomeIcon className='fonta' icon={faCheckSquare} />Requirement Gathering</p>
                                            <p className='cardSubTitle text-justify'><FontAwesomeIcon className='fonta' icon={faCheckSquare} />System Analysis</p>
                                            <p className='cardSubTitle text-justify'><FontAwesomeIcon className='fonta' icon={faCheckSquare} />Coding</p>
                                            <p className='cardSubTitle text-justify'><FontAwesomeIcon className='fonta' icon={faCheckSquare} />Testing</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
                            </Col>
                        </Row>
                    </Container>
                    
                </div>
            </Container>
      </Fragment>
    )
  }
}

export default Summary