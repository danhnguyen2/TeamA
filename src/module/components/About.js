import React from 'react';
import './About.css';
import image from "../../images/image.jpeg"

const About = () => {
    return (
        <div className="container-fluid">
            <div className="clearfix">
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
        </div>

    )
}

export default About;