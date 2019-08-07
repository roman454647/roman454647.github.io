import React from 'react';
import './style.css'
function About() {
  return (
    <section id="about" className="wrapper">
      <div  className="section-about">
         <div className="about-left">
           <h1>Just the right food</h1>
           <img className ='divider' src={require("../image/Divider.png")} alt="divider"/>
           <p>If you’ve been to one of our restaurants, you’ve seen – and
              <br/>tasted – what keeps our customers coming back for more.
              <br/>Perfect materials and freshly baked food, delicious Lambda
              <br/>cakes,  muffins, and gourmet coffees make us hard to resist!
              <br/>Stop in today and check us out!</p>
            <img className ='cook' src={require("../image/cook.png")} alt="cook"/>
         </div>
         <div className="about-right">
          <img className ='mw-100' src={require("../image/dish.png")} alt="dish"/>
         </div>

      </div>
    </section>

  );
}
export default About;
