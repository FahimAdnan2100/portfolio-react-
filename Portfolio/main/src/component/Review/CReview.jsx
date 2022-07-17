import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class CReview extends Component {
  render() {

    var settings = {
      autoPlay: true,
      autoPlaySpeed:3000,
      dots: true,
      infinite: true,
      speed: 3000,
      arrows:false,
      vertical: true,
      verticalSwiping:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Fragment>
        <h1 className='serviceTitle text-center'>TESTIMONIAL</h1>
                <div className='button'>

                </div>
        <Container fluid className="siderback text-center" >
          <Slider {...settings}>
            <div>
                <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='reviewimg' src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1657782740~exp=1657783340~hmac=c13f894d46aff679c0fd87bbf7df97000be8db6344664d52ebb7ad371b5e17be&w=1380" alt="" />
                    
              <p className='rcardt'>Fahim Adnan</p>
              <p className='rcardtt'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.</p>
            </Col>
              </Row>
            </div>
            
            <div>
                <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='reviewimg' src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=1060&t=st=1657782988~exp=1657783588~hmac=c500ea8795c6a91696dd1d800008487e9537b6a2122fcae8fb22b788013688bc" alt="" />
                    
              <p className='rcardt'>Fahim Adnan1</p>
              <p className='rcardtt'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.</p>
            </Col>
              </Row>
            </div>
            
            <div>
                <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='reviewimg' src="https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-4087.jpg?w=1380" alt="" />
                    
              <p className='rcardt'>Fahim Adnan2</p>
              <p className='rcardtt'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.</p>
            </Col>
              </Row>
            </div>
            
            <div>
                <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='reviewimg' src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1657782740~exp=1657783340~hmac=c13f894d46aff679c0fd87bbf7df97000be8db6344664d52ebb7ad371b5e17be&w=1380" alt="" />
                    
              <p className='rcardt'>Fahim Adnan3</p>
              <p className='rcardtt'>Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.</p>
            </Col>
              </Row>
              </div>
            </Slider>
            </Container>
      </Fragment>
    )
  }
}

export default CReview