import React,{useEffect,useState} from 'react'
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';

const firestore = getFirestore(app)

function EducationDetails() {

  const [show, setShow] = useState(false);


  const [collegeName,setCollegeName] = useState("");
  const [yop,setYop] = useState("");
  const [degree,setDegree] = useState("");
  const [percent,setPercent] = useState("");

  const [schoolName12,setSchoolName12] = useState("");
  const [yop12,setYop12] = useState("");
  const [board12,setBoard12] = useState("");
  const [percent12,setPercent12] = useState("");

  const [schoolName10,setSchoolName10] = useState("");
  const [yop10,setYop10] = useState("");
  const [board10,setBoard10] = useState("");
  const [percent10,setPercent10] = useState("");
 




  const auth = getAuth();
  const user = auth.currentUser;



  const writeData =  async () =>{
   const docRef = doc (firestore,`users`,`${user.uid}`);
   await updateDoc(docRef,  {

    collegeName:collegeName,
    yop:yop,
    degree:degree,
    percent:percent,

    school12:schoolName12,
    yop12:yop12,
    board12:board12,
    percent12:percent12,

    school10:schoolName10,
    yop10:yop10,
    board10:board10,
    percent10:percent10
      
    })
   
   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users`,`${user.uid}`);
    const docSnap = await getDoc(docRef);
    const edDetailsData = docSnap.data();
    // console.log(edDetailsData);

    setCollegeName(edDetailsData.collegeName)
    setYop(edDetailsData.yop)
    setDegree(edDetailsData.degree)
    setPercent(edDetailsData.percent)

    setSchoolName12(edDetailsData.school12)
    setYop12(edDetailsData.yop12)
    setBoard12(edDetailsData.board12)
    setPercent12(edDetailsData.percent12)

    setSchoolName10(edDetailsData.school10)
    setYop10(edDetailsData.yop10)
    setBoard10(edDetailsData.board10)
    setPercent10(edDetailsData.percent10)


    

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
  <div className="title">Eductional Details</div>
  <div className="content33">
    <form action="#">

    <MDBAccordion >
      <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Higher Education</>}>
      <div className="user-details">
        <div className="input-box">
          <span>College Name</span>
          <input type="text" placeholder=" College name" required value={collegeName}  onChange={(e) => setCollegeName(e.target.value)} name="collegeName" />
        </div>
        <div className="input-box">
          <span>Year Of Passing</span>
      
          <input type="text" placeholder=" year of passing" required value={yop}  onChange={(e) => setYop(e.target.value)} name="yop" />
        </div>
       
       <select className="form-select input-box" required value={degree} onChange={(e) => setDegree(e.target.value)} name="pob" aria-label="Default select example">
        <option selected>Degree</option>
        <option value="Btech">Btech</option>
        <option value="Mtech">Mtech</option>
        <option value="Bsc">Bsc</option>
        <option value="Msc">Msc</option>
        <option value="Bcom">Bcom</option>
        <option value="MBBS">MBBS</option>
        <option value="MBA">MBA</option>
        <option value="Mass communication">Mass communication</option>
        <option value="Engineering">Engineering</option>
        <option value="Chartered accountant">Chartered accountant</option>
        <option value="Law">Law</option>
        <option value="B.Pharma">B.Pharma</option>
        <option value="M.Pharma">M.Pharma</option>
        <option value="B.Ed">B.Ed</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
        <option value="B.Arch">B.Arch</option>
      </select>

      <div className="input-box">
          <span>Percent</span>
          <input type="number" placeholder=" %" required value={percent}  onChange={(e) => setPercent(e.target.value)} name="percent" />
        </div>

      </div>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Higher Secondary (12th)</>}>
      <div className="user-details">
        <div className="input-box">
          <span>School Name</span>
          <input type="text" placeholder=" School Name" required value={schoolName12}  onChange={(e) => setSchoolName12(e.target.value)} name="schoolname12" />
        </div>
        <div className="input-box">
          <span>Year Of Passing</span>
      
          <input type="text" placeholder=" year of passing" required value={yop12}  onChange={(e) => setYop12(e.target.value)} name="yop" />
        </div>
       
        <div className="input-box">
          <span>Board</span>
      
          <input type="text" placeholder=" Board Name" required value={board12}  onChange={(e) => setBoard12(e.target.value)} name="board12" />
        </div>
     

      <div className="input-box">
          <span>Percent</span>
          <input type="number" placeholder=" %" required value={percent12}  onChange={(e) => setPercent12(e.target.value)} name="percent12" />
        </div>

      </div>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; High School (10th)</>}>
      <div className="user-details">
        <div className="input-box">
          <span>school Name</span>
          <input type="text" placeholder=" School Name" required value={schoolName10}  onChange={(e) => setSchoolName10(e.target.value)} name="school10" />
        </div>
        <div className="input-box">
          <span>Year Of Passing</span>
      
          <input type="text" placeholder=" year of passing" required value={yop10}  onChange={(e) => setYop10(e.target.value)} name="yop" />
        </div>
       
       
        <div className="input-box">
          <span>Board</span>
      
          <input type="text" placeholder=" Board Name" required value={board10}  onChange={(e) => setBoard10(e.target.value)} name="board10" />
        </div>

      <div className="input-box">
          <span>Percent</span>
          <input type="number" placeholder=" %" required value={percent10}  onChange={(e) => setPercent10(e.target.value)} name="percent10" />
        </div>

      </div>
      </MDBAccordionItem>
    </MDBAccordion>

    



      <div className="button">
        <input type="submit" defaultValue="Register" onClick={handleSubmit} />

        <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Educational details updated successfully!</h5>
        
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

export default EducationDetails
