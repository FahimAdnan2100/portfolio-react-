import React, { Component } from 'react'
import '../../css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import port from '../../images/port2.png';
import port1 from '../../images/port3.png';
export class TopNav extends Component {

    constructor() {
        super();
        this.state = {
          navBarTitle: 'navtitle',
          navBarLogo: [port],
          navBackgroundColor: 'navbackground',
          menuItem:'menuitem',
        }
    }
    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({navBarTitle:'navtitleScroll',navBackgroundColor:'navbackgroundscroll', menuItem:'menuitemscroll',})
        } else if (window.scrollY < 100) {
            this.setState({navBarTitle:'navtitle',navBackgroundColor:'navbackground', menuItem:'menuitem',})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }
  render() {
    return (
        <Fragment>
            <Navbar className={this.state.navBackgroundColor} collapseOnSelect fixed='top' expand="lg" variant="dark">
  <Container fluid>
            <Navbar.Brand className={this.state.navBarTitle} href="#home">PORTFOLIO
              
                    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav >
                            <Nav.Link className={this.state.menuItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.menuItem} href="#deets">ABOUT</Nav.Link>
                            <Nav.Link className={this.state.menuItem} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link className={this.state.menuItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.menuItem} href="#deets">CONTACT US</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </Fragment>
    )
  }
}

export default TopNav