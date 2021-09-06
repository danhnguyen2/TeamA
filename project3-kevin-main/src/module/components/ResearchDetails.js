import React from "react";
import details from "../../data";
import Download from "./Download";
import './ResearchDetails.css';

const ResearchDetails = (props) => {
  let id = props.match.params.citationNumber;

  const post = details.map(info => {
    return (
      <div key={info.citationNumber}>
        {info.citationNumber == id ? (<div className="container" >
          <img src={info.img} className="img-style" />
          <div className="content-style">
            <table>
              <tr>
                <td>Shape </td>
                <td><span>: </span>{info.shape}</td>
              </tr>
              <tr>
                <td>Painter </td>
                <td><span>: </span>{info.painter}</td>
              </tr>
              <tr>
                <td>Vase Number</td>
                <td><span>:</span>{info.vaseNumber}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td><span>: </span>{info.location}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td><span>: </span> {info.description}</td>
              </tr>
              <tr>
                <td>Reference</td>
                <td><span>: </span>{info.reference}</td>
              </tr>
            </table>
            <div className="button-placement">
              <Download data={info} />
            </div>
          </div>
        </div>) : (<React.Fragment></React.Fragment>)}
      </div>
    )
  });


  return (
    <div style={{ color: "white" }}>
      {post}
    </div>
  )
}

export default ResearchDetails;