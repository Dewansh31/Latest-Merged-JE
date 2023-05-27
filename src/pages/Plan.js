import React,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar'
import Spinner from '../Spinner'
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
  import '../../src/components/Tab.css'
  import '../Login.css'
  import { Link } from 'react-router-dom';
  import { getFirestore } from "firebase/firestore";
  import {doc,updateDoc,getDoc } from "firebase/firestore"; 
  import { app } from '../firebase';
  import { getAuth } from "firebase/auth";

  
const firestore = getFirestore(app)


const Plan = (props) => {
    const [topRightModal, setTopRightModal] = useState(true);

    const toggleShow = () => setTopRightModal(!topRightModal);

    const [amount, setamount] = useState(100);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");

    const auth = getAuth();

    const [USER,setUSER] = useState(auth.currentUser)


  const writeData =  async () =>{
    const docRef = doc (firestore,`users`,`${USER.uid}`);
    await updateDoc(docRef,  {
    
        featured:true
     
       
     })
   
   }

   const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_CCdiSJPs1m4snL",
        key_secret:"xvBYeaNUblF2qu94VOETqmlL",
        amount: amount *100,
        currency:"INR",
        name:"JodiExpress",
        description:"for testing purpose",
        handler: function(response){
          writeData()
          alert(`Payment successful! ${response.razorpay_payment_id}`);

        },
        prefill: {
          name: name,
          email:email,
          contact:num
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#F33A6A"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }


   const getData = async()=>{

    
    const auth = getAuth();
    const user = auth.currentUser;

    const docRef = doc (firestore,`users`,`${user.uid}`);
    const docSnap = await getDoc(docRef);
    const sdata = docSnap.data();
    setName(sdata.username)
    setEmail(sdata.email)
    setNum(sdata.contact)


  }

 

  useEffect(() => {
    
 
    const user = auth.currentUser;
    setUSER(user)

    getData();

 // eslint-disable-next-line
}, []);
  
    return (
      <>
         <Sidebar username={props.name}  />

         <div className='cont' style={{padding:"150px 0px"}}>
  {/* <h1>
    
  </h1> */}
  <main className='mainT' >
   

  <div className="lcontainer1">


<div className="title">Upgrade </div>
<div className="content33">
  <form action="#">
    <div className="user-details1">

        <h5>Perks of Premium membership</h5>

        <ul>
                <li> ✅Access to information like mobile etc.</li>
                <li> ✅Get prioritized in every search </li>
                <li> ✅Access to chat feature </li>
                <li> ✅Access to all assets</li>
               
              </ul>
      
     
      <div className="button">
        <input type="submit" value="Upgrade to premium" onClick={handleSubmit} />
         </div>
      



    </div>
    

    </form>

  

</div>
</div>
    
  </main>
</div>
  
        
      </>
    );
}

export default Plan