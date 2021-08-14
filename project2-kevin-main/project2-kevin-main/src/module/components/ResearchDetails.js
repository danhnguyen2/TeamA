import React from "react";
import details from "../../data";
import './ResearchDetails.css';

const ResearchDetails = (props) => {
 let id = props.match.params.citationNumber
 const post = details.map(info => {
   return(
       <div className="container" key={info.citationNumber}>
       {info.citationNumber == id ? (<div>
        <img src={info.img} />
        <p><h3>Shape: </h3>{info.shape}</p>
        <p><h3>Vase Number: </h3>{info.vaseNumber}</p>
        <p><h3>Location: </h3>{info.location}</p>
        <p><h3>Description: </h3>{info.description}</p>
        <p><h3>Reference: </h3>{info.reference}</p>
        </div>) : (<></>)}</div>
   )
 })

    return(
        <div style={{color: "white"}}>
        {post}
        </div>
    )
}

export default ResearchDetails;