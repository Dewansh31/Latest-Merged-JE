import React, { useState,useEffect } from 'react'
import './Error.css'
import { Link } from 'react-router-dom'
import { getAuth } from "firebase/auth";

const ErrorPage = (props) => {

 const [u,setU] = useState(false)

  useEffect(() => {

    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      setU(true)
    }
  
 }, [u]);

  return (
     <>
   
<p className="zoom-area"> The page you are looking for is not found! </p>
<section className="error-container">
  <span className="four"><span className="screen-reader-text">404</span></span>
  {/* <span className="zero"><span className="screen-reader-text">0</span></span>
  <span className="four"><span className="screen-reader-text">4</span></span> */}
</section>
<div className="link-container">
{
      (u)
      ?  <Link  to="/" className="more-link">Go to Dashboard</Link>
      :  <Link  to="/login" className="more-link">Login</Link>

}
        

</div>
     </>    
  )
}

export default ErrorPage