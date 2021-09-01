import React, {useState} from "react";
import "./DistributorForm.css";
import { useHistory } from "react-router-dom";
import {db} from "../../firebase"

function DistributorForm() {
  const history = useHistory();

  const[name, setName]= useState(null);
  const[Error, setError]= useState(null);
  const[emailError, setEmailError]= useState(null);
  const[phoneError, setPhoneError]= useState(null);
  const[Company_name, setCompanyName]= useState(null);
  const[District, setDistrict]= useState(null);
  const[Email, setEmail]= useState(null);
  const[address, setAddress]= useState(null);
  const[city, setCity]= useState(null);
  const[experience, setExperience]= useState(null);
  const[number, setNumber]= useState(null);
  const[pincode, setPincode]= useState(null);
  const[state, setState]= useState(null);
  const[taluka, setTaluka]= useState(null);
  const[turnover, setTurnover]= useState(null);

  function emailValidation(e) {
    const tempEmail = e;
    const re = /\S+@\S+\.\S+/;
    // re is regex  
    const isValidEmail = re.test(String(tempEmail).toLowerCase());
    console.log(isValidEmail)
    if(isValidEmail===false){
      setEmailError("Please Enter valid email address")
    }else{
      setEmailError(null)
    }
    return isValidEmail
  }

  function phoneValidation(e) {
    const tempPhone = e;
    const re = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
    const isValidPhone = re.test(String(tempPhone).toLowerCase());
    console.log(isValidPhone);

    if(isValidPhone === false){
      setPhoneError("Please Enter valid  Number")
    }else{
      setPhoneError(null)
    }
    return isValidPhone
  }

  function addToRetailer(e) {
    if(!name || name===" " || !Email || Email === " " || !number || number === " "|| !address || address === " " || !Company_name || Company_name === " "
    || !city || city === " " || !pincode || pincode === " " || !state || state === " "){
      console.log("no valid entry")
      setError("please enter all valid details ");
     return
    }

    // email validation fuction retunring false  if not valid then we should add ! to make if true because we need to terminate function
    if(emailValidation(Email)===false){
      return
    }
    console.log(emailError, "emailerror");
    
    if(phoneValidation(number)===false){
      return
    }
    console.log(phoneError, "phoneError");

    db.collection("DISTRIBUTOR_RETAILER")
      .add({
        name: name,
        Email: Email,
        Company_name: Company_name,
        number: number,
        experience: experience,
        address: address,
        city: city,
        District: District,
        pincode: pincode,
        state: state,
        taluka: taluka,
        turnover: turnover,
      })
      .then(async function (docRef) {
        console.log("added the data to firestore ");
        const {id} = docRef ;
        console.log(docRef.id);
        console.log(id);
        docRef.set({
            id
        },{
          merge:true
        }
        );
        
        // clear inputfield
        // now we will fetch the data from firestore what doc mwe addded 
        // const data = await db.collection('users').doc(id).get();
      })
      .catch(  function (error) {
        console.log("this is my error ", error);
      });

      // clear the values
      clear();
    }

    function clear() {
      setName("");
      setEmail(""); setCompanyName(""); setNumber(""); setCity(""); setPincode(""); setState("");
      setDistrict(""); setAddress(""); setExperience(""); setTaluka(""); setTurnover("");
      setError("");
    }

  return (
    <>
      <div className="Distributor_form">
        {/*  */}
        <div className="franchise_container">
          <p>Fill in your details to become an authorized DISTRIBUTOR / RETAILER</p>
          {/* <small>Fields marked (*)  are mandatory</small> */}
        </div>
        <form>
          {/* name */}
              <div className="inputfield">
                  <input
                placeholder="Name"
                type="text"
                name="firstname"
                onChange={e=>setName(e.target.value)}
                value={name}
                // onChange={this.handleChange}
              />
              </div>
      
              <div className="inputfield">
                  <input
                placeholder="company Name"
                type="text"
                name="firstname"
                onChange={e=>setCompanyName(e.target.value)}
                value={Company_name}
                // onChange={this.handleChange}
              />
              </div>
 
              <div className="inputfield">
                  <input
                placeholder="Email"
                type="email"
                name="firstname"
                onChange={e=>setEmail(e.target.value)}
                value={Email}
              />
              <p>{emailError}</p>
              </div>
            
              <div className="inputfield">
                  <input
                placeholder="contact number"
                type="number"
                name="firstname"
                onChange={e=>setNumber(e.target.value)}
                value={number}
              />
              <p>{phoneError}</p>
              </div>
        
            {/* Address */}
            <div className="inputfield_address">
                  <input
                placeholder="Address"
                type="text"
                name="firstname"
                onChange={e=>setAddress(e.target.value)}
                value={address}
                />
              </div>
 
            {/* city */}
            <div className="inputfield">
                  <input
                placeholder="City"
                type="text"
                name="firstname"
                onChange={e=>setCity(e.target.value)}
                value={city}

                // onChange={this.handleChange}
              />
              </div>
            
            {/* pincode */}
            <div className="inputfield">
                  <input
                placeholder="Pincode"
                type="text"
                name="firstname"
                onChange={e=>setPincode(e.target.value)}
                value={pincode}

                // onChange={this.handleChange}
              />
              </div>
            
            {/* distinct */}
            <div className="inputfield">
                  <input
                placeholder="Distinct"
                type="text"
                name="firstname"
                onChange={e=>setDistrict(e.target.value)}
                value={District}

                // onChange={this.handleChange}
              />
              </div>
           
           {/* state */}
           <div className="inputfield">
                  <input
                placeholder="State"
                type="text"
                name="firstname"
                onChange={e=>setState(e.target.value)}
                value={state}

                // onChange={this.handleChange}
              />
              </div>
          
          {/* Taluka */}
          <div className="inputfield">
                  <input
                placeholder="Taluka"
                type="text"
                name="firstname"
                onChange={e=>setTaluka(e.target.value)}
                value={taluka}

                // onChange={this.handleChange}
              />
              </div>
 
        {/* turnover */}
        <div className="inputfield inputfield_experience">
                  <input
                placeholder="TurnOver"
                type="text"
                name="firstname"
                onChange={e=>setTurnover(e.target.value)}
                value={turnover}

                // onChange={this.handleChange}
              />
              </div>
 
 {/* experience */}
 <div className="inputfield inputfield_experience">
                  <input
                placeholder="Experience"
                type="text"
                name="firstname"
                onChange={e=>setExperience(e.target.value)}
                  value={experience}

                // onChange={this.handleChange}
              />
              <p>{Error}</p>
              </div>

              {/* submit button */}
              <button 
              type="submit" onClick={addToRetailer}>Submit</button>
 
        </form>
      </div>

    </>
  );
}

export default DistributorForm;
