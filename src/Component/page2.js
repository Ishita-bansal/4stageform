import "./Style.css";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
function Page2() {
     const [address1,setaddress1] = useState('');
     const [address2,setaddress2] = useState('');
     const [checked,setChecked]=useState(true)
     const navigate = useNavigate();
   

function getaddressdata(e){
         console.log(address1 + " " + address2);

         if(address1 === "" && address2 === ""){
            alert("invalid data");
         }
          
         else{
        navigate('/page3');
         }
    }
return (
    <div className="add">
      <div className="address">
        <form onSubmit={getaddressdata}>
      <div className="backbtn">
        <button type="button" onClick={()=>{navigate('/')}}>Back</button>
        </div>  
        <div className="item">
          <label>Address:</label>
          <textarea onChange = {(e)=>{setaddress1(e.target.value)}} value={address1} rows="5" cols="50"></textarea>
        </div>
        <div className="item">
          <div className="check">
            <input type="checkbox"  checked={!checked} onChange={()=>setChecked(!checked)}/>
            <label>Is Above Address Same?</label>
          </div>
          {checked && <textarea onChange = {(e)=>{setaddress2(e.target.value)}} value={address2} rows="5" cols="50"></textarea>}
          
        </div>
        <div className="btn">
        <button type="submit">Next</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Page2;
