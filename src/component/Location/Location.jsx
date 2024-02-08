import React from "react";
import LocationImg from "../../images/location.jpg";
import './location.css' ;
export default function Location() {
  return (
    <div className="location">
      <div className="location-content">
        <div>
        <h2>Our Location</h2>
        <p>
          We have been operating for over 30 years and are Members of The
          Federation of Master Builders. We work on projects big and small from
          small residential extensions to full house. We are so happy with this
          theme. Everyday it make our lives better.
        </p>
        <p>
          Story on projects big and small from small residential extensions to
          full house. We are so happy with this theme. Everyday it make our
          lives better.
        </p>
        </div>
      </div>
      <div className="location-img">
        <img src={LocationImg} alt="location section img" />
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
