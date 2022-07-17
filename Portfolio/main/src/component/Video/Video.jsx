import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import '../../css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player'
import { VideoPlayer, EVideoType } from "@wbe/react-video-player";


class Video extends Component {

    constructor() {
        super();
        this.state = {
            show:false
        }
}
    modalClose = () => this.setState({ show: false })
    modalOpen = ()=> this.setState({ show: true })

  render() {
    return (
        <Fragment >
            <Container className='text-center'>
            <h1 className='serviceTitle '>OURS  VIDEOS</h1>
                <div className='button'>

                </div>
                <Row>
                    <Col lg={6} md={6} sm={12} className="videoText">
                        <p className='cardtt text-justify'>The goal of machine learning technology is to optimize the performance of a system when handling new instances of data through user defined programming logic for a given environment.
To accomplish this goal effectively and efficiently, machine learning draws heavily on statistics and computer science. Statistical methods provide machine learning algorithms ways to infer conclusions from data.

Computer science methods, on the other hand, give machine learning algorithms (MLAs) the computing power to solve problems, including useful large-scale computational architectures and algorithms for capturing, manipulating, indexing, combining and performing predictions with data. The objective of the present research work is to make the reader understand the importance of MLAs in daily life.</p>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="videocard">
<FontAwesomeIcon onClick={this.modalOpen} className='fontaa' icon={faVideoSlash} />



                    </Col>
                </Row>
            </Container>

            <Modal size="lg" className="text-center" show={this.state.show} onHide={this.modalClose}>
       
                <Modal.Body >
                    <ReactPlayer  url='https://www.youtube.com/watch?v=cK4iAjzAoas' />
                    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      </Fragment>
    )
  }
}

export default Video