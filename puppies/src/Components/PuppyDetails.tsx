import React from "react";
import { useParams } from "react-router-dom";

function PuppyDetails() {
    const params  = useParams();
    console.log(params.id);
    return (
        <div></div>
    )
}

export default PuppyDetails;