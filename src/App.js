import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import EducationDetails from "./EducationDetails";
import FamilyDetails from "./FamilyDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import Dashboard from './pages/Dashboard';
import MyConnection from './pages/MyConnection';
import MyRequests from './pages/MyRequests';
import NavTab from './components/NavTab'
// import Signup from './Signup'
// import Login from './Login'
// import Swiper from './Swiper'

import { useState,useEffect } from 'react';
import { auth } from "./firebase";
import ErrorPage from './ErrorPage';
import DeletePage from './DeletePage';
import Proposals from './pages/Proposals';
import Couples from './pages/Couples';
import SelfInfo from './components/SelfInfo';
import { useNavigate } from 'react-router-dom';

//admin 


import FreeMember from "./FreeMember";
// import AddMember from "./AddMember";
import AddReligion from "./AddReligion";
import Dashboard2 from "./Dashboard2";
import PemiumMember from "./PemiumMember";
import AddCaste from "./AddCaste";

import { Login } from './component/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Footer } from './component/Footer'
// import { NavBar } from './component/NavBar'
// import { Home } from './component/Home'
import Landing from './Landing';

//translator...
import { useTranslation } from 'react-i18next'
import Plan from './pages/Plan';
  
  
// Contains the value and text for the options
const languages = [
    { value: 'en', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'bn', text: "Bengali" }
]


function App() {

	 // It is a hook imported from 'react-i18next'
	 const { t } = useTranslation(); 
  
	 const [lang, setLang] = useState('en');
   
	 // This function put query that helps to 
	 // change the language
	 const handleChange = e => { 
		 setLang(e.target.value);
		 let loc = "http://localhost:3000/";
		 window.location.replace(loc + "?lng=" + e.target.value);
	 }

	const [isAuthenticated,setIsAuthenticated] = useState(false);
	const [userName, setUserName] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	// const [isUser, setIsUser] = useState(false);
	// const [profilePhoto, setProfilePhoto] = useState(null);
	
	// const navigate = useNavigate();
	
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
		  if (user) {
			setUserName(user.displayName);
            setIsAuthenticated(true)
			if(user.photoURL == "admin"){
				setIsAdmin(true)
				// navigate("/dashboard2")
			}
		  } else {
			setUserName("")
			setIsAdmin(false)
		  };
		});
	  }, []);


  return (

	<>
	 {/* <NavBar/> */}
	 <Router>
      


    

	  <Routes>

	  
	  <Route path="/login" element={<Login/>} /> 
	  <Route path="/landing" element={<Landing/>} /> 



		 { !isAuthenticated && 

            <>

			  <Route path="/" element={<Landing/>} /> 
			  <Route path='*' element={<Login />} />
			
            </>
		  }
		  

  

 

			  { isAuthenticated &&

			  
					  

				  <>

				  <Route path='*' element={<Navigate to='/error' />} />

				  {/* admin */}

				  {  isAdmin &&

							  <>

							  <Route path="/" element={<Dashboard2 name={userName}/>} />

							  <Route path="/dashboard2" element={<Dashboard2 name={userName}/>} />
							  <Route path="/addreligion" element={<AddReligion name={userName} />} />
							  <Route path="/addcaste" element={<AddCaste name={userName} />}/>
							  {/* <Route path="/addmember" element={<AddMember name={userName} />} /> */}
							  <Route path="/freemember" element={<FreeMember name={userName}/>} />
							  <Route path="/premiummember" element={<PemiumMember name={userName} />} />

							  <Route path="/couples" element={<Couples name={userName} />} />
							  <Route path='/error' element={<ErrorPage/>} />

							  {/* <Route path='*' element={<Navigate to='/error' />} /> */}

							  </>

				  }

				  { !isAdmin && 

					 
				  <>

				  <Route path="/" element={<Dashboard name={userName}/>} />

				  <Route path="/dashboard" element={<Dashboard name={userName}  />} />
				  <Route path="/selfinfo" element={<SelfInfo name={userName} />} />
				  <Route path="/profile" element={<NavTab name={userName} />} />
				  <Route path="/familydetails" element={<FamilyDetails name={userName} />} />
				  <Route path="/professionaldetails" element={<ProfessionalDetails name={userName} />} />
				  <Route path="/educationaldetails" element={<EducationDetails name={userName} />} />
				  <Route path="/myconnections" element={<MyConnection  name={userName}/>} />
				  <Route path="/myrequests" element={<MyRequests name={userName} />} />
				  <Route path="/myproposals" element={<Proposals name={userName} />} />
				  <Route path="/upgrade" element={<Plan name={userName} />} />
				  <Route path="/couples" element={<Couples name={userName} />} />
				  <Route path='/error' element={<ErrorPage/>} />
				  {/* <Route path='*' element={<Navigate to='/error' />} /> */}
				  </>


				  }
				  


			  



					  



				  

				  
				  </>
				  }


				  
			  




	  </Routes>

  

  
	
  </Router>
	</>
  );
}

export default App;


