import React from 'react';
import './About.css';
import image from "../../images/image.jpeg"

const About = () => {
    return (
        <div className="container-fluid">
            <h2>About Us</h2>
            <div>
                <img src={image} alt="potter" className="about-image" />
            </div>
            <p className="about-content">The Trendall Research Centre Has The Following Objectives:
                <br />
                To Promote Research In The General Area Of Ancient Mediterranean
                Studies, Particularly In The Archaeology Of South Italy And Sicily During
                The Classical Period. <br />

                To Disseminate Within The General Community In Australia The Results Of
                The Latest Research In Greek And Roman Art And Archaeology Through
                The Sponsorship Of Conferences, Lectures And Seminars.<br />

                To Make Available, At The Director's Discretion, The Resources Of The
                Centre To All Scholars And Graduate Students, Whether From Australia
                Or Overseas, Who Wish To Use The Library And Archive. <br />

                To Maintain And Extend Both The Library And The Archive (As Unique
                Research Resources In Australia) Through The Acquisition Of Books And
                Periodicals Relating To Greek And Roman Culture, And Images Of South
                Italian Red-Figure Vases.
            </p>

            {/*}    <div className="clearfix">
                <p className="column menu">THE TRENDALL RESEARCH CENTRE HAS THE FOLLOWING OBJECTIVES:
                    <br /> <br />
                    TO PROMOTE RESEARCH IN THE GENERAL AREA OF ANCIENT MEDITERRANEAN
                    STUDIES, PARTICULARLY IN THE ARCHAEOLOGY OF SOUTH ITALY AND SICILY DURING
                    THE CLASSICAL PERIOD. <br /> <br />

                    TO DISSEMINATE WITHIN THE GENERAL COMMUNITY IN AUSTRALIA THE RESULTS OF
                    THE LATEST RESEARCH IN GREEK AND ROMAN ART AND ARCHAEOLOGY THROUGH
                    THE SPONSORSHIP OF CONFERENCES, LECTURES AND SEMINARS.<br /> <br />

                    TO MAKE AVAILABLE, AT THE DIRECTOR'S DISCRETION, THE RESOURCES OF THE
                    CENTRE TO ALL SCHOLARS AND GRADUATE STUDENTS, WHETHER FROM AUSTRALIA
                    OR OVERSEAS, WHO WISH TO USE THE LIBRARY AND ARCHIVE. <br /> <br />

                    TO MAINTAIN AND EXTEND BOTH THE LIBRARY AND THE ARCHIVE (AS UNIQUE
                    RESEARCH RESOURCES IN AUSTRALIA) THROUGH THE ACQUISITION OF BOOKS AND
                    PERIODICALS RELATING TO GREEK AND ROMAN CULTURE, AND IMAGES OF SOUTH
                    ITALIAN RED-FIGURE VASES.
                </p>

                <div className="column content" >
                    <img src={image} alt="potter" />
                </div>
                 
            </div>
               */}
        </div>

    )
}

export default About;