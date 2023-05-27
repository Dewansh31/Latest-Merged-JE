import React,{useEffect,useState} from 'react'
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { auth } from "./firebase";
import { addDoc } from "firebase/firestore";
import { collection, setDoc } from "firebase/firestore"; 
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

import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "./firebase";

const firestore = getFirestore(app);

const storageRef = ref(storage);

function BackgroundDetails() {

  const [show, setShow] = useState(false);

 
  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [caste,setCaste] = useState("");
  const [rashi,setRashi] = useState("");
  const [religion,setReligion] = useState("");
  const [subcaste,setSubCaste] = useState("");
  const [manglikstatus,setManglikstatus] = useState("");
  const [casteList,setCasteList] = useState([]);

  const [pdfUpload, setPdfUpload] = useState(null);
  const [pdfUrl, setPdfUrl] = useState();

  const [show2, setShow2] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState();


  const auth = getAuth();
  const user = auth.currentUser;

  const writeData2 =  async (e) =>{
    e.preventDefault();


    if (imageUpload == null) return;

    const imageRef = ref(storage, `${user.uid}/kundali`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        console.log(url);
        
    });

   
    

});
           
    const docRef = doc (firestore,`users`,`${user.uid}`);
      
        await updateDoc(docRef,  {
            KundaliUrl:imageUrl
          })

          setShow2(true)
  

   }

  const writeData =  async () =>{
   const docRef = doc (firestore,`users`,`${user.uid}`);
   await updateDoc(docRef,  {

    caste:caste,
    rashi:rashi,
    religion:religion,
    subcaste:subcaste,
    manglikstatus:manglikstatus
    
      
    })
   

   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users`,`${user.uid}`);
    const docSnap = await getDoc(docRef);
    const bgDetailsData = docSnap.data();
    // console.log(bgDetailsData);

    setCaste(bgDetailsData.caste)
    setRashi(bgDetailsData.rashi)
    setReligion(bgDetailsData.religion)
    setSubCaste(bgDetailsData.subcaste)
    setManglikstatus(bgDetailsData.manglikstatus)

    // console.log( manglik);
    
  

  }

  const fetchCastes = async () => {
   
    const docRef = doc(firestore, `admindata`, "castedata")
    const docSnap = await getDoc(docRef)
  
    const data = docSnap.exists() ? docSnap.data() : null
  
    if (data === null || data === undefined) return null
  
    
    setCasteList(data.castes);


    
  
    };


  //   const uploadKundli =  async (e) =>{
  //     e.preventDefault();
  
  //     const docRef = doc (firestore,`users`,`${user.displayName}`);
  
  //     if (pdfUpload == null) return;
  
  //     const pdfRef = ref(storage, `${user.displayName}/kundali`);
  
  //     uploadBytes(pdfRef, pdfUpload).then((snapshot) => {
  //       getDownloadURL(snapshot.ref).then((url) => {
  //         setPdfUrl(url);
  //         console.log(url);
          
  //     });
  
     
      
  
  // });
  
        
  //         await updateDoc(docRef,  {
  //             kundaliUrl:pdfUrl
  //           })
  
  //           setShow(true)
    
  
  //    }



  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
  
    setShow(true)
    getData();
  }

//   useEffect(() => {
//     getData();
//    // eslint-disable-next-line 
//  }, []);
  
  useEffect(() => {
    getData();
    fetchCastes()
    // getData();
    }, [casteList]);


  return (
    <div>
       <div className="formcontainer">
  <div className="title">Background Details</div>
  <div className="content33">
    <form action="#">
      <div className="user-details">
      <select className="form-select input-box" required value={religion} onChange={(e) => setReligion(e.target.value)} name="pob" aria-label="Default select example">
        <option selected>Religion</option>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Sikh">Sikh</option>
        <option value="Bauddhist">Bauddhist</option>
        <option value="Zoroastrian">Zoroastrian</option>
        <option value="Jain">Jain</option>
        <option value="Judaism">Judaism</option>
        <option value="Non-Religious">Non-Religious</option>
       
      </select>

       
        {/* <div className="input-box">
          <span>Caste</span>
          <input type="text" placeholder=" caste" required value={caste}  onChange={(e) => setCaste(e.target.value)} name="caste" />
        </div> */}

     <select className="form-select input-box" required value={caste}  onChange={(e) => setCaste(e.target.value)} name="caste" aria-label="Default select example">
        <option selected>Castes</option>
        {
          casteList.map((item) => (
        <option value={item}>{item}</option>
          ))}
       
      </select>
        <div className="input-box">
          <span>Sub Caste</span>
          <input type="text" placeholder=" sub caste" required value={subcaste}  onChange={(e) => setSubCaste(e.target.value)} name="subcaste" />
        </div>
        {/* <div className="input-box">
          <span className="details">Rashi</span>
          <input type="text" placeholder=" rashi" required value={rashi}  onChange={(e) => setRashi(e.target.value)} name="rashi" />
        </div> */}
        <select className="form-select input-box"  value={rashi} onChange={(e) => setRashi(e.target.value)} name="pob" >
        <option >Rashi</option>
        <option value="Mesh">Mesh</option>
        <option value="Vrishabh">Vrishabh</option>
        <option value="Mithun">Mithun</option>
        <option value="Kark">Kark</option>
        <option value="Sinh">Sinh</option>
        <option value="Kanya">Kanya</option>
        <option value="Tula">Tula</option>
        <option value="Vrishchik">Vrishchik</option>
        <option value="Dhanu">Dhanu</option>
        <option value="Makar">Makar</option>
        <option value="Kumbh">Kumbh</option>
        <option value="Meen">Meen</option>
       
      </select>

      
      <select className="form-select input-box"  
        value={manglikstatus} onChange={(e) => setManglikstatus(e.target.value)} 
        name="Father's Employment status" >
      <option selected>Manglik/Non-Manglik</option>
      <option value="Manglik">Manglik</option>
      <option value="Non-Manglik">Non-Manglik</option>
    </select>


   
        


          {/* <input type="file" className="input-box" style={{marginTop:"3%"}} name="kundli" placeholder="Add profile picture" defaultValue="fdsa"
 
           /> */}
 
          
 <div className='input-box' style={{marginTop:"3%"}}>
 
 <MDBBtn onClick={(e) =>{
  e.preventDefault()
   setToggleOneModal(!toggleOneModal)
 }}>Upload Kundali</MDBBtn>
</div>

<MDBModal show={toggleOneModal} setShow={setToggleOneModal} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Upload your kundali</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={(e) => {
                  e.preventDefault()
                   setToggleOneModal(!toggleOneModal)
                 }}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <div className="formcontainer">
<div className="title">Kundali</div>
<div className="content33">
 <form action="#">
   <div className="user-details">
  
   <input type="file"  onChange={(event) => {
          setImageUpload(event.target.files[0]);
          }} />

          

   </div>
   <div className="button">
     {/* <input type="submit" value="Upload" onClick={writeData2}/> */}
     <MDBBtn className='mx-2' color='danger' onClick={writeData2}>
        Danger
      </MDBBtn>
   
     <Alert show={show2} variant="success" style={{marginTop:"-20rem"}}>
     <h5>Kundali uploaded successfully!</h5>
     
     <hr />
     <div className="d-flex justify-content-end">
       <Button onClick={() => setShow2(false)} variant="outline-success">
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
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


    
    

      
      </div>
      <div className="button">
        <input type="submit" defaultValue="Register" onClick={handleSubmit}/>
        <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Background details updated successfully!</h5>
        
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
    </div>
  )
}

export default BackgroundDetails
