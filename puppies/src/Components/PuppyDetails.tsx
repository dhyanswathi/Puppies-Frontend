import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PuppyInfo } from "../types";

function PuppyDetails() {
    const params  = useParams();
    const [puppy, setPuppy] = useState<PuppyInfo>({
        name: '',
        breed: '',
        birthDate: '',
        puppyId: 0
      });

      useEffect(() => {
        const getData = async () => {
          const response = await fetch(`https://localhost:7220/api/Puppies/${params.id}`);
          const data = await response.json();
    
          setPuppy(prev => {
            return {
              ...prev,
              name: data.name,
              breed: data.breed,
              birthDate: data.birthDate,
              puppyId: data.puppyId
            }
          });
        }
        getData();
      },);

      let navigate = useNavigate();
    
      const updatePuppy = () => {
        localStorage.setItem("Name", puppy.name);
        localStorage.setItem("Breed", puppy.breed);
        localStorage.setItem("BirthDate", puppy.birthDate);
        localStorage.setItem("Id", puppy.puppyId.toString());
        navigate("/edit");
      }

      const deletePuppy = () => {
        axios.delete(`https://localhost:7220/api/Puppies/${params.id}`);
        navigate("/");
      }

    return (
        <section>
            <h2>{puppy.name}</h2>
            <p>{puppy.breed}</p>
            <p>{puppy.birthDate}</p>
            <button id="update-puppy" onClick={updatePuppy}>Update</button>
            <button id="delete-puppy" onClick={deletePuppy}>Delete</button>
        </section>
    )
}

export default PuppyDetails;