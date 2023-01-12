import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PuppyInfo } from "../types";
import "./Home.css";
import doodle from '../doodle.png';

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
        <section className="homePage" style={{ backgroundImage: `url(${doodle})` }}>
            <h1>Hey there! Here is our {puppyData.length} puppies available for adoption!</h1>
            <ul className="puppy-list">
                {
                    puppyData.map(puppy => 
                        <li key={puppy.puppyId} className="listed-puppies">
                         <Link to={`/details/${puppy.puppyId}`}>   <h3>{puppy.name}</h3></Link>
                            </li>)
                }
            </ul>
        </section>
    )
}

export default Home;