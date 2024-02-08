import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="Home-page d-flex justify-content-center align-item-center text-center">
        <div className="Home-content ">
          <p>Welcome to</p>
          <h1>Family Bakery </h1>
          <p>
            We're the biggest, best equipped and most advanced Bakery in the
            greater Los Angeles area.
          </p>
          <button className="learn-btn">Learn More </button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
