import React, { Component } from 'react';
import details from '../../data'
import './Research.css';
import { Link } from "react-router-dom";

const list = [{
    detail: details.map(data => {
        return (data.shape)
    })
}, {
    detail: details.map(data => {
        return (data.location)
    })
}, {
    detail: details.map(data => {
        return (data.painter)
    })
},

{
    detail: details.map(data => {
        return (data.subject)
    })
},
{
    detail: details.map(data => {
        return (data.technique)
    })
}, {
    detail: details.map(data => {
        return (data.subTechnique)
    })
}, {
    detail: details.map(data => {
        return (data.incription)
    })
}, {
    detail: details.map(data => {
        return (data.collection)
    })
}, {
    detail: details.map(data => {
        return (data.date)
    })
}]

const searchFor = (shape, location, painter, technique, subTechnique, incription, date, collection, subject) => {
    return (x) => {
        return (x.location.startsWith(location) || !location) && (x.shape.startsWith(shape) || !shape) && (x.painter.startsWith(painter) || !painter) && (x.technique.startsWith(technique) || !technique) && (x.subTechnique.startsWith(subTechnique) || !subTechnique) && (x.subject.startsWith(subject) || !subject) && (x.collection.startsWith(collection) || !collection) && (x.incription.startsWith(incription) || !incription) && (x.date.startsWith(date) || !date);
    }
}

class Research extends Component {
    constructor() {
        super();
        this.state = {
            details: details,
            shape: '',
            location: '',
            painter: '',
            subject: '',
            technique: '',
            subTechnique: '',
            incription: '',
            collection: '',
            date: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            [e.target.id]: e.target.innerText
        })
    }

    handleReset = (e) => {
        this.setState({
            shape: '',
            location: '',
            painter: '',
            subject: '',
            technique: '',
            subTechnique: '',
            incription: '',
            collection: '',
            date: ''
        })
    }


    render() {
        const { shape,
            location,
            painter, technique, subTechnique, incription, date, collection, subject } = this.state;

        const detailsList = details.length ? (details.filter(searchFor(shape, location, painter, technique, subTechnique, incription, date, collection, subject)).map((info) => {
            return (
                <div className="card" key={info.citationNumber} id="cards">
                    <img src={info.img} className="card-img-top" alt="profile" />
                    <div className="card-body" id="card-text">
                        Shape: {info.shape}
                        <br />
                        Vase Number: {info.vaseNumber}
                        <br></br>
                        <Link to={/research/ + info.citationNumber}><button
                            details={info}
                            type="button"
                            id="button"
                            className="btn btn-warning">
                            View Details
                        </button></Link>

                    </div>
                </div>
            );
        })) : (<p>No Posts Yet!</p>)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5 col-md-8 col-lg-4 col-xl-4">
                        <h2>SEARCH DATABASE</h2>
                        <div className="left-div">
                            {/*shape */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        SHAPE</li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.shape !== '' ? (this.state.shape) : (<React.Fragment>{'Select Shape'}</React.Fragment>)}
                                    </button>
                                </div>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[0].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="shape" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            {/*location */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        LOCATION
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.location !== '' ? (this.state.location) : (<React.Fragment>{'Select Location'}</React.Fragment>)}
                                    </button>
                                </div>

                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[1].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="location" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            {/*painter */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        PAINTER
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.painter !== '' ? (this.state.painter) : (<React.Fragment>{'Select Painter'}</React.Fragment>)}
                                    </button>
                                </div>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[2].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="painter" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />

                            {/*subject */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        SUBJECT
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.subject !== '' ? (this.state.subject) : (<React.Fragment>{'Select Subject'}</React.Fragment>)}
                                    </button>
                                </div>

                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[3].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="subject" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />

                            {/*technique */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        TECHNIQUE
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.technique !== '' ? (this.state.technique) : (<React.Fragment>{'Select Technique'}</React.Fragment>)}
                                    </button>
                                </div>

                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[4].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="technique" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />

                            {/*sub techniques */}

                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        SUB TECHNIQUE
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.subTechnique !== '' ? (this.state.subTechnique) : (<React.Fragment>{'Select Sub Technique'}</React.Fragment>)}
                                    </button>
                                </div>

                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[5].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="subTechnique" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />

                            {/*incription */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        INCRIPTION
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.incription !== '' ? (this.state.incription) : (<React.Fragment>{'Select Incription'}</React.Fragment>)}
                                    </button>
                                </div>

                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[6].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="incription" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />

                            {/*collection */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        COLLECTION
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.collection !== '' ? (this.state.collection) : (<React.Fragment>{'Select Collection'}</React.Fragment>)}
                                    </button>
                                </div>

                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[7].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="collection" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />

                            {/*date */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        DATE
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.date !== '' ? (this.state.date) : (<React.Fragment>{'Select Date'}</React.Fragment>)}
                                    </button>
                                </div>

                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[8].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="date" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>

                            <br />
                        </div>
                        <div className="search-div">
                            <button
                                type="button"
                                className="btn btn-warning">
                                Search
                            </button>
                            <button
                                onClick={this.handleReset}
                                type="button"
                                className="btn btn-warning">
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-4 col-lg-8 col-xl-8">
                        <div>{detailsList}</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Research;