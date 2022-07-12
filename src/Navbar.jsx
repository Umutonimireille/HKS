import React from "react";
import {Link} from 'react-router-dom'
// import Contact from "./contact";
function  Navbar (){
    return(
        <div className="container-fluid">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary text-white min-width:768px">
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active justify-center px-12">
              <div className="nav-link  "> <span className="sr-only">(current)</span> <Link to="/home">Home</Link></div>
             
            </li>
            <li className="nav-item justify-center px-96">
              <div className="nav-link   "><span className="sr-only">(current)</span><Link to="/about">About</Link></div>
            </li>
            <li className="nav-item px-40 text-black-500">
              <div className="nav-link  "><span className="sr-only">(current)</span><Link to ="/contact" >Contact</Link></div>
            </li>
         
            
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
      </div>
    )
}
export default Navbar