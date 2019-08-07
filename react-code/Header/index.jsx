import React from 'react';
import './style.css'
function Header() {
  return (
    <section id='home' class="container">
    <header>
    <div className="header_logo">

    <img src={require("../image/Logo.png")} alt="header_logo1"/>
    </div>
    <nav>

      <div id="navig" className="navigation" >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#ingredients">Igredients</a>
        <a href="#menu">Menu</a>
        <a href="#rewiews">Reviews</a>
        <a href="#book">Reservations</a>
        <a  href="#">
              <span className="span-logo">
               <img src={require("../image/Social.png")}/>
              </span>
        </a>


        <a href="#" id="navbar" className ="icon">&#9776;</a>

      </div>
    </nav>
  </header>
  <section  className="promo">
    <h1> the right ingredients for the right food</h1>
     <div style={{display: 'inline-table'}}>
        <img src={require("../image/Decoration.png")} />
     </div>
   <div class="buttons">

     <input type="image" className='white' name="imgbtn" src={require("../image/button-black.png")}  />
     <input type="image" className='black' name="imgbtn2" src={require("../image/Button White.png")} />


   </div>
</section>
</section>
  );
}

export default Header;
