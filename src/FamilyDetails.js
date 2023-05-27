import React,{useState,useEffect} from 'react'
import './Profile.js';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const firestore = getFirestore(app)

function FamilyDetails() {

  const [show, setShow] = useState(false);



  const [fathersName,setFatherName] = useState("");
  const [mothersName,setMotherName] = useState("");
  const [motherOccupation,setMotherOccupation] = useState("");
  const [fatherOccupation,setFatherOccupation] = useState("");

  const [fathersIncome,setFatherIncome] = useState("");
  const [mothersIncome,setMotherIncome] = useState("");
  const [motherES,setMotherES] = useState("");
  const [fatherES,setFatherES] = useState("");

  const [familyLives,setFLives] = useState("");
  const [familyType,setFType] = useState("");





  const auth = getAuth();
  const user = auth.currentUser;



  const writeData =  async () =>{
   const docRef = doc (firestore,`users`,`${user.uid}`);
   await updateDoc(docRef,  {

    fathersName:fathersName,
    mothersName:mothersName,
    fatherOccupation:fatherOccupation,
    motherOccupation:motherOccupation,
    fatherincome:fathersIncome,
    motherincome:mothersIncome,
    fatheremploymentstatus:fatherES,
    motheremploymentstatus:motherES,
    familyLives:familyLives,
    familyType:familyType

    })
   
   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users`,`${user.uid}`);
    const docSnap = await getDoc(docRef);
    const familyDetailsData = docSnap.data();
    // console.log(familyDetailsData);

    setFatherName(familyDetailsData.fathersName)
    setMotherName(familyDetailsData.mothersName)
    setFatherOccupation(familyDetailsData.fatherOccupation)
    setMotherOccupation(familyDetailsData.motherOccupation)

    setFatherIncome(familyDetailsData.fatherincome)
    setMotherIncome(familyDetailsData.motherincome)
    setFatherES(familyDetailsData.fatheremploymentstatus)
    setMotherES(familyDetailsData.motheremploymentstatus)

    setFLives(familyDetailsData.familyLives)
    setFType(familyDetailsData.familyType)



  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
    setShow(true)
    getData();
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-linecd
 }, []);

  return (
    <div>
       <div className="formcontainer">
  <div className="title">Family Details</div>
  <div className="content33">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span >Father's Name</span>
          <input type="text" placeholder=" Father's name"  value={fathersName}  onChange={(e) => setFatherName(e.target.value)} name="fathersName"  />
        </div>
        <div className="input-box">
          <span >Mother's Name</span>
          <input type="text" placeholder=" Mother's username"  value={mothersName}  onChange={(e) => setMotherName(e.target.value)} name="mothersName"  />
        </div>

        <select className="form-select input-box" 
        value={fatherES} onChange={(e) => setFatherES(e.target.value)} 
        name="fatherES" >
      <option selected>Father's Employment status</option>
      <option value="Employed">Employed</option>
      <option value="Retired">Retired</option>
    </select>

        

        <select className="form-select input-box" required 
        value={motherES} onChange={(e) => setMotherES(e.target.value)} 
        name="motherES" >
      <option selected>Mother's Employment status</option>
      <option value="Employed">Employed</option>
      <option value="Retired">Retired</option>
    </select>




         {(fatherES == "Employed")?
             <>
             <div className="input-box">
          <span >Father's Occupation</span>
          <input type="text" placeholder=" Father's Ocuupation" value={fatherOccupation}  onChange={(e) => setFatherOccupation(e.target.value)} name="fatherOccupation"  />
        </div>
        
        </>

             :
             <>
              </>
             }

{(motherES == "Employed")?
             <>
          
        <div className="input-box">
          <span >Mother's Occupation</span>
          <input type="text" placeholder=" Mother's Ocuupation" value={motherOccupation}  onChange={(e) => setMotherOccupation(e.target.value)} name="motherOccupation"  />
        </div>
        </>

             :
             <>
              </>
             }

        {/* <div className="input-box">
          <span >Father's Occupation</span>
          <input type="text" placeholder=" Father's Ocuupation" value={fatherOccupation}  onChange={(e) => setFatherOccupation(e.target.value)} name="fatherOccupation"  />
        </div>
        <div className="input-box">
          <span >Mother's Occupation</span>
          <input type="text" placeholder=" Mother's Ocuupation" value={motherOccupation}  onChange={(e) => setMotherOccupation(e.target.value)} name="motherOccupation"  />
        </div> */}

        <div className="input-box">
          <span >   {(fatherES == "Employed")? "Father's Income" : "Father's Pension" } </span>
          <input type="text" placeholder=" Father's Income"
          value={fathersIncome}  onChange={(e) => setFatherIncome(e.target.value)} 
          name="fathersIncome"  />
        </div>
        <div className="input-box">
          <span >  {(motherES == "Employed")? "Mother's Income" : "Mother's Pension" } </span>
          <input type="text" placeholder=" Mother's Income" 
          value={mothersIncome}  onChange={(e) => setMotherIncome(e.target.value)} 
          name="mothersIncome"  />
        </div>

      
        {/* <h6 >Father's Employment status</h6> */}
       
        <div className="input-box">
          <span >Family Lives (origin) </span>
          <input type="text" placeholder=" Family Lives" required value={familyLives}  onChange={(e) => setFLives(e.target.value)} name="familyLives"  />
        </div>
        <div className="input-box">
          <span >Family Type</span>
          <input type="text" placeholder=" Family type" required value={familyType}  onChange={(e) => setFType(e.target.value)} name="familyType"  />
        </div>
       
      </div>
      <div className="button">
        <input type="submit" defaultValue="Register" onClick={handleSubmit} />
        <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Family details updated successfully!</h5>
        
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

export default FamilyDetails
