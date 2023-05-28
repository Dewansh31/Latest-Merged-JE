import React from 'react'
import './Footer.css';
export const Footer = () => {
  return (
    <div className='sd'>
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-xs-12">
                    <div className="first">
                        <h4>My Skills</h4>
                        <p> Analytical Skills</p>
                        <p> Problem-solving skills</p>
                        <p> Critical-thinking skills</p>
                        <p> Detail-oriented</p>
                        <p> Multitasking</p>
                        <p> Self-motivated</p>
                    </div>
                </div>

                <div className="col-md-4 col-xs-12">
                    <div className="second">
                        <h4> Navigate</h4>
                        <ul>
                            <li ><a href="#" className='xs1'>Home</a></li>
                            <li><a href="#"  className='xs1'>Projects</a></li>
                            <li ><a href="#"  className='xs1'>About</a></li>
                            <li ><a href="#"  className='xs1'>Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-4 col-xs-12">
                    <div className="third">
                        <h4> Contact</h4>
                        <ul>
                            <li className='xs'>Andreea Mihaela Bunget </li>
                            <li></li>


                          <li className='xs'><i className="far fa-envelope"></i> andreea@andreeabunget.co.uk</li>
                            <li className='xs'><i className="far fa-envelope"></i> email@yahoo.com</li>


                          <li><i className="fas fa-map-marker-alt xs" > London, UK</i>  </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="line"></div>
                    <div className="second2">
                        <a href="https://codepen.io/AndreeaBunget" target="_blank"> <i className="fab fa-codepen fa-2x margin"></i></a>
                        <a href="https://github.com/WebDeveloperCodeRep" target="_blank"> <i className="fab fa-github fa-2x margin"></i></a>
                        <a href="https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/" target="_blank"> <i className="fab fa-linkedin fa-2x margin"></i></a>
                        <a href="https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber" target="_blank"><i className="fab fa-youtube fa-2x margin" ></i></a>

                    </div>

                </div>
            </div>
            </div>
    </div>
   

    </div>
  )
}

