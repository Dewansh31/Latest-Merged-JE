import React,{useState,useEffect} from 'react'
import './Search.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { app } from '../firebase';
import { MDBBadge } from 'mdb-react-ui-kit';
import { collection, query, where, getDocs,or,and,orderBy  } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { BsSearchHeart } from 'react-icons/bs';
import Select from 'react-select';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {doc,updateDoc} from "firebase/firestore"; 
import {arrayUnion } from "firebase/firestore";
import Spinner from '../Spinner';
import errorimg from '../images/err.png'
import { useTranslation } from 'react-i18next'
import {getDoc } from "firebase/firestore"; 


const db = getFirestore(app)

function Search() {

  const { t } = useTranslation();

  const t1 = "Father's Income";
  const t2 = "Father's Pension";
  const t3 = "Mother's Income";
  const t4 = "Mother's Pension";


  const data = [
    {
      value: "Bangalore",
      label: "Bangalore"
    },
    {
      value: "Kolkata",
      label: "Kolkata"
    },
    {
      value: "Hyderabad",
      label: "Hyderabad"
    },
    {
      value: "Gujarat",
      label: "Gujarat"
    },
    {
      value: "Lucknow",
      label: "Lucknow"
    },
    {
      value: "Delhi",
      label: "Delhi"
    },{
      value: "Chennai",
      label: "Chennai"
    },
    {
      value: "Gujarat",
      label: "Gujarat"
    },
    {
      value: "Punjab",
      label: "Punjab"
    },
    {
      value: "Pune",
      label: "Pune"
    }
  ];

  const degreedata = [
    {
      value: "Btech",
      label: "Btech"
    },
    {
      value: "Mtech",
      label: "Mtech"
    },
    {
      value: "Bsc",
      label: "Bsc"
    },
    {
      value: "Msc",
      label: "Msc"
    },
    {
      value: "Bcom",
      label: "Bcom"
    },
    {
      value: "MBBS",
      label: "MBBS"
    },
    {
      value: "MBA",
      label: "MBA"
    },
    {
      value: "Mass communication",
      label: "Mass communication"
    },
    {
      value: "Engineering",
      label: "Engineering"
    },
    {
      value: "Chartered accountant",
      label: "Chartered accountant"
    },
    {
      value: "Fashion Designing",
      label: "Fashion Designing"
    },
    {
      value: "Civil services",
      label: "Civil services"
    },
    {
      value: "Accounts & Finance",
      label: "Accounts & Finance"
    },
    {
      value: "Mtech",
      label: "Mtech"
    },
    {
      value: "Law",
      label: "Law"
    },
    {
      value: "Hotel management",
      label: "Hotel management"
    },
    {
      value: "BBA",
      label: "BBA"
    },
    {
      value: "B.Pharma",
      label: "B.Pharma"
    },
    {
      value: "M.Pharma",
      label: "M.Pharma"
    },
    {
      value: "B.Ed",
      label: "B.Ed"
    },
    {
      value: "BCA",
      label: "BCA"
    },
    {
      value: "MCA",
      label: "MCA"
    },
    {
      value: "B.Arch",
      label: "B.Arch"
    },
    {
      value: "Journalism",
      label: "Journalism"
    }
  ];

  const religiondata = [
    {
      value: "Hindu",
      label: "Hindu"
    },
    {
      value: "Muslim",
      label: "Muslim"
    },
    {
      value: "Christian",
      label: "Christian"
    },
    {
      value: "Sikh",
      label: "Sikh"
    },
    {
      value: "Bauddhist",
      label: "Bauddhist"
    },
    {
      value: "Zoroastrian",
      label: "Zoroastrian"
    },
    {
      value: "Jain",
      label: "Jain"
    },
    {
      value: "Judaism",
      label: "Judaism"
    },
    {
      value: "Non-Religious",
      label: "Non-Religious"
    }
  ];

  const castedata = [
    {
      value: "Yadav",
      label: "Yadav"
    },
    {
      value: "Sahu",
      label: "Sahu"
    },
    {
      value: "Verma",
      label: "Verma"
    },
    
   
  ];

  const incomedata = [
    {
      value: "100000",
      label: "100000"
    },
    {
      value: "200000",
      label: "200000"
    },
    {
      value: "500000",
      label: "500000"
    },
    
  ];

  // set value for default selection
  const [cityValue, setcityValue] = useState(null);
  const [degree, setDegree] = useState(null);
  const [religion, setReligion] = useState(null);
  const [caste, setCaste] = useState(null);
  const [income, setIncome] = useState(null);
  const [selected,setSelected] = useState("");


  

  const handleSelected = (u) =>{
    setSelected(u);
    setShow(true);
   
   
  }




  const handleConnect = async(receiver) =>{


    const auth = getAuth();
    const sender = auth.currentUser;

   
    var p1 = sender.uid;
    var p2 = receiver.uid;

    // console.log(sender.uid);
    // console.log(receiver.uid);

    const docRef = doc (db,`users`,`${p1}`);
    const docSnap = await getDoc(docRef);
    const senderName = docSnap.data().username;

    const docRef2 = doc (db,`users`,`${p2}`);
    const docSnap2 = await getDoc(docRef2);
    const receiverName = docSnap2.data().username;


   var key1 = p1;
   var obj1 = {};
   
   obj1[key1] = senderName;

   var key2 = p2;
   var obj2 = {};
   
   obj2[key2] = receiverName;

    // receiving
     const receivedRef = doc (db,`users/${receiver.uid}`);
      await  updateDoc(receivedRef,  {
        receivedrequests: arrayUnion(obj1)
       })
    

       //sending
      const sendRef = doc (db,`users/${sender.uid}`);
        await updateDoc(sendRef,  {
        sentrequests: arrayUnion(obj2)
       })

      //  setShowAlert(true);
      alert("Connection sent!")


  }

  




  // handle onChange event of the dropdown
  const handleChange = e => {
    setcityValue(e.value);
  }

  const handleDegree = e => {
    setDegree(e.value);
    // applyFilter();
  }
  const handleReligion = e => {
    setReligion(e.value);
  }
  const handleCaste = e => {
    setCaste(e.value);
  }
  const handleIncome = e => {
    setIncome(e.value);
  }

  const [members, setmembers] = useState([]);

  
  const [prev, setPrev] = useState([]);

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [flag,setFlag] = useState(true);
  const [castesList,setCasteList] = useState([])

  const fetchCastes = async () => {
   
    const docRef = doc(db, `admindata`, "castedata")
    const docSnap = await getDoc(docRef)
  
    const data = docSnap.exists() ? docSnap.data() : null
  
    if (data === null || data === undefined) return null
  
    
    setCasteList(data.castes);


    
  
    };


  const getAllmembers = async () => {
    return await getDocs(collection(db, "users"));
   
  };

  const fetchAllmembers = async () => {
    const result = await getAllmembers();

    if (!result) {
      return;

    }

    var tempmembers1 = [];
    result.forEach((doc) => tempmembers1.push({ ...doc.data(), pid: doc.id }));

    tempmembers1 = tempmembers1.sort((a, b) => Number(b.featured) - Number(a.featured));


    setmembers(tempmembers1);
    setFlag(false)
    setPrev(tempmembers1);

  };


  const applyFilter = async() =>{

    setFlag(true)

    const q1 = query(collection(db, "users"), and(
                                             where("caste", "==", caste),
                                             where("degree", "==", degree),
                                             where("income", "==", income),
                                             where("religion", "==", religion),
                                             where("workplace", "==", cityValue)
                                             ));
                                             
    const q2 = query(collection(db, "users"),
                                             or(
                                              and(
                                                 where("caste", "==", caste),
                                                 where("degree", "==", degree),
                                                 where("income", "==", income),
                                                 where("religion", "==", religion),
                                                 where("workplace", "==", cityValue)
                                                 ),
                                                 or(
                                                  where("caste", "==", caste),
                                                  where("degree", "==", degree),
                                                  where("income", "==", income),
                                                  where("religion", "==", religion),
                                                  where("workplace", "==", cityValue)
                                                   )
                                                   

                                             ) 
                                           
                                             );



    const querySnapshot = await getDocs(q2);
   
    var tmp = [];
    querySnapshot.forEach((doc) => tmp.push({ ...doc.data(), pid: doc.id }));

    tmp = tmp.sort((a, b) => Number(b.featured) - Number(a.featured));
    setmembers(tmp);
    setFlag(false)

  }

  const clearFilter = () =>{
    // console.log("cleared");
    setFlag(true)
    setmembers(prev)
    setFlag(false)
    setCaste(null);
    setDegree(null);
    setcityValue(null);
    setIncome(null);
    setReligion(null);
  }


  const productList = ["blue pant"
  , "black pant"
  , "blue shirt"
  , "black shoes"
  , "brown shoes"
  , "white pant"
  , "white shoes"
  , "red shirt"
  , "gray pant"
  , "white shirt"
  , "golden shoes"
  , "dark pant"
  , "pink shirt"
  , "yellow pant"];

  function handleSearchClick() {
      if (searchVal === "") { setmembers(members); return; }
      // console.log(searchVal);
      const filterBySearch = members.filter((item) => {
          if (item.fullName.toString().toLowerCase()
              .includes(searchVal.toString().toLowerCase())) { return item; }
      })
      setmembers(filterBySearch);
      console.log((filterBySearch));
  }


 

  useEffect(() => {

    fetchAllmembers();
    // eslint-disable-next-line
  }, []);


  const mystyle = {
    

  color: "red",
  cursor: "pointer",
  width: "20px",
  marginTop: "20px",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "100px"
};
   

  return (
    <div className='container mc'>
     <div className="searchBarwrapper">
  <div id="search-scontainer">

 

    <input type="search" onChange={e => setSearchVal(e.target.value)} id="search-input" placeholder={t('Search here')} />
    
 
    <button style={{backgroundColor:"rgb(218 221 228 / 58%)",borderRadius:"200px",cursor:"pointer"}} onClick={handleSearchClick} >🔍</button>
    <button id="searchbtn" style={{backgroundColor:"#060047",cursor:"pointer"}} type='submit' onClick={applyFilter} >{t('Search')}</button>
    <button id="clr"style={{backgroundColor:"#ff0062",cursor:"pointer"}}  type='submit' onClick={clearFilter} > {t('Clear Filter')} </button>
  </div>
 

  <div id="buttons d-flex flex-row">
    
  <div className="container selectContainer">
 
  <div className="row">
    <div className="col">



    <Select
        placeholder={t("City")}
        // className='button-value'
        value={data.filter(obj => obj.value === cityValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    </div>
    <div className="col">
    <Select
        placeholder={t('Income')}
        // className='button-value'
        value={incomedata.filter(obj => obj.value === income)} // set selected value
        options={incomedata} // set list of the data
        onChange={handleIncome} // assign onChange function
      />
    </div>
    <div className="col">
    <Select
        placeholder={t('Religion')}
        // className='button-value'
        value={religiondata.filter(obj => obj.value === religion)} // set selected value
        options={religiondata} // set list of the data
        onChange={handleReligion} // assign onChange function
      />
    </div>
    <div className="col">
    <Select
        placeholder={t("Caste")}
        // className='button-value'
        value={castedata.filter(obj => obj.value === caste)} // set selected value
        options={castedata} // set list of the data
        onChange={handleCaste} // assign onChange function
      />
    </div>
    <div className="col">
  

<Select
        placeholder={t("Qualification")}
        // className='button-value'
        value={degreedata.filter(obj => obj.value === degree)} // set selected value
        options={degreedata} // set list of the data
        onChange={handleDegree} // assign onChange function
      />
    </div>
  </div>
</div>

   
   
  </div>
  <div  />

</div>
        
   <div className="container membercontainer">

   {
      members.length === 0 && !flag &&
  (

    <div className="" >

   
    
      <img style={{
        height:"50%",
        width:"50%",
        marginLeft:"25%",
        justifyContent:"center",
      
      }} src={errorimg}   alt="..." />
    
    </div>

  )
      
   }

   { flag && 
          <Spinner/>
   }

  <div className="row row-cols-1  row-cols-md-4 ">

   

  { members.map((item) => (
 
    <div className="col-sm-4" key={item.uid}>
      <div className="card " style={{
        width: '100%',
        borderRadius:"20px",
        boxShadow: '0 5px 10px rgba(0,0,0,0.30)',
        marginTop:"40px"
        }}>

      <div className="cardheader" style={{width:"288px",paddingLeft:"8%"}}>

      {
            (item.featured) ?
            <MDBBadge color='warning' light>Premium</MDBBadge>:
            <MDBBadge color='secondary' light>Free</MDBBadge>

          }

      </div>

      <div className="avatar" style={{marginLeft:"10%"}}>
        <img src={item.url}  className="card-img-top" alt="..." />
                   
                </div>
      
     
 
        
        {/* <img src={item.url}  className="card-img-top" alt="..." /> */}
        <div className="card-body">

          {(item.fullName == "")?
             <h5 className="card-title"> xyz abc </h5>
             :
             <h5 className="card-title"> {item.fullName} </h5>
             }
          {/* <h5 className="card-title"> {item.fullName} </h5> */}
   
       
          <p className="card-text">

           {
            (item.bio)?
            <p className='addes'> {item.bio}</p>:
            <p className='addes'>  Instagram bio does a great job of describing her</p>

           }
         

          {/* Qualification : {item.degree} <br/> */}
          {t('Gender')} : {item.gender} <br/>
          {/* Religion : {item.religion} <br/> */}
          {t('Caste')} : {item.caste}
         
          </p>


      <div >

      {/* <Button className='detailBtn' variant="primary" onClick={() => handleSelected(item)}>Full Details</Button> */}
      {/* <h6 className="connectBtn" variant="secondary" onClick={() => handleConnect(item)}>  connect  </h6> */}
      {/* <MDBBtn outline rounded onClick={() => handleConnect(item)}>
      connect
      </MDBBtn> */}

<div className="buttons d-flex flex-row">
  <button className="primary"  onClick={() => handleSelected(item)}>
   {t('Details')}
  </button>
  <button className="primary ghost" onClick={() =>{
    //  setSelected(item);
     handleConnect(item)
  }} >
  {t('Connect')}
  </button>
</div>


      


        </div>
      

  

       

     <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
       
        

      
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {selected.fullName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                className="rounded-circle mt-5"
                width="150px"
                alt='img'
                src={selected.url}
                // src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{selected.username}</span>
              <span className="text-black-50">{selected.email}</span>
              <span> </span>
            </div>
          </div>
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
        </Modal.Body>
      </Modal>


        </div>
        
      </div>


    </div>

      ))}




  </div>
  
</div>

 </div>
  )
}

export default Search