import { Outlet } from "react-router-dom";
import "./Style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from './images/background.jpg'
function Page4() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    Date: "",
    Email: "",
    Gender: "",
    PermanentAddress : "",
    CorresponsingAddress: "",
    checkAddress :"",
    creditcard: "",
    expirydate: "",
    username: "",
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("UserInfo"));
    if (userData) {
      setFormData(userData);
    }
  }, []);

  function getfinaldata(e) {
    e.preventDefault();
    if(formData === ""){
       alert("user not fill all data")
    }
    else{
        alert("successfully Submitted");
        setFormData('');
    }
  }

  return (
    <div className="page4">
       <div className="left">
       <img src={back} height="455" width="450" alt=""/>
   </div>
      <form onSubmit={getfinaldata}>
        <div className="backbtn">
          <button type="button" onClick={() => { navigate("/page3");}} >Back</button>
        </div>
        <div>
          <h3>All User Details</h3>
        </div>
        <div className="items">
          <label>Name:</label>
          <span>{formData.Name}</span>
        </div>
        <div className="items">
          <label>DOB:</label>
          <span>{formData.Date}</span>
        </div>
        <div className="items">
          <label>Gender:</label>
          <span>{formData.Gender}</span>
        </div>
        <div className="items">
          <label>Email:</label>
          <span>{formData.Email}</span>
        </div>
        <div className="items">
          <label>Address:</label>
          <span>{formData.PermanentAddress}</span>
        </div>
        <div className="items">
          <label>Other Address:</label>
          <span>{formData.CorresponsingAddress}</span>
        </div>
        <div className="items">
          <label>Credit Number:</label>
          <span>{formData.creditcard}</span>
        </div>
        <div className="items">
          <label>Expiry Date:</label>
          <span>{formData.expirydate}</span>
        </div>
        <div className="items">
          <label>Other Name:</label>
          <span>{formData.username}</span>
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
      <Outlet />
    </div>
  );
}

export default Page4;
