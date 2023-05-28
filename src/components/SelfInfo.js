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
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { useTranslation } from 'react-i18next'

const firestore = getFirestore(app);
const storageRef = ref(storage);




const SelfInfo = (props) => {

    const [fullscreenXlModal, setFullscreenXlModal] = useState(true);
    const [selected, setSelected] = useState("");
    const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
    const [show, setShow] = useState(false);
    const [toggleOneModal, setToggleOneModal] = useState(false);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState();


    const { t } = useTranslation();

    
  const t1 = "Father's Income";
  const t2 = "Father's Pension";
  const t3 = "Mother's Income";
  const t4 = "Mother's Pension";
    
  const auth = getAuth();
  const user = auth.currentUser;
  

  const writeData =  async (e) =>{
    e.preventDefault();

    const docRef = doc (firestore,`users`,`${user.uid}`);

    if (imageUpload == null) return;

    const imageRef = ref(storage, `${user.uid}/images`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        console.log(url);
        
    });

   
    

});

      
        await updateDoc(docRef,  {
            url:imageUrl
          })

          setShow(true)
  

   }


    
  const getData = async()=>{

    
    const auth = getAuth();
    const user = auth.currentUser;

    const docRef = doc (firestore,`users`,`${user.uid}`);
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

            <h3 style={{padding:"10px 50px ",margin:"auto"}}> {t('My Profile')}</h3>
       
      </div>

            </div>
             
              <MDBModalBody className='selfInfoBody' >

            
                
              <div>
      <div className="container rounded bg-white mt-5 mb-5 ">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center">

              {  (selected.url) ?

                        (<img
                        className="dp"
                        width="150px"
                        alt='img'
                        src= {selected.url}
                        />):(

                          <img
                          className="dp"
                          width="150px"
                          alt='img'
                          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        />  

                        )

              }
              


                  

                              <button
                                  className="btn btn-success btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                  onClick={() => setToggleOneModal(!toggleOneModal)}
                                >
                                  <i className="fa fa-edit"></i>
                                </button>

                                <MDBModal show={toggleOneModal} setShow={setToggleOneModal} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Upload Profile Image</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setToggleOneModal(!toggleOneModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <div className="formcontainer">
<div className="title">Profile Image</div>
<div className="content33">
 <form action="#">
   <div className="user-details">
  
   <input type="file"  onChange={(event) => {
          setImageUpload(event.target.files[0]);
          }} />

          


   </div>
   <div className="button">
     {/* <input type="submit" value="Upload DP" onClick={writeData}/> */}
     <MDBBtn className='mx-2' color='danger' onClick={writeData}>
        Upload
      </MDBBtn>
     
     <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
     <h5>Profile Image updated successfully!</h5>
     
     <hr />
     <div className="d-flex justify-content-end">
       <Button onClick={() => setShow(false)} variant="outline-success">
         Close
       </Button>
     </div>
   </Alert>
   </div>
 </form>
</div>
</div>
            </MDBModalBody>
            <MDBModalFooter>
              {/* <MDBBtn
                onClick={() => {
                  setToggleOneModal(!toggleOneModal);
                  setTimeout(() => {
                    setToggleTwoModal(!toggleTwoModal);
                  }, 400);
                }}
              > */}
                {/* Open second modal
              </MDBBtn> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

                                
              <span className="font-weight-bold">{selected.username}</span>
              <span className="text-black-50">{selected.email}</span>
              <span> </span>
            </div>
          </div>
          {/* <div className="col-md-4 border-right">
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

           
            
          </div> */}

<div className="col-md-4 border-right">
            <div className="p-2 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>{t('Basic Details')}</h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('Full Name')} : {selected.fullName}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('DOB')} : {selected.dob}</h6>
                  
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>{t('Birth Place')}: {selected.pob}</h6>
                 
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>{t('Gender')}: {selected.gender}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {t('Phone Number')}: {selected.contact}</h6>
                  
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}> {t('Height')}: {selected.height}</h6>
                  
                </div> 
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>{t('Eductional Details')}</h5></u>
              </div>
              <div className="row mt-2">

              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}> {t('Higher Education')} </h6></u>
              </div>

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}> {t('College Name')} : {selected.collegeName}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('Year Of Passing')}: {selected.yop}</h6>
                
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}> {t('Qualification')} : {selected.degree}</h6>
                 
                </div> 

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}> {t('Result')}({t('Percent')} ) : {selected.percent}</h6>
                 
                </div>  

                <hr/>

                <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}> {t('Higher Secondary')} </h6></u>
              </div>

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}> {t('School Name')} : {selected.school12}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('Year Of Passing')}: {selected.yop12}</h6>
                
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}> {t('Board of Exam')}: {selected.board12}</h6>
                 
                </div> 

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>{t('Result')}({t('Percent')} ): {selected.percent12}</h6>
                 
                </div> 

                <hr/>

                <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}> {t('High school')}</h6></u>
              </div>

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>{t('School Name')}: {selected.school10}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>{t('Year Of Passing')}: {selected.yop10}</h6>
                
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>{t('Board of Exam')}: {selected.board10}</h6>
                 
                </div> 

                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>{t('Result')}({t('Percent')} ): {selected.percent10}</h6>
                 
                </div> 

              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}> {t('Professional Details')}</h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('workplace')}: {selected.workplace}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('Annual Income')}: {selected.income}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>{t('Phone Number')}: {selected.contact}</h6>
                  
                </div>  
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('Company')}: {selected.currentcompany}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('Employed From')}: {selected.from}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>{t('Position')}: {selected.position}</h6>
                  
                </div>  



              </div>
              
              
             
            </div>
          </div>
          <div className="col-md-5">
            <div className="p-2 py-2">
              <div className="d-flex justify-content-between align-items-center experience">
                <u><h5 style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}><span>{t('Background Details')}</span></h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {t('Religion')}: {selected.religion}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}} > {t('Caste')}: {selected.caste}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('Sub Caste')}: {selected.subcaste}</h6>
                  
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {t('Rashi')}: {selected.rashi}</h6>
                
                </div>

                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {t('Manglik status')}: {selected.manglikstatus}</h6>
                
                </div>

                <div className="d-flex justify-content-between align-items-center experience mt-3">
                <u><h5 style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}><span> {t('Family Details')}</span></h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {t(`Father's Name`)}: {selected.fathersName}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t(`Mother's Name`)}: {selected.mothersName}</h6>
                 
                </div>
                {/* <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Father Occupation:{selected.fatherOccupation}</h6>
                
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Mother Occupation: {selected.motherOccupation}</h6>
                 
                </div>

                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Father Income:{selected.fatherincome}</h6>
                
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Mother Income: {selected.motherincome}</h6>
                 
                </div> */}

{(selected.fatheremploymentstatus == "Employed")?
                   
                   <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {t(`Father's Occupation`)}:{selected.fatherOccupation}</h6>
                
                </div>
                :
                <></>
                }

                              
              {(selected.motheremploymentstatus == "Employed")?
              <div className="col-md-6">
              <h6 style={{fontFamily:"Palatino"}}> {t(`Mother's Occupation`)}: {selected.motherOccupation}</h6>
              
             </div>
              :
              <></>

              }

                

     

                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {(selected.fatheremploymentstatus == "Employed")?  t(t1)  : t(t2) } : {selected.fatherincome}</h6>
                
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>  {(selected.motheremploymentstatus == "Employed")? t(t3)  : t(t4) } : {selected.motherincome}</h6>
                 
                </div>



                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}> {t(`Father's status`)}:{selected.fatheremploymentstatus}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t(`Mother's status`)}: {selected.motheremploymentstatus}</h6>
                 
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
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>{t('Employment History')}</h5></u>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}> {t('Past Company')} 1</h6></u>
              </div>


                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>{t('Company')} : {selected.recentcompany1}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}> {t('position')}: {selected.position1}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {t('From')}: {selected.from1}</h6>
                  
                </div>  
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}> {t('To')}: {selected.to1}</h6>
                  
                </div>  

                <hr/>
                <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h6 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"green"}}>{t('Past Company')} 2</h6></u>
              </div>

                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>{t('Company')} : {selected.recentcompany2}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>{t('position')}: {selected.position2}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>{t('From')}: {selected.from2}</h6>
                  
                </div>  
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>{t('To')}: {selected.to2}</h6>
                  
                </div>  


                

              
                
                </div>
                

            </div>

          { selected.KundaliUrl && 

              <MDBBtn 
              href={selected.KundaliUrl}
              target='blank'
              style={{
                margin:"2%"
              }}
              > {t('See kundali')}</MDBBtn>

          }
           

           
            
          </div>
          

        </div>


      
      
       

      </div>

      
    
    </div>
   

              </MDBModalBody>
              <MDBModalFooter style={{marginBottom:"5%"}}>
              <div style={{alignContent:"center",display:"flex",flexDirection:"row"}}>

<Link style={{margin:"5%",width:"fit-content"}} type="button" className="btn btn-primary" to="/profile">Update Details</Link>
<Link style={{margin:"5%"}} type="button" className="btn btn-secondary" to="/upgrade">Upgrade to premium 👑</Link>

</div>
          
              </MDBModalFooter>
           
          

      </>
    );
}

export default SelfInfo