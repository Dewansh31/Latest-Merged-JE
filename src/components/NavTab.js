import React from 'react';
import './Tab.css'
import Profile from '../Profile'
import EducationDetails from '../EducationDetails'
import FamilyDetails from '../FamilyDetails'
import ProfessionalDetails from '../ProfessionalDetails'
import BackgroundDetails from '../BackgroundDetails'
import Sidebar from '../Sidebar';
import ImgSection from '../ImgSection';


const NavTab = (props) => {
  return (
    <>

    <Sidebar username={props.name}/>
    
   <div className='cont' style={{padding:"150px 0px"}}>
  {/* <h1>
    
  </h1> */}
  <main className='mainT' >
    <input className="inp" id="tab1" type="radio" name="tabs" defaultChecked />
    <label htmlFor="tab1" className='label1'>1</label>
    <input className="inp" id="tab2" type="radio" name="tabs" />
    <label htmlFor="tab2" className='label1'>2</label>
    <input className="inp" id="tab3" type="radio" name="tabs" />
    <label htmlFor="tab3" className='label1'>3</label>
    <input className="inp" id="tab4" type="radio" name="tabs" />
    <label htmlFor="tab4" className='label1'>4</label>
    <input className="inp" id="tab5" type="radio" name="tabs" />
    <label htmlFor="tab5" className='label1'>5</label>
    {/* <input className="inp" id="tab6" type="radio" name="tabs" />
    <label htmlFor="tab6" className='label1'>6</label> */}


    <section id="content1" className='section1'>
    <Profile/>
    </section>
    <section id="content2" className='section1'>
    <EducationDetails/>
    </section>
    <section id="content3" className='section1'>
    <ProfessionalDetails/>
    </section>
    <section id="content4" className='section1'>
    <FamilyDetails/>
    </section>
    <section id="content5" className='section1'>
    <BackgroundDetails/>
    </section>
    {/* <section id="content6" className='section1'>
      <ImgSection/>
    </section> */}
    
  </main>
</div>


    </>


  )
}

export default NavTab;