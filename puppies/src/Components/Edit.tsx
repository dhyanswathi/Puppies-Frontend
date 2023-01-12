import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Edit () {
    const initialContact = {
        Name: localStorage.getItem("Name"),
        Breed: localStorage.getItem("Breed"),
        BirthDate: localStorage.getItem("BirthDate"),
        Id: localStorage.getItem("Id")
    }

    const [info, setInfo] = useState(initialContact);
    let navigate = useNavigate();

    const handleChangeFor = (propertyName: string) => (event: { target: { value: string; }; }) => {
        setInfo((info) => ({
          ...info,
          [propertyName]: event.target.value,
        }));
      };

      const Id = localStorage.getItem("Id");

      function onSubmit(){
        axios.put(`https://localhost:7220/api/Puppies/${Id}`, {
            method: 'PUT',
            data: {
                name: info.Name,
                breed: info.Breed,
                birthDate: info.BirthDate
            } 
        }).catch(error => {
            console.log(error)
        });
        localStorage.clear();
        navigate("/");
      }

    return (
        
        <section>
            <h2>Update details of the puppy here!</h2>
            <form className="edit">
            <label htmlFor='name'>Name</label><br/>
                <input className="name" type="text" onChange={handleChangeFor("Name")}
              value={info.Name as string} ></input><br/>
              <label htmlFor='breed'>Breed</label><br/>
                <input className="breed" type="text" onChange={handleChangeFor("Breed")}
              value={info.Breed as string}></input><br/>
              <label htmlFor='date'>Date of Birth</label><br/>
                <input className="date" type="text" onChange={handleChangeFor("BirthDate")}
              value={info.BirthDate as string}></input><br/>
            <button type="submit" id="form-btn"
          onClick={onSubmit}>
          Submit
        </button>
            </form>
        </section>
    )
}

export default Edit;