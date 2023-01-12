import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PuppyInfo } from "../types";

function Home() {
    const [puppyData, setPuppyData] = useState<PuppyInfo[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://localhost:7220/api/Puppies");
            const puppyResults = await response.json();
            setPuppyData(puppyResults);
        }
        getData();
    }, []);

    return (
        <div className="homePage">
            <h1>Hey there! Here is our {puppyData.length} puppies available for adoption!</h1>
            <ul>
                {
                    puppyData.map(puppy => 
                        <li key={puppy.puppyId}>
                         <Link to={`/details/${puppy.puppyId}`}>   <h3>{puppy.name}</h3></Link>
                            </li>)
                }
            </ul>
        </div>
    )
}

export default Home;