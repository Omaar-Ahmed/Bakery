import React from "react";
import "./Baking.css";
import item1 from '../../images/item1.jpg';
import item2 from '../../images/item2.jpg';
import item3 from '../../images/item3.jpg';

export default function Baking() {
  return (
    <div>
      <div className="baking">
        <h3>Our Baking</h3>
        <p>
          Learn more about them. We have worked truly hard to make them perfect
          for every use.
        </p>
      </div>
      <div className="item text-center">
        <div className="item-member">
            <div className="item-img">
                <img src={item1} alt="" />
            </div>
          <h4>Superior Breads</h4>
          <p>
            Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis
            libero, at semper mauris velit a velit. Phasellus commodo turpis et
            lacinia posuere.
          </p>
        </div>
        <div className="item-member">
        <div className="item-img">
                <img src={item2} alt="" />
            </div>
          <h4>Bagels</h4>
          <p>
            Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis
            libero, at semper mauris velit a velit. Phasellus commodo turpis et
            lacinia posuere.
          </p>
        </div>
        <div className="item-member">
        <div className="item-img">
                <img src={item3} alt="" />
            </div>
          <h4>Cookies   </h4>
          <p>
            Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis
            libero, at semper mauris velit a velit. Phasellus commodo turpis et
            lacinia posuere.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
