import React, { useState, useEffect } from "react";
import Download from "./Download";
import './ResearchDetails.css';
import imgFive from '../../images/P-56-1.jpg';
import { listVases } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

const ResearchDetails = (props) => {
  let id = props.match.params.entry;
  const [post, setPost] = useState([]);

  useEffect(() => {
    getVases();
  }, []);

  const getVases = async () => {
    const result = await API.graphql(graphqlOperation(listVases));
    setPost(result.data.listVases.items)
    console.log(result.data.listVases.items);

    //console.log("All Vases: ", JSON.stringify(result.data.listVases.items))
    //console.log("All Vases: ", result.data.listVases.items)
  }

  const posts = post.map(info => {
    return (
      <div key={info.entry}>
        {info.entry === Number(id) ? (<div className="container" >
          <img src={imgFive} alt="pottery" className="img-style" />
          <div className="content-style">
            <table>
              <tr>
                <td>Shape </td>
                <td><span>: </span>{info.shape}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td><span>: </span>{info.location}</td>
              </tr>
              <tr>
                <td>Painter </td>
                <td><span>: </span>{info.painter}</td>
              </tr>
              <tr>
                <td>Entry</td>
                <td><span>: </span> {info.entry}</td>
              </tr>
              <tr>
                <td>Vase Number</td>
                <td><span>:</span>{info.v_num}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td><span>: </span> {info.height}</td>
              </tr>
              {/*  <tr>
                <td>Plate</td>
                <td><span>: </span> {info.plate}</td>
             </tr> */}
              <tr>
                <td>Description</td>
                <td><span>: </span> {info.description}</td>
              </tr>
              <tr>
                <td>Reference</td>
                <td><span>: </span> {info.reference}</td>
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
      {posts}
    </div>
  )
}

export default ResearchDetails;