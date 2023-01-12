import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add () {
    const [ name, setName ] = useState('');
    const [ breed, setBreed ] = useState('');
    const [ birthDate, setBirthDate ] = useState('');

    let navigate = useNavigate();

    function onSubmit(){
        axios.post(`https://localhost:7220/api/Puppies`, {
            name: name,
              breed: breed,
              birthDate: birthDate
        }).catch(error => {
            console.log(error)
        });
        navigate("/");
      }

    return (
        <section>
        <form className="add">
            <input className="add-form" type="text" onChange={(e) => setName(e.target.value)}
           ></input>
            <input className="add-form" type="text" onChange={(e) => setBreed(e.target.value)}
          ></input>
            <input className="add-form" type="text" onChange={(e) => setBirthDate(e.target.value)}
          ></input>
        <button type="submit" id="form-btn"
      onClick={onSubmit}>
      Submit
    </button>
        </form>
    </section>
    )
}

export default Add;