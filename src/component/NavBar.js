import React from 'react'
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export const NavBar = () => {

  return (
    
      

        <><nav class="navbar navbar-expand-sm navbar-dark fixed-top ">
      <div class="container-fluid ">
        <img src="https://image1.jdomni.in/storeLogo/12082021/3B/2D/E0/A1EE351C97DE7D186F862167D6_1628770076813.png?output-format=webp" className='op' />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span class="navbar-toggler-icon"></span> */}
          <i class="fas fa-bars"></i>
        </button>


        <div class="collapse navbar-collapse" id="navbarNav">
         <Container className='glass'>
         <Row>
              <Col xs={6} md={1}>
              </Col>
              <Col xs={6} md={8} className='ui'>
                <ul class="navbar-nav">
                   <li class="nav-item a6">
                   <a class="nav-link  o" aria-current="page" href="#">HOME   </a>
                  </li>
                  <li class="nav-item a7">
                    <a class="nav-link  o" href="#aboutus">ABOUT US </a>
                  </li>
                  <li class="nav-item a8">
                    <a class="nav-link  o" href="#whyus">WHY US   </a>
                  </li>
                  <li class="nav-item a9">
                    <a class="nav-link  o" href="#contactus">CONTACT US   </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={3} >
              <ul class="navbar-nav">
                  {/* <li class="nav-item ">
                   <NavLink class="nav-link o hue" to="/login" style={{ textDecoration: "none"}}>Log In </NavLink>
                  </li>
                  <li class="nav-item ">
                    <NavLink class="nav-link o hef" to="/login">|</NavLink>
                  </li> */}
                  <li class="nav-item ">
                    <NavLink class="nav-link o hug" to="/login" >Sign Up  </NavLink>
                  </li>
                  </ul>

              </Col>
            </Row>
      </Container>
        </div>
      </div>
    </nav></>
    
  )
}
/* 
<li class="nav-item df">


            <a class="nav-link active o" href="#">Log In</a>
                   </li>
                 <li class="nav-item df">
               <a class="nav-link active o" href="#">|</a>
                </li>
            <li class="nav-item df">
                <a class="nav-link active o" href="#">Sign Up</a>
                 </li>
 */


