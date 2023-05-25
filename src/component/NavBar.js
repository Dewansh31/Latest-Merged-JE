import React from 'react'
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import { useState } from 'react';
import { useTranslation } from 'react-i18next'
  
  


export const NavBar = () => {

  // Contains the value and text for the options
const languages = [
  { value: 'en', text: "Language" },
  { value: 'en', text: "English" },
  { value: 'hi', text: "Hindi" },
  { value: 'bn', text: "Bengali" },
  { value: 'ur', text: "Urdu" }
]

   // It is a hook imported from 'react-i18next'
   const { t } = useTranslation(); 
  
   const [lang, setLang] = useState('en');
 
   // This function put query that helps to 
   // change the language
   const handleChange = e => { 
       setLang(e.target.value);
       let loc = "http://localhost:3000/";
       window.location.replace(loc + "?lng=" + e.target.value);
   }

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
                   <a class="nav-link  o" aria-current="page" href="#"> HOME  </a>
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
              <ul class="navbar-nav ui1">
                  <li class="nav-item ">
                   <NavLink class="o hue" to="/login">Log In  </NavLink>
                  </li>
                  <li class="nav-item ">
                    <NavLink class="o hef" to="/login"> | </NavLink>
                  </li>
                  <li class="nav-item ">
                    <NavLink class="o hug" to="/login" > Sign Up </NavLink>
                  </li>

                 <div style={{margin:"0 5px"}}>
                 <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value} 
                    value={item.value}>{item.text}</option>);
                })}
            </select>
                 </div>

                  </ul>

                 

              </Col >
              <Col>
               
            

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


