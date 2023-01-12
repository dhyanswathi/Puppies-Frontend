import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doodle from '../doodle.png';
import './Add.css';
import Header from "./Header";

function Add () {
    const [ name, setName ] = useState('');
    const [ breed, setBreed ] = useState('');
    const [ birthDate, setBirthDate ] = useState('');

    let navigate = useNavigate();

    function onSubmit(){
        axios.post(`https://localhost:7220/api/Puppies?name=${name}&breed=${breed}&birthDate=${birthDate}`).catch(error => {
            console.log(error)
        });
        navigate("/");
      }

    return (
        <section className="add-puppy" style={{ backgroundImage: `url(${doodle})` }}>
            <Header></Header>
            <h2>Add details of the puppy here!</h2>
        <form className="add">
        <label htmlFor='name'>Name</label><br/>
            <input className="add-form" type="text" onChange={(e) => setName(e.target.value)}
           ></input><br/>
            <label htmlFor='breed'>Breed</label><br/>
            <input className="add-form" type="text" onChange={(e) => setBreed(e.target.value)}
          ></input><br/>
          <label htmlFor='date'>Date of Birth</label><br/>
            <input className="add-form" type="text" onChange={(e) => setBirthDate(e.target.value)}
          ></input><br/>
        <button type="submit" id="form-btn"
      onClick={onSubmit}>
      Submit
    </button>
        </form>
    </section>
    )
}

export default Add;