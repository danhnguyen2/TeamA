import React, { Component } from 'react';
import './Research.css';
import { Link } from "react-router-dom";
import { listVases } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import imgFive from '../../images/P-56-1.jpg';
import Loader from "react-loader-spinner";

const searchFor = (shape,
    location,
    painter, entry) => {
    return (x) => {
        return (x.shape.toLowerCase().includes(shape.toLowerCase()) || !shape) &&
            (x.painter.toLowerCase().includes(painter.toLowerCase()) || !painter) &&
            (x.location.toLowerCase().includes(location.toLowerCase()) || !location) &&
            (String(x.entry).toLowerCase().includes(entry.toLowerCase()) || !entry)
        // (String(x.v_num).toLowerCase().includes(v_num.toLowerCase()) || !v_num) &&
        // (String(x.height).toLowerCase().includes(height.toLowerCase()) || !height) &&
        // (x.plate.toLowerCase().includes(plate.toLowerCase()) || !plate)
        // (x.description.toLowerCase().includes(description.toLowerCase()) || !description)
    }
}

class Research extends Component {
    constructor() {
        super();
        this.state = {
            vases: [],
            shape: '',
            location: '',
            painter: '',
            entry: '',
            // v_num: '',
            // height: '',
            // plate: '',
            // description: ''
        }
    }

    componentDidMount = async () => {
        this.getVases()
    }

    getVases = async () => {
        const result = await API.graphql(graphqlOperation(listVases))
        this.setState({ vases: result.data.listVases.items })
        console.log(result.data.listVases.items);

        //console.log("All Vases: ", JSON.stringify(result.data.listVases.items))
        //console.log("All Vases: ", result.data.listVases.items)
    }


    handleClick = (e) => {
        console.log(e.target.innerText);
        this.setState({
            [e.target.id]: e.target.innerText
        })
    }

    handleReset = (e) => {
        this.setState({
            shape: '',
            location: '',
            painter: '',
            entry: '',
            // v_num: '',
            // height: '',
            // plate: '',
            // description: ''
        })
    }

    render() {
        const vases = this.state.vases;
        console.log(vases);
        const list = [{
            detail: vases.map(data => {
                return (data.shape)
            })
        }, {
            detail: vases.map(data => {
                return (data.location)
            })
        }, {
            detail: vases.map(data => {
                return (data.painter)
            })
        },
        {
            detail: vases.map(data => {
                return (data.entry)
            })
        },
            // {
            //     detail: vases.map(data => {
            //         return (data.v_num)
            //     })
            // },
            // {
            //     detail: vases.map(data => {
            //         return (data.height)
            //     })
            // },
            // {
            //     detail: vases.map(data => {
            //         return (data.plate)
            //     })
            // },
            // {
            //     detail: vases.map(data => {
            //         return (data.description)
            //     })
            // }
        ];

        const { shape, location, painter,
            entry } = this.state;

        const detailsList = vases.length ? (vases.filter(searchFor(shape, location,
            painter, entry)).map((info) => {
                return (
                    <div className="card" key={info.entry} id="cards">
                        <img src={imgFive} className="card-img-top" alt="profile" />
                        <div className="card-body" id="card-text">
                            Shape: {info.shape}
                            <br />
                            Vase Number: {info.v_num}
                            <br></br>
                            <Link to={/research/ + info.entry}><button
                                details={info}
                                type="button"
                                id="button"
                                className="btn btn-warning">
                                View Details
                            </button></Link>
                        </div>
                    </div>
                );
            })) : (<Loader
                className='nopost'
                type="ThreeDots"
                color="#F0AA11"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />)


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
                            <br />

                            {/*location */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        LOCATION</li>
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
                            <br />


                            {/*Painter */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        PAINTER</li>
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

                            {/*Entry */}
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        ENTRY</li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.entry !== '' ? (this.state.entry) : (<React.Fragment>{'Select Entry'}</React.Fragment>)}
                                    </button>
                                </div>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[3].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="entry" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />

                            {/*Vase Number */}
                            {/*     <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        VASE NUMBER</li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.v_num !== '' ? (this.state.v_num) : (<React.Fragment>{'Select Vase Number'}</React.Fragment>)}
                                    </button>
                                </div>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[4].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="v_num" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                                </div> 
                            <br />*/}

                            {/*Height */}
                            {/*      <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        HEIGHT</li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.height !== '' ? (this.state.height) : (<React.Fragment>{'Select Height'}</React.Fragment>)}
                                    </button>
                                </div>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[5].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="v_num" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                                </div>
                            <br /> */}

                            {/*Plate */}
                            {/*  <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        PLATE</li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.plate !== '' ? (this.state.plate) : (<React.Fragment>{'Select Plate'}</React.Fragment>)}
                                    </button>
                                </div>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[6].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="plate" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                                </div> 
                            <br />*/}

                            {/*Description */}
                            {/*       <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        DESCRIPTION</li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.description !== '' ? (this.state.description) : (<React.Fragment>{'Select Description'}</React.Fragment>)}
                                    </button>
                                </div>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[7].detail.map(val => {
                                        return (
                                            <li className="dropdown-item" id="description" onClick={this.handleClick}>{val}</li>
                                        )
                                    })}
                                </div>
                            </div>
                                <br /> */}

                        </div>
                        <div className="search-div">
                            {/*    <button
                                type="button"
                                className="btn btn-warning">
                                Search
                         </button> */}
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

//diameter & note doesn't have data