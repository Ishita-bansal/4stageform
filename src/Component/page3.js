
import { useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import back from './images/background.jpg'
function Page3(){
    const navigate = useNavigate();
    const [Credit,setcredit] = useState('');
    const [personname,setpersonname] = useState('');
    const today = new Date().toISOString().split('T')[0];
    const [expiry , setexpiry] = useState('');
    const creditregex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
    useEffect(()=>{
        const storedUserData = localStorage.getItem("UserInfo");
        if(storedUserData){
          const userData = JSON.parse(storedUserData);
          setcredit(userData.creditcard);
          setexpiry(userData.expirydate);
          setpersonname(userData.username);
        }
    },[]);
   

    
    function getcreditData(e){
       e.preventDefault();
        if(Credit === "" ||expiry=== "" ||   personname===""){
            alert("invalid data");
        }
   
       
        else{
          
            let usercreditInfo={
                creditcard : Credit,
                expirydate : expiry,
                username : personname
            }

            let userData = localStorage.getItem("UserInfo");
            if(userData){
              userData = JSON.parse(userData);
              userData = {...userData , ...usercreditInfo}
            }
         
          localStorage.setItem("UserInfo" , JSON.stringify(userData));
          console.log(userData);
            navigate('/page4');
        }
     console.log(Credit + " "+ expiry + " " + personname);
    }
    return(
  <div className="page3">
     <div className="left">
       <img src={back} height="455" width="450" alt=""/>
   </div>
    <form onSubmit={getcreditData}>
        <div className="backbtn">
        <button type="button" onClick={()=>{navigate('/page2')}}>Back</button>
       
        </div>
        <div className="items">
        <label>Credit Number:</label>
        <input type="number" onChange={(e)=>setcredit(e.target.value)} value={Credit}/>
        </div>
        {
           (!creditregex.test(Credit)) && 
            <span style={{color:'red'}}>Invalid Number</span>
        }
        
        <div className="items">
            <label>Expiry Date:</label>
            <input type="date" onChange={(e)=>setexpiry(e.target.value)} value={expiry} min={today}/>
            </div>
          {
            expiry=== ""&&
            <span style={{color:'red'}}>*Required</span>
          }
    
        <div className="items">
            <label>Name:</label>
            <input type="text" onChange={(e)=>{setpersonname(e.target.value)}} value={personname}/>
            </div>
           {
            personname===""&&
            <span style={{color:'red'}}>*Required</span>
           }
       
        <div className="btn">
            <button type="submit">Next</button>
        </div>
    </form>
   </div>
  )
}

export default Page3;