import React from 'react';
import './style.css'
function BookTable() {
  return (
    <section id ="book" className='book_wrapper'>
  <div className="book_form">
    <div className="left-side">
        <img src={require("../image/image3.png")} alt="im3"/>
        <img src={require("../image/image4.png")} alt="im4"/>
    </div>
    <div className="right-side">
          <h1>Just the right food</h1>
          <img src={require("../image/Divider4.png")} alt="div4"/>
          <p>If you’ve been to one of our restaurants, you’ve seen – and tasted
            <br/> – what keeps our customers coming back for more.
             <br/>Perfect materials and freshly baked food.</p>

          <p>  <br/>Delicious Lambda cakes,  muffins, and gourmet coffees make
            <br/>us hard to resist! Stop in today and check us out! Perfect
          <br/>  materials and freshly baked food.</p>

          <form name ="bookform" action="#" method="post">
            <div className="form_inputs">
              <div className="right_inputs">
                <p>Name</p>
                <input type="text" placeholder="Name*"/>
                <p>Email address</p>
                <input type="text" placeholder="Email adress"/>
              </div>
               <div className="left_inputs">
                 <p>Date</p>
                 <input type="date" placeholder="Date"/>
                 <p>Party Numbers</p>
                 <input type="text" placeholder ='Party Numbers*'/>
               </div>

            </div>
            <div className="button_block">
              <input type="image" src={require("../image/Book now.png")}  value="Book now!"/>
            </div>
          </form>

    </div>

  </div>
</section>


  )
}

export default BookTable;
