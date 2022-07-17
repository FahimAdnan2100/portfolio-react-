import React, { Component, Fragment } from 'react';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';

class Topbar extends Component {
  render() {
      return (
        <Fragment>
            <Container fluid className="TopbarBackground p-0">
                <div className='TopBannerOverlay'>
                    <Container className='topContent'>
                        <Row >
                            <Col className='text-center'>
                                <h1 className='topTitle'>Automatic System</h1>
                                <h4 className='learn'>Learn Profesionally</h4>
                                <Button variant='primary'>Learn More</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </Fragment>
        
    )
  }
}

export default Topbar