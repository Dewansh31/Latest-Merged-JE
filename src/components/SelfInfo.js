import React, { useState,useEffect } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import Sidebar from '../Sidebar';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from '../firebase';
import { getAuth } from "firebase/auth";
import './selfInfo.css'
import { Link, NavLink } from 'react-router-dom';
import Spinner from '../Spinner';

const firestore = getFirestore(app)

const SelfInfo = (props) => {

    const [fullscreenXlModal, setFullscreenXlModal] = useState(true);
    const [selected, setSelected] = useState("");
    const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);





    
  const getData = async()=>{

    
    const auth = getAuth();
    const user = auth.currentUser;

    const docRef = doc (firestore,`users`,`${user.displayName}`);
    const docSnap = await getDoc(docRef);
    const sdata = docSnap.data();
    setSelected(sdata)


  }




    
    useEffect(() => {
        getData();
     // eslint-disable-next-line
   }, []);

  
    return (
      <>

        <Sidebar username={props.name}/>

       
            <div >
            

    <div className="page-header header" style={{padding:"0 0 0 0",position:"relative"}}>

            <h3 style={{padding:"10px 50px ",margin:"auto"}}>My Profile</h3>
       
      </div>

            </div>
             
              <MDBModalBody className='selfInfoBody' >

            
                
              <div>
      <div className="container rounded bg-white mt-5 mb-5 ">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                className="rounded-circle mt-5"
                width="150px"
                alt='img'
                src={selected.url}
                // src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{selected.username}</span>
              <span className="text-black-50">{selected.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-4 border-right">
            <div className="p-2 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>Basic Details</h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Full Name: {selected.fullName}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>DOB : {selected.dob}</h6>
                  
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Birth Place: {selected.pob}</h6>
                 
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Gender: {selected.gender}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Phone Number: {selected.contact}</h6>
                  
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Height: {selected.height}</h6>
                  
                </div> 
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>Eductional Details</h5></u>
              </div>
              <div className="row mt-2">

              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}>Higher Education</h6></u>
              </div>

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>College Name : {selected.collegeName}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Year Of Passing: {selected.yop}</h6>
                
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Degree: {selected.degree}</h6>
                 
                </div> 

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Percent: {selected.percent}</h6>
                 
                </div>  

                <hr/>

                <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}>Higher Secondary</h6></u>
              </div>

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>School Name : {selected.school12}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Year Of Passing: {selected.yop12}</h6>
                
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Board: {selected.board12}</h6>
                 
                </div> 

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Percent: {selected.percent12}</h6>
                 
                </div> 

                <hr/>

                <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}>High school</h6></u>
              </div>

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>School Name : {selected.school10}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Year Of Passing: {selected.yop10}</h6>
                
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Board: {selected.board10}</h6>
                 
                </div> 

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Percent: {selected.percent10}</h6>
                 
                </div> 

              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>Professional Details</h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>workplace: {selected.workplace}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Annual Income: {selected.income}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Phone Number: {selected.contact}</h6>
                  
                </div>  
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> Employed In: {selected.currentcompany}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> Emp. From: {selected.from}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Position: {selected.position}</h6>
                  
                </div>  



              </div>
              
              
             
            </div>
          </div>
          <div className="col-md-5">
            <div className="p-2 py-2">
              <div className="d-flex justify-content-between align-items-center experience">
                <u><h5 style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}><span>Background Details</span></h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Religion: {selected.religion}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}} >Caste: {selected.caste}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Sub Caste: {selected.subcaste}</h6>
                  
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Rashi: {selected.rashi}</h6>
                
                </div>

                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Manglik status: {selected.manglikstatus}</h6>
                
                </div>

                <div className="d-flex justify-content-between align-items-center experience mt-3">
                <u><h5 style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}><span>Family Details</span></h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Father Name: {selected.fathersName}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Mother Name: {selected.mothersName}</h6>
                 
                </div>

                {(selected.fatheremploymentstatus == "Employed")?
                   
                   <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Father Occupation:{selected.fatherOccupation}</h6>
                
                </div>
                :
                <></>
                }

                              
              {(selected.motheremploymentstatus == "Employed")?
              <div className="col-md-6">
              <h6 style={{fontFamily:"Palatino"}}>Mother Occupation: {selected.motherOccupation}</h6>
              
             </div>
              :
              <></>

              }

                

     

                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {(selected.fatheremploymentstatus == "Employed")? "Father Income:":"Father Pension:"}{selected.fatherincome}</h6>
                
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>  {(selected.motheremploymentstatus == "Employed")?"Mother Income:":"Mother Pension:"}  {selected.motherincome}</h6>
                 
                </div>

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Father status:{selected.fatheremploymentstatus}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Mother status: {selected.motheremploymentstatus}</h6>
                 
                </div>
                </div>

                {/* <div className="row mt-2">
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Father Name: {selected.fathersName}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Mother Name: {selected.mothersName}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Father Occupation:{selected.fatherOccupation}</h6>
                
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Mother Occupation: {selected.motherOccupation}</h6>
                 
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Family Type:{selected.familyType}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Family Lives: {selected.familyLives}</h6>
                 
                </div>
                </div> */}

<div className="d-flex justify-content-between align-items-center mt-3">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>Employment History</h5></u>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}>Past Company 1</h6></u>
              </div>


                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Company : {selected.recentcompany1}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>position: {selected.position1}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>From: {selected.from1}</h6>
                  
                </div>  
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>To: {selected.to1}</h6>
                  
                </div>  

                <hr/>
                <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}>Past Company 2</h6></u>
              </div>

                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Company : {selected.recentcompany2}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>position: {selected.position2}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>From: {selected.from2}</h6>
                  
                </div>  
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>To: {selected.to2}</h6>
                  
                </div>  


              
                
                </div>
            </div>

           
            
          </div>

          

        </div>
       

      </div>

      
    
    </div>
   

              </MDBModalBody>
              <MDBModalFooter>
                
              <Link type="button" class="btn btn-primary" to="/profile">Update Details</Link>
              </MDBModalFooter>
           
          

      </>
    );
}

export default SelfInfo