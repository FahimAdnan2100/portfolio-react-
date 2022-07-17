import React, { Component, Fragment } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { init } from 'ityped'
class AbouteMe extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Web Developer!', 'Data Scientist' ] })
      }
  render() {
    return (
        <Fragment>
            <h1 className='serviceTitle text-center'>ABOUT ME</h1>
                <div className='button'>

                </div>
            <Container className='text-center'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <img className='aboutImg' src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1657782740~exp=1657783340~hmac=c13f894d46aff679c0fd87bbf7df97000be8db6344664d52ebb7ad371b5e17be&w=1380" alt="" />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='aboutme'>
                            <h1 className='aboutmeTitle'>HI There,I'm</h1>
                            <h2 className='aboutmeName'>Fahim Adnan</h2>
                            <h3 className='aboutmeDes'>Work as <span id='myElement'></span></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
  }
}

export default AbouteMe