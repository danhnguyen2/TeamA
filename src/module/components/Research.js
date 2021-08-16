import React, { Component } from 'react';
import details from '../../data'
import './Research.css';
import {Link} from "react-router-dom";

class Research extends Component {
    constructor() {
        super();
        this.state = {
            details: details,
        }
    }

    render() {
        const detailsList = details.length ? (details.map((info) => {
            return (
                <div className="card" key={info.citationNumber} id="cards">
                    <img src={info.img} className="card-img-top" alt="profile" />
                    <div className="card-body" id="card-text">
                        <h5 className="card-title">{info.name}</h5>
                        Shape: {info.shape}
                        <br />
                        Vase Number: {info.vaseNumber}
                        <br></br>
                        <Link to={/research/ + info.citationNumber}><button
                        details={info}
                        type="button"
                        id="button"
                        class="btn btn-warning">
                        View Details
                    </button></Link>
                      
                    </div>
                </div>
            );
        })) : (<p>No Posts Yet!</p>) 
        return (
            <div className="container-fluid">
                <h2>Search Database</h2>
                <div id="searchBar">
                    <input
                        className="inputName"
                        type="text"
                        placeholder="Search for Shape"
                    />
                    <input
                        className="inputName"
                        type="text"
                        placeholder="Search for Location"
                    />
                    <input
                        className="inputName"
                        type="text"
                        placeholder="Search for Painter"
                    />
                </div>
                
                <div>{detailsList}</div>
            </div>

        )
    }
}

export default Research;