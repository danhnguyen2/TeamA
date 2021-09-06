import React from "react";
import image1 from "../../images/P-13-3.jpg";
import "./Home.css";
import image2 from "../../images/P.jpg";
import image3 from "../../images/P-19-1.jpg";
import image4 from "../../images/P-26.jpg";
import image5 from "../../images/P-35-3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const arr = [image1, image2, image3, image3, image4, image5];
  return (
    <div className="home-wrapper">
      <div className="left-section">
        <div className="description">
          {" "}
          <p>
            The Trendall Library currently posses over 9,000 monographs of
            ancient Mediterranean archaeology as well as many journals and a
            large collection of offprints. The library covers the art,
            archaeology, literature and history of ancient Greece and Rome. It
            specially showcases the Greek vase-paintings and archaeology of
            South Italy and Sicily. There are also holdings in Etruscan and
            other Mediterranean cultures.
          </p>
          <p>
            {" "}
            Available to academic staff, honours and graduate students by
            appointment. For appointment, contact the Trendall Research Centre:
            Trendall@latrobe.edu.au{" "}
          </p>
          <p>
            Under the terms of the bequest, books are not available for loan and
            may only consulted in the Trendall Research Centre.{" "}
          </p>
        </div>
      </div>
      <div className="right-section">
        <div className="image-wrapper">
          <Carousel width="80%" showThumbs="false" showStatus="false">
            {arr.map((item) => {
              return (
                <div className="one-img-wrapper">
                  <img src={item} alt="crouser-images" />
                </div>
              );
            })}
          </Carousel>
          <div className="image-description">
          Since 1995, the Trendall Research Centre has maintained the library
          and archive of one of the most distinguished Mediterranean
          archaeologist A.D. Trendall and is currently digitizing the
          photographic archive. Both the library and the archive contain
          resources of ancient Mediterranean archelogy recognized by scholars
          around the globe and the digitization of it will make it available to
          everyone and will attract scholars around the world to get resources.
          The photographic archive of South Italian vases in particular is
          unique and such resource does not exist anywhere else in the world.
        </div>
        </div>
        
      </div>

    </div>
  );
};

export default Home;
