import React from "react";
import image from '../images/b1.png'

function Contact (){
    return(
    <div className="contact form bg-blue-500 w-3/5   ml-60 mt-20">
       {/* <h1>Contact us</h1> */}
       <div className="flex ">
           <div className="bg-pink-300  img">
           <img src={image} className="w-3/4  ml-20"></img>
           </div>
           <div className="form">
   <form>

       <input type="text" className=" block " placeholder="                 enter your user name"></input>
       <input type="text" className=" block " placeholder="                 enter your email address"></input>
       <input type="text" className=" block " placeholder="                 enter your password"></input>
       <button className=" hover:animate-bounce text-2xl ml-40  mt-20 w-1/3 px-2 py-4 rounded-full login bg-pink-100  flex items-center justify-center">login</button>
      </form>
      </div>
      </div>
      <div className="map">
      <p><iframe className="mt-20" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122962.1486029764!2d29.6074569989475!3d-1.900104826660792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRwanda!5e0!3m2!1sen!2srw!4v1652120514383!5m2!1sen!2srw" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
      </div>
      </div>
      
    
  
    );
}

export default Contact; 