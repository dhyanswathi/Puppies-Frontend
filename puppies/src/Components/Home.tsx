import React, { useEffect, useState } from "react";
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
            <h1>{puppyData.length}</h1>
        </div>
    )
}

export default Home;