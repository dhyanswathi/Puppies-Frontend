import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
              birthDate: data.birthDate
            }
          });
        }
        getData();
      },);
    

    return (
        <div>
            <h2>{puppy.name}</h2>
            <p>{puppy.breed}</p>
            <p>{puppy.birthDate}</p>
        </div>
    )
}

export default PuppyDetails;