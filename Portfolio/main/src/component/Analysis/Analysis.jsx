import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BarChart, Bar,  ResponsiveContainer,XAxis,YAxis,Tooltip } from 'recharts';
class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                { Technology: 'PHP', projects: 100 },
                { Technology: 'REACT', projects: 80 },
                { Technology: 'MYSQL', projects: 70 },
                { Technology: 'LARAVEL', projects: 80 },
                { Technology: 'HTML', projects: 100 },
                { Technology: 'VUE JS', projects: 60 },
                { Technology: 'DJANGO', projects: 50 },

            ]
        }
    }



    render() {
      
        var blue = "#051b35";

    return (
        <Fragment>
            <Container fluid >
            <h1 className='serviceTitle text-center'>TECHNOLOGY USED</h1>
                <div className='button'>

                </div>
                <Row>
                    <Col  lg={6} md={12} sm={12}>
                        <ResponsiveContainer width="100%" height="100%">
                        
                            
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey='Technology' />
                                
                                <Tooltip/>
                        <Bar dataKey="projects" fill={blue} />
</BarChart>
                        </ResponsiveContainer>
                        
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                    <p className='text-justify'>The goal of machine learning technology is to optimize the performance of a system when handling new instances of data through user defined programming logic for a given environment.<br></br> To accomplish this goal effectively and efficiently, machine learning draws heavily on statistics and computer science. Statistical methods provide machine learning algorithms ways to infer conclusions from data.<br></br><br></br> Computer science methods, on the other hand, give machine learning algorithms (MLAs) the computing power to solve problems, including useful large-scale computational architectures and algorithms for capturing, manipulating, indexing, combining and performing predictions with data. The objective of the present research work is to make the reader understand the importance of MLAs in daily life.<br></br><br></br> This will help the readers get familiar with applying MLAs when addressing classification and regression problems. The evaluation parameter used in rating the performance of a regression algorithm is the mean squared error (MSE), whereas, for rating the performance of a classification algorithm, we utilized precision, recall, and F-score as evaluation metrics, which are constructed using a confusion matrix. Additionally, the possible directions in evaluating the performance of both regression and classification models are analyzed using 15 evaluation parameters. The finding in our research is that machine learning algorithms can be applied to analyze the data to extract the hidden patterns from it, which in turns helps in effective decision making.</p>
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
  }
}

export default Analysis