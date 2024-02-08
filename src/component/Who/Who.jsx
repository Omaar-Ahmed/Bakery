import React from "react";
import "./who.css";
import WhoImg from "../../images/Who.jpg";


export default function Who() {
  return (
    <div className="who mg-auto">   
      <div className="who-img">
        <img src={WhoImg} alt="Who are img" />
      </div>
      <div className="who-content">
        <h4>Who we are ?</h4>
        <p>
          We have been operating for over 30 years and are Members of The
          Federation of Master Builders. We work on projects big and small from
          small residential extensions to full house. We are so happy with this
          theme. Everyday it make our lives better.
          
        </p>
        <p><i class="fa-sharp fa-solid fa-leaf"></i> We care about environment. </p>
        <p><i class="fa-solid fa-users"></i>   We are trusted by hundreds of clients. </p>
        <p><i class="fa-solid fa-heart"></i> Social media loves us! </p>
        <p><i class="fa-solid fa-circle-check"></i>  This list is super easy to create. </p>
      </div>
      <div className="clearfix"></div>
    </div>

  );
}
