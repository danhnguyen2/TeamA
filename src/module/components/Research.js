import React, { Component } from 'react';
import details from '../../data'
import './Research.css';

class Research extends Component {
    constructor() {
        super();
        this.state = {
            details: details,
        }
    }

    render() {
        console.log(this.state.deatils);
        const detailsList = details.map((info) => {
            return (
                <div className="card" key={info.id} id="cards">
                    <img src={info.img} className="card-img-top" alt="profile" />
                    <div className="card-body" id="card-text">
                        <h5 className="card-title">{info.name}</h5>
                        Shape: {info.shape}
                        <br />
                        By: {info.genre}
                        <br></br>
                        <button
                            type="button"
                            id="button"
                            class="btn btn-warning">
                            View Details
                        </button>
                    </div>
                </div>
            );
        });
        return (
            <div className="container-fluid">
            <h2>Seach Database</h2>
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
                <div>
                    {detailsList}
                </div>

            </div>
        )
    }
}

export default Research;