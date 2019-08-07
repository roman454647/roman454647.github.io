import React from 'react';
import './style.css'
function Ingredients() {
  return (
<section id ="ingredients" className="wrapper-ingredients">
 <div className="section-ingredients">
   <h1>Fine ingredient</h1>
   <img className ='divider2' src={require("../image/Divider1.png")} alt="divider1"/>
   <p>If you’ve been to one of our restaurants, you’ve seen – and
     <br/> tasted – what keeps our customers coming back for more.
      <br/>Perfect materials and freshly baked food, delicious Lambda
     <br/> cakes,  muffins, and gourmet coffees make us hard to resist!
      <br/>Stop in today and check us out!</p>
      <div className="product_image">
        <img src={require("../image/image.png")} alt="im"/>
        <img src={require("../image/image1.png")} alt="im1"/>
        <img src={require("../image/image2.png")} alt="im2"/>
      </div>
  </div>
</section>


  )
}

export default Ingredients;
