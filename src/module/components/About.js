import React from "react";
import "./About.css";
import image from "../../images/image.jpeg";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="clearfix">
        <p className="column menu">
          The trendall research centre has the following objectives:
          <br /> <br />
          To promote research in the general area of ancient mediterranean
          studies, particularly in the archaeology of south italy and sicily
          during the classical period. <br /> <br />
          To disseminate within the general community in australia the results
          of the latest research in greek and roman art and archaeology through
          the sponsorship of conferences, lectures and seminars.
          <br /> <br />
          To make available, at the director's discretion, the resources of the
          centre to all scholars and graduate students, whether from australia
          or overseas, who wish to use the library and archive.
          <br /> <br />
          To maintain and extend both the library and the archive (as unique
          research resources in australia) through the acquisition of books and
          periodicals relating to greek and roman culture, and images of south
          italian red-figure vases.
        </p>

        <div className="column content">
          <div className="image-wrapper-about">
            <img src={image} alt="potter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
