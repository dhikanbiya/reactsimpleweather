import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

const NavigationBar = () => (
    <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">React Simple App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">          
          <Nav.Item>
            <Nav.Link>
              <Link to="/city">Home</Link>
            </Nav.Link>
          </Nav.Item>         
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
    
    
    // <div>
    //             <ul>
    //                 <li><Link to="/">Jakarta</Link></li>
    //                 <li><Link to="/bandung">Bandung</Link></li>
    //                 <li><Link to="/surabaya">Surabaya</Link></li>
    //             </ul>    
//     //     </div>)
//   }
// }

export default NavigationBar;