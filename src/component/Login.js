import  * as Components from './Components';
import React,{useState,useEffect} from 'react'
import './Login.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import 'react-toastify/dist/ReactToastify.css';
import { getAuth } from "firebase/auth";
import { useTranslation } from 'react-i18next'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { addDoc, getFirestore } from "firebase/firestore";
import { collection, setDoc,doc } from "firebase/firestore"; 
import { app } from '../firebase';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firestore = getFirestore(app)

const storageRef = ref(storage);

 export function Login() {
     const [signIn, toggle] = React.useState(true);

     const { t } = useTranslation();

     
  const toastSuccess = () => toast.success('Logged in successfully!');
  const toastError = () => toast.error('Login failed!');
  const validationError = () => toast.error('Please fill all fields!');
  const validation2Error = () => toast.error('Invalid credentials!');

  const [email, setEmail] = useState("");
  const [USER, setUSER] = useState();
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUserName] = useState("");
  const [role,setRole] = useState("user");
  const navigate = useNavigate();

  const [UID, setUID] = useState("");

 
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


  const toastSuccess2 = () => toast.success('Signed up successfully!');
  const toastError2 = () => toast.error('Signup failed!');
  const validationError2 = () => toast.error('Please fill all fields!');
  const validation2Error2 = () => toast.error('Invalid credentials!');
   
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU");


  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  let handleSubmit =  (e) => {
    e.preventDefault();

    if (!email || !password) {
      // setErrorMsg("Fill all fields");
      validationError()
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {

        setSubmitButtonDisabled(false);
        
        toastSuccess()

           console.log(res.user);

        if(res.user.photoURL == "admin"){
           await delay(1000);
          navigate("/dashboard2");
        } else {
           await delay(1000);
          navigate("/dashboard");
        };
       
       
    
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // setErrorMsg(err.message);
        validation2Error()
      });
    
  };

  const writeData =  async (e) =>{

    if(role === "admin"){

      
  const userRef = collection(firestore, `admins`);
  
  await setDoc(doc(userRef, `${username}`), {
    username:username,
    email:email,
    password:password,
    fullName:"",
    dob:"",
    gender:"",
    phone:"",
    role:role,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU"
});


    }else{

      const userRef = collection(firestore, `users`);
  
      await setDoc(doc(userRef,`${username}`), {
        username:username,
        email:email,
        password:password,
        uid:UID,
        active:true,
        role:role,
        fullName:"",
        dob:"",
        pob:"",
        gender:"",
        phone:"",
        height:"",
        collegeName:"",
        yop:"",
        degree:"",
        percent:"",
        school12:"",
        yop12:"",
        board12:"",
        percent12:"",
        school10:"",
        yop10:"",
        board10:"",
        percent10:"",
        workplace:"",
        income:"",
        contact:"",
        currentcompany:"",
        position:"",
        from:"",
        to:"",
        recentcompany1:"",
        position1:"",
        from1:"",
        to1:"",
        recentcompany2:"",
        position2:"",
        from2:"",
        to2:"",
        kundaliUrl:"",
        fathersName:"",
        mothersName:"",
        fatherOccupation:"",
        motherOccupation:"",
        familyLives:"",
        familyType:"",
        featured:false,
        fatherincome:"",
        motherincome:"",
        fatheremploymentstatus:"",
        motheremploymentstatus:"",
        religion:"",
        caste:"",
        subcaste:"",
        rashi:"",
        manglikstatus:"",
        connections:[],
        sentrequests:[],
        receivedrequests:[],
        marryconnections:[],
        marrysent:[],
        marryreceived:[],
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU"
    });
    

    }

   }


  let handleSubmit2 =  (e) => {
    e.preventDefault();

    if (!username || !email || !password ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, email,password)
    .then(async (res) => {
      setSubmitButtonDisabled(false);
      toastSuccess()
      const user = res.user;
      console.log(user);
      setUID(user.uid)
      // writeData();
      if(role === "admin"){

      
        const userRef = collection(firestore, `admins`);
        
        await setDoc(doc(userRef, `${username}`), {
          username:username,
          email:email,
          password:password,
          fullName:"",
          dob:"",
          gender:"",
          phone:"",
          role:role,
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU"
      });
      
      
          }else{
      
            const userRef = collection(firestore, `users`);
        
            await setDoc(doc(userRef,`${user.uid}`), {
              username:username,
              email:email,
              password:password,
              uid:user.uid,
              active:true,
              role:role,
              fullName:"",
              dob:"",
              pob:"",
              gender:"",
              phone:"",
              height:"",
              collegeName:"",
              yop:"",
              degree:"",
              percent:"",
              school12:"",
              yop12:"",
              board12:"",
              percent12:"",
              school10:"",
              yop10:"",
              board10:"",
              percent10:"",
              workplace:"",
              income:"",
              contact:"",
              currentcompany:"",
              position:"",
              from:"",
              to:"",
              recentcompany1:"",
              position1:"",
              from1:"",
              to1:"",
              recentcompany2:"",
              position2:"",
              from2:"",
              to2:"",
              kundaliUrl:"",
              fathersName:"",
              mothersName:"",
              fatherOccupation:"",
              motherOccupation:"",
              familyLives:"",
              familyType:"",
              featured:false,
              fatherincome:"",
              motherincome:"",
              fatheremploymentstatus:"",
              motheremploymentstatus:"",
              religion:"",
              caste:"",
              subcaste:"",
              rashi:"",
              manglikstatus:"",
              connections:[],
              sentrequests:[],
              receivedrequests:[],
              marryconnections:[],
              marrysent:[],
              marryreceived:[],
              url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU"
          });
          
      
          }
    

      if(role == "admin"){
        await updateProfile(user, {
          displayName: username,
          photoURL:"admin"  
          
        });

   

      }else{
        await updateProfile(user, {
          displayName: username ,
          
        });

    

      }

      // navigate('/')
      console.log(user);
    
      if(res.user.photoURL == "admin"){
        await delay(1000);
        navigate("/dashboard2");
      } else{
        await delay(1000);
        navigate("/dashboard");
      };

      
    })
    .catch((err) => {
      setSubmitButtonDisabled(false);
      // setErrorMsg(err.message);
      toastError();
    });

 
  };



      return(
        <div className='akj'>
             
          
          <Components.Container className='pin'>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                  <h1 className='af'>{t('SignUp')}</h1>
                      <Components.Title></Components.Title>
                      <Components.Input className='billu' type='text' placeholder={t('Username')}  value={username}  onChange={(e) => setUserName(e.target.value)} name="username"   />
                      <Components.Input className='billu' type='email' placeholder={t('Email')} value={email}  onChange={(e) => setEmail(e.target.value)} name="email"  />
                      <Components.Input className='billu' type='password' placeholder={t('Password')} value={password}  onChange={(e) => setPassword(e.target.value)} name="password" />
                      <Components.Button className='dudu' onClick={handleSubmit2}>{t('SignUp')}</Components.Button>

                      <Components.Anchor ><NavLink  to="/landing"><u>{t('Go to landing page')}</u></NavLink></Components.Anchor>

                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form >
                    <h1 className='af'> {t('Login')}</h1>
                       <Components.Title ></Components.Title>
                       <Components.Input className='billu' type='email' placeholder={t('Email')} value={email}  onChange={(e) => setEmail(e.target.value)} name="email" />
                       <Components.Input className='billu' type='password' placeholder={t('Password')} value={password}  onChange={(e) => setPassword(e.target.value)} name="password"  />
                       <Components.Anchor href='#'>{t('Forgot your password?')}</Components.Anchor>
                       <Components.Button className='dudu' onClick={handleSubmit} > {t('Login')} </Components.Button>
                       <Components.Anchor ><NavLink  to="/landing"><u>{t('Go to landing page')}</u></NavLink></Components.Anchor>

                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                  <h1 className='ag'> {t('Welcome Back!')} </h1>
                      <Components.Title ></Components.Title>
                      <Components.Paragraph>
                         {t('temp')}
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}  className='dudu'>
                      {t('Login')}
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <h1 className='ag'>{t('Hello, Friend!')}</h1>
                        <Components.Title ></Components.Title>
                        <Components.Paragraph>
                            {t('Enter Your personal details and start journey with us')}
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)} className='dudu'>
                            {t('SignUp')}
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          </div>
      )
 }
