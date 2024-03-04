import React,{useState,useEffect} from 'react';

import { json, useNavigate } from 'react-router-dom';
import './Style.css';
function Page1(){

    const navigate = useNavigate();
      const [name,setName] = useState('');
      const [date,setDate] = useState('');
      const [email ,setEmail] =useState('');
      const [gender ,setGender] =useState('');

      useEffect(() => {
        const storedUserData = localStorage.getItem("UserInfo");
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setName(userData.Name);
            setDate(userData.Date);
            setEmail(userData.Email);
            setGender(userData.Gender);
        }
    }, []);


    function getformdata(e){
       e.preventDefault();
        if(name.length < 3)
        {
          alert("invalid data");
        }
        else if(email.length === 0){
            alert("invalid Email");
        }
        else{
            let UserData = {
                Name : name,
                Date : date,
                Email: email,
                Gender: gender 
            }
         localStorage.setItem("UserInfo" , JSON.stringify(UserData));
     const usersdata = localStorage.getItem("UserInfo");
      const userDetail = JSON.parse(usersdata);
            setName(userDetail.name);
            setDate(userDetail.date);
            setEmail(userDetail.email);
            setGender(userDetail.gender);
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
 <div className='formcontainer'>
     <form onSubmit={getformdata}>
        <div className='items'>
        <label>Name:</label>
       <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name} />
       </div>

       <div className='items'>
       <label>DOB:</label>
       <input type='date' onChange={(e)=>{setDate(e.target.value)}} value={date}/>
       </div>

       <div className='items'>
      <label required>Gender:</label>
       <input type='radio' value="male" onChange={(e)=>{setGender(e.target.value)}} checked ={gender === 'male'}/>
        <label>Male</label>
        <input type='radio' value="female" onChange={(e)=>{setGender(e.target.value)}} checked= {gender === 'female'}/>
       <label>Female</label>
       </div>

       <div className='items'>
       <label>Email:</label>
      <input type='email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
      </div>
      <div className="btn">
     <button className="btns" type="submit" >Next</button>
     </div>
   </form>
 </div>
    )
}

export default Page1;