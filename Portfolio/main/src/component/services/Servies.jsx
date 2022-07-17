import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import library from '../../images/library.jpg'
import house from '../../images/house.jpg'
import automatic from '../../images/automatic.png'
export class Servies extends Component {
  render() {
    return (
        <Fragment  >
            <Container className='text-center' >
                <h1 className='serviceTitle'>MY SERVICES</h1>
                <div className='button'>

                </div>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className='libraryCard'>
                            <img className='library' src={library} />
                            <h2 className='servicename'>Online Library Mangement System</h2>
                            <p className='servicedetail'>Online Library Management System is an Automated Library System that handles the various functions of the library.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <div className='libraryCard'>
                            <img className='house' src={house}/>
                            <h2 className='servicename'>Dhaka House Rent Price Prediction</h2>
                            <p className='servicedetail'>Traditional house price prediction is based on cost and sale price comparison lacking of an accepted standard and a certification process.</p>
                        
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <div className='libraryCard'>
                            <img className='automatic' src={automatic}/>
                            <h2 className='servicename'>Automatic Attendance System</h2>
                            <p className='servicedetail'>An automatic attendance system is an educational ERP system that records the students' attendance in an institution.</p>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
  }
}

export default Servies