import React, {useState} from "react"; 
import './GetTouchForm.css';
// firebase
import {db} from '../../firebase';


function GetTouchForm() {
  const[email, setEmail]= useState(null);
  const[emailError, setEmailError]= useState(null);
  const[phoneError, setPhoneError]= useState(null);
  const[name, setName]= useState(null);
  const[phone, setPhone]= useState(null);
  const[message, setMessage]= useState(null);
  
// Email validation function
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

  // Phone Validation function
  function phoneValidation(e) {
    const tempPhone = e;
    const re = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
    const isValidPhone = re.test(String(tempPhone).toLowerCase());
    // if((tempPhone.length===10)) {
    //   return setIsValidPhone === true;
    // } 
    console.log(isValidPhone);

    if(isValidPhone === false){
      setPhoneError("Please Enter valid  Number")
    }else{
      setPhoneError(null)
    }
    return isValidPhone
  }

/////////// Email Verification ///////////////////////
 
    const [Error, setError] = useState("");
//   adding data to firebase
    function addToFirestore(e) {
    e.preventDefault();
    if(!name || name===" " || !email || email === " " || !phone || phone === " "|| !message || message === " "){
     console.log("no valid entry")
     setError("please enter all valid details ");
    return
   }

    // email validation fuction retunring false  if not valid then we should add ! to make if true because we need to terminate function
    if(emailValidation(email)===false){
      return
    }
    //console.log(emailError, "emailerror");
    if(phoneValidation(phone)===false){
      return
    }

    db.collection("users")
      .add({
        name: name,
        email: email,
        message: message,
        phone: phone,
      })
      .then(async function (docRef) {
        //emailVerification();
        console.log("added the data to firestore ");
        const {id} = docRef ;
        console.log(docRef.id);
        console.log(id);
      })
      .catch(  function (error) {
        console.log("this is my error ", error);
      });

      clear();
  }

  function clear() {
    setName("");
    setEmail(""); 
    setMessage("");
    setPhone("");
    setError("Form has been submitted. Thank you for opting our services");
  }


  return (
    <>
      {/* form section */} 

      {/* {isDelivered ? <h1>your message has been send to the admin </h1> : */}
      <form>
                <h2>Get in Touch</h2>
                
                <div>
                  <input
                placeholder="Name"
                type="text"
                name="firstname"
                required
                onChange={e=>setName(e.target.value)}
                value={name}

              />
              </div>

              {/* email */}
              <div>
              <input
                placeholder="Email"
                type="email"
                name="firstname"
                required
                onChange= {e=>setEmail(e.target.value)}
                value={email}
              />
              <p>{emailError}</p>
              </div>

                {/* Phone number */}
                <div>
                <input
                placeholder="Phone Number"
                type="number"
                name="firstname"
                required
                onChange={e=>setPhone(e.target.value)}
                value={phone}
              />
              <p>{phoneError}</p>
              </div>

                {/* Message */}
              <div>
                <textarea
                placeholder="Message"
                name="description"
                rows="4" cols="20"
                required
                onChange={e=>setMessage(e.target.value)}
                value={message}
                ></textarea>
              <p>{Error}</p>

              </div>  

            <div>
            <button
            className=""
            type="submit"
            onClick={addToFirestore}
            // onClick={() => history.push("/")}
          >
            Submit
          </button>
          </div>

      </form>
 
              
    </>
  )
}
export default GetTouchForm;
