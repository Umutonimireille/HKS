import React from "react";

function SearchBox (props){
  const { setInputData, inputData } = props

  

    return(
        <div className="search">
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2 ml-20" type="search"
        value={inputData}
        onChange={(e)=> setInputData(e.target.value)}
        aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      </div>

    )
}

export default SearchBox;