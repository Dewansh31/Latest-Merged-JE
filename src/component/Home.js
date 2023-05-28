import React,{useState,useRef} from 'react'
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next'

import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';

export const Home = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
}

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_rcjdn39', 'template_vpjo9wi', form.current, 'A03lDvvoTStlqxznW')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
    });
  }

const { t } = useTranslation();





 
  return (
    <><div className="rk22">
    <div className='bg-img1 bgm'></div>
    <Container>
      <Row>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={5}></Col>
        <Col xs={6} md={2}>
          <h1 className="rr ao">Find Your</h1>
          <p className="rr ap">SoulmateHere!</p>
          <button type='button' className='kes'> {t('Enquire Now')} </button>
        </Col>
      </Row>
    </Container>
    </div>
    <section className='hf'>
    <h1 className='a'>{t('Weddings')}</h1><div>
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://image3.jdomni.in/banner/12082021/6A/EA/5B/1E613A67473798A4B7F55C4251_1628768361873.jpg?output-format=webp" alt="" className='img2'/>
            </figure>
            <div className="article-body">
              <h2>{t('Cute Couples')} </h2>
              <p style={{textAlign:"center"}}>
                congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
              </p>
              <a href="#" className="read-more">
                Read more <span className="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>

          <div className="article-wrapper">
            <figure>
              <img src="https://image2.jdomni.in/banner/12082021/0D/64/7B/56BDD752E7B04D069F2901A60F_1628769026338.jpg?output-format=webp" alt="" className='img2'/>
            </figure>
            <div className="article-body">
              <h2> {t('Shaddi MAIN Dekho')} </h2>
              <p style={{textAlign:"center"}}>
                congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
              </p>
              <a href="#" className="read-more">
                Read more <span className="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>

          <div className="article-wrapper">
            <figure>
              <img src="https://image3.jdomni.in/banner/12082021/2B/65/38/55959E589A5BCD0967CD713FAB_1628768531605.jpg?output-format=webp" alt="" className='img2' />
            </figure>
            <div className="article-body">
              <h2> {t('Haath Thaam le')} </h2>
              <p style={{textAlign:"center"}}>
                congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
              </p>
              <a href="#" className="read-more">
                Read more <span className="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>

      </section>
      </div>
      </section>     
      <section className='kitu'>
        <h1 className='hab'>{t('Profile Picture')} </h1>
          <Slider {...settings} className='mona' >
          
            <div className="cardd-wrapper">
                <div className="cardd nao">
                    <div className="cardd-image cgg">
                        <img src="https://cfb.rabbitloader.xyz/1zr9i3lb/rls.t-nw-a28/blog/wp-content/uploads/2021/08/Sumit-and-Vani-_-New-Delhi-Wedding-_-WeddingSutra.jpg" className='cmg'/>
                    </div>
                    <ul className="social-icons">
                     
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="cardd-wrapper">
                <div className="cardd nao">
                    <div className="cardd-image cgg">
                        <img src="https://i.pinimg.com/736x/2d/71/0b/2d710b0092b4d7a79867db57a4418bf6.jpg" className='cmg'/>
                    </div>
                    <ul className="social-icons">
                  
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="cardd-wrapper">
                <div className="cardd nao">
                    <div className="cardd-image cgg">
                        <img src="https://i.pinimg.com/236x/81/8b/10/818b10cf03f1736027420fbaec28c822.jpg" className='cmg'/>
                    </div>
                    <ul className="social-icons">
                    
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="cardd-wrapper">
                <div className="cardd nao">
                    <div className="cardd-image cgg">
                        <img src="https://cdn0.weddingwire.in/article/5894/3_2/1280/jpg/84985-couple-portrait-ideas-for-your-wedding-house-on-the-clouds.webp" className='cmg'/>
                    </div>
                    <ul className="social-icons">
                    
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
        </section>
      <div class='f'>
      
      <Container>
            
            <Row>
           
              <Col xs={4}>
              
              <h1 className='my' id='aboutus'> {t('AboutUs')} </h1>
                  <p className='c'>{t('aboutustext')}</p>
              </Col>
              <Col xs={4}>
                <img src="https://image3.jdomni.in/banner/12082021/6F/9C/AC/BFA71237BD5515D4693C674052_1628765413469.jpg?output-format=webp" className='e' />
              </Col>
             
            </Row>
              
            
            
          </Container>
          </div> 
          
          <section className='noqw'>
          <div className="profile-cardd">
      <div className="container cohna">
        <h2 className="heading" id='whyus'> {t('WHY US')} </h2>

        <div className="cardd-grid">
          <div className="cardd cardd0">
            <div className="overlay">
              <div className="content">
                <h2 className='ful'>Kratos</h2>
                <p className='lul'>"From This Night Forward, The Mark Of Your Terrible Deed Will Be Visible To All. The Ashes Of Your Wife And Child Will Remain Fastened To Your Skin, Never To Be Removed."</p>
                <a className="learn-more-btn" href="#">Learn More</a>
              </div>
              <div className="icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="cardd cardd1">
            <div className="overlay">
              <div className="content">
                <h2 className='ful'>Kratos</h2>
                <p className='lul'>"From This Night Forward, The Mark Of Your Terrible Deed Will Be Visible To All. The Ashes Of Your Wife And Child Will Remain Fastened To Your Skin, Never To Be Removed."</p>
                <a className="learn-more-btn" href="#">Learn More</a>
              </div>
              <div className="icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="cardd cardd2">
            <div className="overlay">
              <div className="content">
                <h2 className='ful'>Kratos</h2>
                <p className='lul'>"From This Night Forward, The Mark Of Your Terrible Deed Will Be Visible To All. The Ashes Of Your Wife And Child Will Remain Fastened To Your Skin, Never To Be Removed."</p>
                <a className="learn-more-btn" href="#">Learn More</a>
              </div>
              <div className="icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="cardd cardd3">
            <div className="overlay">
              <div className="content">
                <h2 className='ful'>Kratos</h2>
                <p className='lul'>"From This Night Forward, The Mark Of Your Terrible Deed Will Be Visible To All. The Ashes Of Your Wife And Child Will Remain Fastened To Your Skin, Never To Be Removed."</p>
                <a className="learn-more-btn" href="#">Learn More</a>
              </div>
              <div className="icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>      
    </section>
      <section className='azs'>
      <Container>
      
      <Row>
        <Col xs={6} md={2}>
          <img src="https://image2.jdomni.in/banner/12082021/E0/B3/F0/5786DC8ACCB769F95D7B94E399_1628770413058.png?output-format=webp" className='qy12'></img>
        </Col>
        <Col xs={6} md={8} className='lk'>
        <div className="slider" >
  <input type="radio" name="toggle" id="btn-1" checked />
  <input type="radio" name="toggle" id="btn-2" />
  <input type="radio" name="toggle" id="btn-3" />

  <div className="slider-controls">
    <label for="btn-1"></label>
    <label for="btn-2"></label>
    <label for="btn-3"></label>
  </div>

  <ul className="slides">
    <li className="slide">
      <div className="slide-content">
        <h2 className="slide-title">Slide #1</h2>
        <p className="slide-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos commodi eos totam perferendis possimus dolorem, deleniti vitae harum? Enim.</p>
        <a href="#" className="slide-link">Learn more</a>
      </div>
      <p className="slide-image">
        <img src="https://image3.jdomni.in/banner/12082021/6A/EA/5B/1E613A67473798A4B7F55C4251_1628768361873.jpg?output-format=webp" alt="stuff" width="320" height="240" />
      </p>
    </li>
    <li className="slide">
      <div className="slide-content">
        <h2 className="slide-title">Slide #2</h2>
        <p className="slide-text">Nisi ratione magni ea quis animi incidunt velit voluptate dolorem enim possimus, nam provident excepturi ipsam nihil molestiae minus delectus!</p>
        <a href="#" className="slide-link">Amazing deal</a>
      </div>
      <p className="slide-image">
        <img src="https://image2.jdomni.in/banner/12082021/0D/64/7B/56BDD752E7B04D069F2901A60F_1628769026338.jpg?output-format=webp" alt="stuff" width="320" height="240" />
      </p>
    </li>
    <li className="slide">
      <div className="slide-content">
        <h2 className="slide-title">Slide #3</h2>
        <p className="slide-text">Quisquam quod ut quasi, vero obcaecati laudantium asperiores corporis ad atque. Expedita fugit dicta maxime vel doloribus sequi, facilis dignissimos.</p>
        <a href="#" className="slide-link">Get started</a>
      </div>
      <p className="slide-image">
        <img src="https://image3.jdomni.in/banner/12082021/2B/65/38/55959E589A5BCD0967CD713FAB_1628768531605.jpg?output-format=webp" alt="stuff" width="320" height="240" />
      </p>
    </li>
  </ul>
</div>

        </Col>
        
      </Row>
      </Container>
      </section>
      <section className='chita gang'>
      <h1 className='aj' id='contactus'>{t('Contact Us')} </h1>
      <div className="wra">
        <div className="container mai">
            <div className="row ng">
                <div className="col-md-6 side-images">
                    
                    <img src="" alt=""  className='k12'/>
                   
                </div>
                <div className="col-md-6 right">
                     {/* <div className="input-box55">
                        <header className='rko'>{t('Contact Us')}</header>
                        <div className="input-field">
                            <input type="text" className="input" id="text" required autocomplete="off" />
                            <label for="text">{t('Full Name')}</label>
                        </div>
                        <div className="input-field">
                            <input type="text" className="input" id="email" required autocomplete="off" />
                            <label for="email"> {t('Email')} </label>
                        </div>
                        <div className="input-field">
                            <input type="password" className="input" id="phone" required  autocomplete="off"/>
                            <label for="number"> {t('Phone Number')} </label>
                        </div>
                        <div className="input-field">
                        <textarea className="input" id="exampleFormControlTextarea1" required  autocomplete="off" row="3" />
                            <label for="text">{t('Message')} </label>
                        </div>
                      
                        <div className="input-field">
                            <input type="submit" className="submit" value={t('Send')} />
                            
                        </div>
                       
                     </div> */}

<form ref={form} onSubmit={sendEmail}>
                     <div className="input-box55">
                        <header className='rko'>Contact Us</header>
                        <div className="input-field">
                            <input type="text" className="input" id="text" required autocomplete="off" name="user_name" />
                            <label for="text">{t('Full Name')}</label>
                        </div>
                        <div className="input-field">
                            <input type="text" className="input" id="email" required autocomplete="off" name="user_email"/>
                            <label for="email">{t('Email')} </label>
                        </div>
                        <div className="input-field">
                            <input type="password" className="input" id="phone" required  autocomplete="off" name="user_phone"/>
                            <label for="number">{t('Phone Number')}</label>
                        </div>
                        <div className="input-field">
                        <textarea className="input" id="exampleFormControlTextarea1" required  autocomplete="off" row="3" name="message" />
                            <label for="text">{t('Message')}</label>
                        </div>
                      
                        <div className="input-field">
                            <input type="submit" className="submit" value={t('Send')} />
                            
                        </div>
                       
                     </div>
                     </form>
                </div>
            </div>
        </div>
    </div>
    </section>
    <section className='azs1' > 
      <Container>
       <Row>
         <Col xs={6} md={6} className='kya'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.37817780316!2d81.2680340411497!3d21.195413475014337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1680533759389!5m2!1sen!2sin" width="630" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='ha'></iframe>
         </Col>
         <Col xs={6} md={4} className='maa'> 
         
           <img src="https://image3.jdomni.in/banner/12082021/E0/EE/48/F434FFCF08C37D2430AE411D63_1628769844054.png?output-format=webp" className='kg'/>
           <p className="yow">{t('Our Office Address')}</p>
         <p className="yov">Malad West, Mumbai, Maharashtra </p>
         <img src="https://image3.jdomni.in/banner/12082021/33/C9/A3/B63D8D159012818287F3F730A6_1628769868105.png?output-format=webp" className='kg1'/>
           <p className="yow1">{t('General Enquiries')} </p>
         <p className="yov1">contact@mysites.com</p>
         <img src="https://image2.jdomni.in/banner/12082021/D3/E0/4E/B72756E4920FAB8B4C2D054AEF_1628769879094.png?output-format=webp" className='kg2'/>
           <p className="yow2">{t('Call Us')}</p>
         <p className="yov2">+91-8888888888</p>
           <img src="https://image3.jdomni.in/banner/12082021/07/E1/76/11D3452A730382447A5B725399_1628769889180.png?output-format=webp" className='kg3'/>
           <p className="yow3">{t('Our Timing')} </p>
         <p className="yov3">Mon - Sun : 09:00 AM - 09:00 PM</p>
          
           
         </Col>
         <Col xs={6} md={2} > 
         </Col>
         
       </Row>
      </Container>
      </section>
     
    </>
    
  )
}
/*<h1 className='aj'>Contact Us</h1>
<section className='as'>
<Container>

<Row>
  <Col><input type="text" className="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
  <Col><input type="text" className="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
  <Col><input type="text" className="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
</Row>
<br></br>
<Row>
<Col className='ac'><input type="text" className="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
</Row>

<Row>
<Col></Col>

<Col className="dc"> <button type='button' className='wes'>Submit   Now</button></Col>
<Col></Col>
</Row>
</Container>
</section>
<section className='azs' > 
<Container>
<Row>
  <Col xs={6} md={6} className='kya'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.37817780316!2d81.2680340411497!3d21.195413475014337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1680533759389!5m2!1sen!2sin" width="630" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </Col>
  <Col xs={6} md={4} className='maa'> 
  
    <img src="https://image3.jdomni.in/banner/12082021/E0/EE/48/F434FFCF08C37D2430AE411D63_1628769844054.png?output-format=webp" className='kg'/>
    <p className="yow">Our Office Address</p>
  <p className="yov">Malad West, Mumbai, Maharashtra </p>
  <img src="https://image3.jdomni.in/banner/12082021/33/C9/A3/B63D8D159012818287F3F730A6_1628769868105.png?output-format=webp" className='kg1'/>
    <p className="yow1">General Enquiries</p>
  <p className="yov1">contact@mysites.com</p>
  <img src="https://image2.jdomni.in/banner/12082021/D3/E0/4E/B72756E4920FAB8B4C2D054AEF_1628769879094.png?output-format=webp" className='kg2'/>
    <p className="yow2">Call Us</p>
  <p className="yov2">+91-8888888888</p>
    <img src="https://image3.jdomni.in/banner/12082021/07/E1/76/11D3452A730382447A5B725399_1628769889180.png?output-format=webp" className='kg3'/>
    <p className="yow3">Our Timing</p>
  <p className="yov3">Mon - Sun : 09:00 AM - 09:00 PM</p>
   
    
  </Col>
  <Col xs={6} md={2} > 
  </Col>
  
</Row>
</Container>
</section>
</>

)
}*/
/*<h1 className='aj'>Contact Us</h1>
<section className='as'>
<Container>

<Row className='jh'>
  <Col><input type="text" className="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
  <Col><input type="text" className="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
  <Col><input type="text" className="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
</Row>
<br></br>
<Row className="jh">
<Col className='ac'><input type="text" className="form-control form-control cust-placeholder" placeholder="Full Name" maxlength="50" /> </Col>
</Row>

<Row>
<Col></Col>

<Col className="dc"> <button type='button' className='wes'>Submit   Now</button></Col>
<Col></Col>
</Row>
</Container>
</section>*/
/*   <h1 className='az'>WHY US</h1>
    <section className='ads'>
            
    <div className='rah'>
        <Container>
    <Row>
        
        <Col xs={6} md={3} className='su1' >
            <img src="https://image3.jdomni.in/banner/12082021/E5/75/BF/5586237B79243FA3BD7A4ED252_1628766829674.png?output-format=webp" className='g'/>
           <h5 className="k">Database of Millions of Members</h5>
           <p className='aq'>We have a wide choice from all the communities and a large NRI database so you can find your life partner with the assistance of the world's largest matchmaking service.</p>
        </Col>
        <Col xs={6} md={3} className='su2'  >
        <img src="https://image3.jdomni.in/banner/12082021/3F/8A/79/AC839B02B0E136437670B39F4C_1628767796054.png?output-format=webp" className='h'/>
        <h5 className="k">Strict Profile Screening System</h5>
         <p className='aq'>Our CRM team is committed to ensure that every profile put up in our database is screened to ensure you continue to have a smooth partner search experience.</p>
        </Col>
        <Col xs={6} md={3} className='su3'  >
        <img src="https://image2.jdomni.in/banner/12082021/34/67/EC/4FFB40B3124C9E9C7726EA3AF3_1628767233403.png?output-format=webp" className='i'/>
          <h5 className="k">State of Art Search Technology</h5>
          <p className='aq'>Our customization, filtering, and blocking systems strive to build technology that will only bring you matches that are relevant to you.</p>
        </Col>
        <Col xs={6} md={3} className='su4' >
        <img src="https://image3.jdomni.in/banner/12082021/E1/04/31/B08C83F39F41BDECEE1F18F89A_1628767328182.png?output-format=webp" className='n'/>
        <h5 className="k">Total Privacy Control</h5>
        <p className='aq'>Safety and privacy, of the member is top priority. Being a certified matchmaking portal we let you decide who to give your contact information to.</p>
        </Col>
        
      </Row>
      </Container>
      </div>
      </section>  */
     /* <section className='azs' > 
      <Container>
       <Row>
         <Col xs={6} md={6} className='kya'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.37817780316!2d81.2680340411497!3d21.195413475014337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1680533759389!5m2!1sen!2sin" width="630" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='ha'></iframe>
         </Col>
         <Col xs={6} md={4} className='maa'> 
         
           <img src="https://image3.jdomni.in/banner/12082021/E0/EE/48/F434FFCF08C37D2430AE411D63_1628769844054.png?output-format=webp" className='kg'/>
           <p className="yow">Our Office Address</p>
         <p className="yov">Malad West, Mumbai, Maharashtra </p>
         <img src="https://image3.jdomni.in/banner/12082021/33/C9/A3/B63D8D159012818287F3F730A6_1628769868105.png?output-format=webp" className='kg1'/>
           <p className="yow1">General Enquiries</p>
         <p className="yov1">contact@mysites.com</p>
         <img src="https://image2.jdomni.in/banner/12082021/D3/E0/4E/B72756E4920FAB8B4C2D054AEF_1628769879094.png?output-format=webp" className='kg2'/>
           <p className="yow2">Call Us</p>
         <p className="yov2">+91-8888888888</p>
           <img src="https://image3.jdomni.in/banner/12082021/07/E1/76/11D3452A730382447A5B725399_1628769889180.png?output-format=webp" className='kg3'/>
           <p className="yow3">Our Timing</p>
         <p className="yov3">Mon - Sun : 09:00 AM - 09:00 PM</p>
          
           
         </Col>
         <Col xs={6} md={2} > 
         </Col>
         
       </Row>
      </Container>
      </section>*/