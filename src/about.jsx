import React, { useState, useEffect } from "react";
import data from "./data";
import SearchBox from "../compontents/search";
import {AiFillSetting} from 'react-icons/ai';

// return Object.keys(item).some(key=>item[key].toString().toLowerCase().includes(getData).toString().toLowerCase())
function About() {
  const [inputData, setInputData] = React.useState("");
  const [searchData, setSearchData] = useState(data.cardData);

  function getImage() {
    const searchResult = data.cardData.filter((p) =>
      p.gal.toLowerCase().includes(inputData.toLowerCase())
    );
    setSearchData(searchResult);
  }

  useEffect(() => {
    getImage();
  }, [inputData]);

  return (
    <div className="about">
      <h1>More about us <i><AiFillSetting/></i> </h1>

      <SearchBox
        change={getImage}
        setInputData={setInputData}
        inputData={inputData}
      />
      <div className="grid grid-cols-4 ">
        {searchData.map((item, index) => {
          return (
            <>
              <div className="flex flex-row " key={item.id}>
                <div className="bg-slate-100 w-96 ml-4 text-center h-80 mt-20 ">
                  <img src={item.img}></img>
                  <p>{item.gal}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default About;
