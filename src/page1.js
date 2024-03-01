import React,{useState} from 'react';
import './Style.css';
function Page1(){
      const [name,setName] = useState('');
      const [date,setDate] = useState('');
      const [email ,setEmail] =useState('');
      const [gender ,setGender] =useState('');

    function getformdata(e){
        console.log(name + " " + date + " " + gender + " " + email);
        e.preventDefault();
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
     <button type="submit" ><a href="page2">Next</a></button>
     </div>
   </form>
 </div>
    )
}

export default Page1;