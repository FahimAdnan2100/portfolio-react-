import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import '../../css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class RecentProjects extends Component {
  render() {
      return (
        
          <Fragment>
              
              <Container className='text-center ' >
                  <h1 className='serviceTitle '>RECENT PROJECTS</h1>
                <div className='button'>

                </div>
                <Row className='cardcon'>
                    <Col lg={4} md={6} sm={12}>
                        <Card className='cardrecen'>
                            
      <Card.Img  variant="top" src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1657782740~exp=1657783340~hmac=c13f894d46aff679c0fd87bbf7df97000be8db6344664d52ebb7ad371b5e17be&w=1380" />
      <Card.Body>
        <Card.Title ><p className='cardt'>Machine Learning</p> </Card.Title>
        <Card.Text>
          <p className='cardtt'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.</p>
        </Card.Text>
        <Button variant="primary">Visit Website</Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <Card className='cardrecen'>
                            
                            <Card.Img variant="top" src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=1060&t=st=1657782988~exp=1657783588~hmac=c500ea8795c6a91696dd1d800008487e9537b6a2122fcae8fb22b788013688bc" />
                            <Card.Body>
                              <Card.Title><p className='cardt'>Artificail Intelligence</p></Card.Title>
                              <Card.Text>
                              <p className='cardtt'>Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.</p>
                              </Card.Text>
                              <Button variant="primary">Visit Website</Button>
                            </Card.Body>
                          </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <Card className='cardrecen'>
                            
                            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-4087.jpg?w=1380" />
                            <Card.Body>
                              <Card.Title><p className='cardt'>Deep Learning</p></Card.Title>
                              <Card.Text>
                              <p className='cardtt'>Deep learning is a subset of machine learning, which is essentially a neural network with three or more layers. These neural networks attempt to simulate the behavior of the human brain—albeit far from matching its ability—allowing it to “learn” from large amounts of data.</p>
                              </Card.Text>
                              <Button variant="primary">Visit Website</Button>
                            </Card.Body>
                          </Card>
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
  }
}

export default RecentProjects