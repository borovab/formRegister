import React, { useState, useEffect, useRef } from "react";
import Input from "./Input";
import {regex, firstnameRegex, emailRegex, passwordRegex} from './regex'
import './Form.css'

const Form = () => {

  //1 usestate per te dhenat.
  const [data, setDatabase] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // referencat per emer, mbiemer ,email ,password.
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  // funksioni per handle formen /////[te gjitha datat], merre emrin ndryshoja [vleren]
  const handleInput = (e) =>
    setDatabase({ ...data, [e.target.name]: e.target.value });


  
  //ni use efect qe nvaret prej data(te dhenave)
  //regexi thirret si funksion ktu me propsat qe i ka atje
  useEffect(() => {
    regex(data, { firstnameRef, lastnameRef, emailRef, passwordRef });
  }, [data,]);


  const [buttonClicked, setButtonClicked] = useState(false);
//ni usestate per butonin 


//useeefecti qe nvaret prej emrit mbiemrit emailit paswordit per ti dhen atribut butonit true apo false.
  useEffect(() => {
    if (
      firstnameRegex.test(data.firstname) &&
      firstnameRegex.test(data.lastname) &&
      emailRegex.test(data.email) &&
      passwordRegex.test(data.password)
    ) {
      setButtonClicked(true);
    } else {
      setButtonClicked(false);
    }
  }, [data.firstname, data.lastname, data.email, data.password]);

  
  return (
    <div className="form-group">
      <h3>Please fill the form.</h3>
      <Input
        label={"Firstname"}
        type="text"
        value="value"
        name="firstname"
        inputHandler={handleInput}
        inputRef={firstnameRef}
      />
      <Input
        label={"Lastname"}
        type="text"
        value="value"
        name="lastname"
        inputHandler={handleInput}
        inputRef={lastnameRef}
      />
      <Input
        label={"Email"}
        type="text"
        value="value"
        name="email"
        inputHandler={handleInput}
        inputRef={emailRef}
      />
      <Input
        label={"Password"}
        type="password"
        value="value"
        name="password"
        inputHandler={handleInput}
        inputRef={passwordRef}
      />
      <div className="button-container">
        <button disabled={!buttonClicked} className="btn">Register</button>
      </div>
    </div>
  );
};

export default Form;
