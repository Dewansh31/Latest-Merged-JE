import React,{useState,useEffect} from "react";
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const firestore = getFirestore(app)

function ProfessionalDetails() {

  const [show, setShow] = useState(false);


  const [workplace,setWorkPlace] = useState("");
  const [income,setIncome] = useState("");
  const [contact,setContact] = useState("");

  const [currentcompany,setcurrentcompnay] = useState("");
  const [position,setPosition] = useState("");
  const [from,setFrom] = useState("");
  const [to,setTo] = useState("present");

  const [rc1,setrc1] = useState("");
  const [position1,setPosition1] = useState("");
  const [from1,setFrom1] = useState("");
  const [to1,setTo1] = useState("");

  const [rc2,setrc2] = useState("");
  const [position2,setPosition2] = useState("");
  const [from2,setFrom2] = useState("");
  const [to2,setTo2] = useState("");




  const auth = getAuth();
  const user = auth.currentUser;



  const writeData =  async () =>{
   const docRef = doc (firestore,`users`,`${user.uid}`);
   await updateDoc(docRef,  {
 
     workplace:workplace,
     income:income,
     contact:contact,

     currentcompany:currentcompany,
     position:position,
     from:from,
     to:to,

     recentcompany1:rc1,
     position1:position1,
     from1:from1,
     to1:to1,

     recentcompany2:rc2,
     position2:position2,
     from2:from2,
     to2:to2,
    
      
    })


   
   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users`,`${user.uid}`);
    const docSnap = await getDoc(docRef);
    const proDetailsData = docSnap.data();
    // console.log(proDetailsData);

    setWorkPlace(proDetailsData.workplace)
    setIncome(proDetailsData.income)
    setContact(proDetailsData.contact)

    setcurrentcompnay(proDetailsData.currentcompany)
    setPosition(proDetailsData.position)
    setFrom(proDetailsData.from)
    setTo(proDetailsData.to)

    setrc1(proDetailsData.recentcompany1)
    setPosition1(proDetailsData.position1)
    setFrom1(proDetailsData.from1)
    setTo1(proDetailsData.to1)

    setrc2(proDetailsData.recentcompany2)
    setPosition2(proDetailsData.position2)
    setFrom2(proDetailsData.from2)
    setTo2(proDetailsData.to2)
    
    
   

  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
    setShow(true)
    getData();
  }

  useEffect(() => {
    getData();
   // eslint-disable-next-line 
 }, []);


  return (
    <div>
      <div className="formcontainer">
        <div className="title">Professional Details</div>
        <div className="content33">
          <form action="#">
            <div className="user-details">

            <select className="form-select input-box" required value={workplace} onChange={(e) => setWorkPlace(e.target.value)} name="pob" aria-label="Default select example">
        <option selected>Employed In</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Chennai">Chennai</option>
        <option value="Punjab">Punjab</option>
        <option value="Pune">Pune</option>
      </select>
              {/* <div className="input-box">
                <span >Employed In</span>
                <input type="text" placeholder="Work place" required value={workplace}  onChange={(e) => setWorkPlace(e.target.value)} name="workplace" />
              </div> */}
              <div className="input-box">
                <span >Annual Income</span>
                <input
                  type="number"
                  placeholder="annual income"
                  required
                  value={income}  onChange={(e) => setIncome(e.target.value)} name="income"
                />
              </div>
              <div className="input-box">
                <span >Phone Number</span>
                <input type="tel"  maxLength={10} placeholder="phone number" required value={contact}  onChange={(e) => setContact(e.target.value)} name="contact" />
              </div>
            </div>


        

        <MDBAccordion  >
      <MDBAccordionItem collapseId={1} headerTitle='Current institution'>
      <div className="user-details">

             
<div className="input-box">
  <span>Company Name</span>
  <input type="text" placeholder=" Company name" required 
  value={currentcompany}  
  onChange={(e) => setcurrentcompnay(e.target.value)} 
  name="Company name" />
</div>
<div className="input-box">
  <span>Position</span>

  <input type="text" placeholder=" Position" required 
  value={position}  
  onChange={(e) => setPosition(e.target.value)} 
  name="yop" />
</div>

<div className="input-box">
  <span>From</span>
  <input type="date"
   value={from}  
   onChange={(e) => setFrom(e.target.value)} 

  name="dob"/>
</div>

<div className="input-box">
  <span>to</span>
  <input type="text"
  placeholder="present"
  name=""/>
</div>

</div>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Recent institution 1'>
      <div className="user-details">
        <div className="input-box">
          <span>Company name</span>
          <input type="text" placeholder=" Company name" required 
          value={rc1}  
          onChange={(e) => setrc1(e.target.value)} 
          name="Company name" />
        </div>
        <div className="input-box">
          <span>Position</span>
      
          <input type="text" placeholder=" Position" required 
          value={position1}  
          onChange={(e) => setPosition1(e.target.value)} 
          name="Position" />
        </div>
       
        <div className="input-box">
          <span>From</span>
          <input type="date"
           value={from1}  
           onChange={(e) => setFrom1(e.target.value)} 
          name="dob"/>
        </div>

        <div className="input-box">
          <span>To</span>
          <input type="date"
          value={to1}  
          onChange={(e) => setTo1(e.target.value)} 
          name="dob"/>
        </div>

      </div>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Recent institution 2'>
      <div className="user-details">
        <div className="input-box">
          <span>Company Name</span>
          <input type="text" placeholder=" Company name" required 
          value={rc2}  
          onChange={(e) => setrc2(e.target.value)} 
          name="Company Name" />
        </div>
        <div className="input-box">
          <span>Position</span>
      
          <input type="text" placeholder="Position" required 
          value={position2}  
          onChange={(e) => setPosition2(e.target.value)} 
          name="Position" />
        </div>
       
        <div className="input-box">
          <span>From</span>
          <input type="date"
           value={from2}  
           onChange={(e) => setFrom2(e.target.value)} 
          name="dob"/>
        </div>

        <div className="input-box">
          <span>To</span>
          <input type="date"
           value={to2}  
           onChange={(e) => setTo2(e.target.value)} 
        
          name="dob"/>
        </div>
        </div>
        
      </MDBAccordionItem>
    </MDBAccordion>
 
  



            <div className="button">
              <input type="submit" defaultValue="Register" onClick={handleSubmit}/>
              <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Professional details updated successfully!</h5>
        
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
  );
}

export default ProfessionalDetails;
