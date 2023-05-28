import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import { Link ,useNavigate} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import Form from 'react-bootstrap/Form';
import { MDBTooltip } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next'

const firestore = getFirestore(app);

function Sidebar(props) {

    // Contains the value and text for the options
    const languages = [
      {id:1, value: 'en', text: "Language" },
      {id:2, value: 'en', text: "English" },
      {id:3, value: 'hi', text: "Hindi" },
      {id:4, value: 'bn', text: "Bengali" },
      {id:5, value: 'ur', text: "Urdu" }
    ]
   // It is a hook imported from 'react-i18next'
   const { t } = useTranslation(); 
  
   const [lang, setLang] = useState('en');
   const [user, setUser] = useState();
 
   // This function put query that helps to 
   // change the language
   const handleChange = e => { 
       setLang(e.target.value);
       let loc = "https://jodiexpress2.web.app/";
       window.location.replace(loc + "?lng=" + e.target.value);
   }

  const toastSuccess = () => toast.success('Logged out successfully!');

  const [sstatus,setSStatus] = useState(true);

  const getStatus = async () =>{

    const auth = getAuth();
    const user = auth.currentUser;

    const docRef = doc (firestore,`users`,`${user.uid}`);
    const docSnap = await getDoc(docRef);
    const Data = docSnap.data();
    // console.log(Data);
    setSStatus(Data.active)

  }


  const changer = async() =>{

    


    const auth = getAuth();
    const user = auth.currentUser;
  
     const docRef = doc (firestore,`users`,`${user.uid}`);
     await updateDoc(docRef,  {
        active: !sstatus
      })

    setSStatus(prev => !prev)
  


  }

  

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const navigate = useNavigate();

  const [UN,setUN] = useState("");
  const [profile1Url,setprofile1Url] = useState("https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg");

  const getPhoto = async()=>{

    const auth = getAuth();
    const user = auth.currentUser;

    const docRef = doc (firestore,`users`,`${user.uid}`);
    const docSnap = await getDoc(docRef);
    const bgDetailsData = docSnap.data();
    // console.log(bgDetailsData.url);
    
    { bgDetailsData.url &&
      setprofile1Url(bgDetailsData.url)
    }

    
    
  

  }
 
 

  

  const handleLogout = async () =>{
 
    toastSuccess();

    const auth = getAuth();

    await delay(1000);

    signOut(auth).then(() => {
      // console.log("logged out!");
      
      
      navigate("/login")

    }).catch((error) => {
      console.log("logout failed!");
    });

  }

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    setUN(props.username);
    // console.log(user);
    setUser(user)
    getStatus()
    getPhoto();
 }, [sstatus]);


  return (
    <div>
     <div>
  <input type="checkbox" id="menu-toggle" />
  <div className="sidebar1">
    <div className="side-header1">
      <h3>J<span>odi Express</span></h3>
    </div>
    <div className="side-content1">
      <div className="profile1">
      {(profile1Url)?
              // <img className="profile1-img bg-img" src={profile1Url}  />
              <div className="profile1-img bg-img" style={{backgroundImage:`url(${profile1Url})`}} /> 
             :
             <div className="profile1-img bg-img" style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU)`}} /> 
             }
        
        {/* <div className="profile1-img bg-img" style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU)`}} /> */}
        {/* <img className="profile1-img bg-img" src={profile1Url}  /> */}
        <h4>{props.username}</h4>
      
      </div>
      <div className="side-menu1u">
        <ul>
          <li>
            <NavLink id="RouterNavLink" to="/dashboard" activeClassName="active">
              <span className="las la-home" />
              <h6 className="smallc" style={{textDecoration:"none"}}> {t('Dashboard')} </h6>
            </NavLink >
          </li>
          <li>
            <NavLink id="RouterNavLink" to="/selfinfo" activeClassName="active">
              <span className="las la-user-alt" />
              <h6 className="smallc"> {t('My profile')} </h6>
            </NavLink >
          </li>
          <li>
            <NavLink id="RouterNavLink" to="/myconnections" activeClassName="active">
              <span className="las la-envelope" />
              <h6 className="smallc"> {t('My Connections')} </h6>
            </NavLink>
          </li>
          <li>
            <NavLink id="RouterNavLink" to="/myrequests" activeClassName="active">
              <span className="las la-clipboard-list" />
              <h6 className="smallc"> {t('Requests')} </h6>
            </NavLink>
          </li>
        
          <li>
            <NavLink id="RouterNavLink" to="/myproposals" activeClassName="active">
              <span className="las la-clipboard-list" />
              <h6 className="smallc"> {t('Proposals')} </h6>
            </NavLink>
          </li>

         


        
        </ul>
      </div>
    </div>
  </div>
  <div className="main-content1u">
    <header className='hd1'>
      <div className="header-content1u">
        <label htmlFor="menu-toggle">
          <span className="las la-bars" />
        </label>

        <div style={{margin:"0 5px"}}>
        <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.id} 
                    value={item.value}>{item.text}</option>);
                })}
            </select>
        
                 </div>

        <div className="header-menu">
         
     <div  style={{alignItems:"center",justifyContent:"center"}}>

 

     <MDBTooltip  wrapperProps={{ color: 'secondary' }} placement='bottom' title='Uncheck this to deactivate your account!'>
        
         


<Form.Check
  type="switch"
  name="activate-deactivate"
  id="switch"
  checked={sstatus}
  onChange={changer}

/>

      </MDBTooltip>

     
     </div>

     <Button variant="danger">


          {/* <span className="badge badge-danger"> */}
            <div className="user" onClick={handleLogout}>
                      <span className="las la-power-off" />
                      <span><b>{t('Logout')}</b></span>
          </div>
          {/* </span> */}
      </Button>
          
        </div>
      </div>
    </header>

    <ToastContainer
              position="top-right"
              autoClose={3000}
            />
   
  </div>
</div>

    </div>
  )
}

export default Sidebar
