import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import back from './images/background.jpg'
import './Style.css';
function Page1(){
    const navigate = useNavigate();
      const [name,setName] = useState('');
      const [date,setDate] = useState('');
      const [email ,setEmail] =useState('');
      const [gender ,setGender] =useState('');
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      useEffect(() => {

        if(localStorage.getItem("UserInfo")!==null)
        {
         const storedUserData = localStorage.getItem("UserInfo");
        if (storedUserData!==null) {
            const userData = JSON.parse(storedUserData);
            setName(userData?.Name);
            setDate(userData?.Date);
            setEmail(userData?.Email);
            setGender(userData?.Gender);
        }
      }
    }, []);
   


    function getformdata(e){
       e.preventDefault();
       if (name === "" || !date || gender === "" || !email.match(emailRegex)) {
        console.log("Form fields are not properly filled");
      } 
        else{
            
            const hasData = localStorage.getItem("UserInfo");
            const hasData1 = JSON.parse(hasData);
            console.log(hasData1);
            let UserData = {
                ...hasData1,
                Name : name,
                Date : date,
                Email: email,
                Gender: gender 
            }
         localStorage.setItem("UserInfo" , JSON.stringify(UserData));
     const usersdata = localStorage.getItem("UserInfo");
      const userDetail = JSON.parse(usersdata);
    //         setName(userDetail.name);
    //         setDate(userDetail.date);
    //         setEmail(userDetail.email);
    //         setGender(userDetail.gender);
         console.log("userdata" + userDetail);
            navigate('/page2')
        }

     
        console.log(name + " " + date + " " + gender + " " + email);
        setName('');
        setDate('');
        setEmail('');
        setGender('');


    }

    return(
<div className='formcontain'>
<div className="left">
       <img src={back} height="455" width="450" alt=""/>
   </div>
      <div className='formcontainer'>
     <form onSubmit={getformdata}>
        <div className='items'>
        <label>Name:</label>
       <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name} />
       </div>

       {
       name < 3 &&
       <span style={{color:'red'}}>Name must be greater than 2 characters</span>
       }
       

       <div className='items'>
       <label>DOB:</label>
       <input type="date" onChange={(e)=>{setDate(e.target.value)}} value={date || ''}/>
       </div>
       {
        !date &&
        <span style={{color:'red'}}>*Required</span>
       }
       <div className='items'>
      <label required>Gender:</label>
       <input type='radio' value="male" onChange={(e)=>{setGender(e.target.value)}} checked ={gender === 'male'}/>
        <label>Male</label>
        <input type='radio' value="female" onChange={(e)=>{setGender(e.target.value)}} checked= {gender === 'female'}/>
       <label>Female</label>
       </div>
       {
        gender===""&&
        <span style={{color:'red'}}>*Required</span>
       }
       

       <div className='items'>
       <label>Email:</label>
      <input type='email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
      </div>
      {
       (!email?.match(emailRegex))?
          <span style={{color:'red'}}>Enter valid email</span> : ""
      }
      
      <div className="btn">
     <button className="btns" type="submit" >Next</button>
     </div>
   </form>
 </div>
  
 </div>
 
    )
}

export default Page1;