import "./Style.css";
import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import back from './images/background.jpg'
function Page2() {
     const [address1,setaddress1] = useState('');
     const [address2,setaddress2] = useState('');
     const [checked,setChecked]=useState(true);
     const navigate = useNavigate();
   

     useEffect(()=>{
      const storedUserData = localStorage.getItem("UserInfo");
      if(storedUserData){
        const userData = JSON.parse(storedUserData);
        setaddress1(userData.PermanentAddress);
        if(userData.checkAddress != 'true')
        {
          setaddress2(userData.PermanentAddress);
        }
        else{
          setaddress2(userData.CorresponsingAddress);
        }
       setChecked(userData.checkAddress);
      
      }
     },[]);

function getaddressdata(e){
  e.preventDefault()

         if(address1===""&& address2===""){
          console.log("enter a valid email")
         }
         else{
          let userAddressInfo = {
            PermanentAddress : address1,
            CorresponsingAddress: address2,
            checkAddress : checked 
          };
     let userData = localStorage.getItem("UserInfo");
     if(userData){
      userData = JSON.parse(userData);
      userData={...userData,...userAddressInfo}
     }
  console.log(userData.checkAddress);
  localStorage.setItem("UserInfo" , JSON.stringify(userData));
        navigate('/page3');
         }
    }
return (

    <div className="add"> 
    <div className="left">
       <img src={back} height="455" width="450" alt=""/>
   </div>
        <form onSubmit={getaddressdata}>
      <div className="backbtn">
        <button type="button" onClick={()=>{navigate('/')}}>Back</button>
        </div>  
        <div className="item">
          <label>Address:</label>
          <textarea onChange = {(e)=>{setaddress1(e.target.value)}} value={address1} rows="3" cols="35"></textarea>
          
          {
           address1 > 10 &&
               <span style={{color:'red'}}>address must be of length 10</span>
          }
         
        </div>
        <div className="item">
          <div className="check">
            <input type="checkbox"  checked={!checked} onChange={()=>setChecked(!checked)}/>
            <label>Is Above Address Same?</label>
          </div>
          {checked && <textarea onChange = {(e)=>{setaddress2(e.target.value)}} value={address2} rows="3" cols="35"></textarea> }
         </div>
          {
          address2 > 10  &&
               <span style={{color:'red'}}>address must be of length 10</span>
          }      
        <div className="btn">
        <button type="submit">Next</button>
        </div>
        </form>
      </div>
   
  );
}

export default Page2;
