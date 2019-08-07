import React from 'react';
import './style.css'
function Footer() {
  return (
    <footer id ='footer'>
   <div class="wrapper_foot">
     <div class="info">
       <div class="About">
         <h1>About Us</h1>
         <img src={require("../image/image5.png")} alt="im5"/>
         <p>Lambda's new and expanded Chelsea location <br/>epresents a truly authentic Greek patisserie,
           <br/>featuring breakfasts of fresh croissants and
           <br/>steaming bowls of café.
  <br/>Lamda the best restaurant in town</p>
       </div>
       <div class="open">
         <h1>Opening Hours</h1>
         <img src={require("../image/image5.png")} alt="im5"/>
         <p><span>Mon-Thu</span> 7:00am-8.00pm</p>
         <p><span>Fri-Sun</span> 7:00am-10.00pm</p>
       </div>
       <div class="Our-Location">
         <h1>Our Location</h1>
         <img src={require("../image/image5.png")} alt="im5"/>
         <p>19th Paradise Street Sitia
           <br/>128 Meserole Avenue</p>
           <img src={require("../image/icons-foo.png")} alt="if"/>

       </div>
     </div>

   </div>
 </footer>

  )
}

export default Footer;
