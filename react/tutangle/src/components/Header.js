import React from "react";

export const DesktopHeader = () => {
  return (
    <>
      <div className="w-full h-30 bg-aquamarine-blue-500 h-28  justify-around  hidden md:hidden lg:flex">
        {/* 1st Part */}
        <div className="flex mx-32 py-4 my-2 ">
          <img src="images/tutangle-logo.jpg" alt="" className=" w-52 h-12 " />

          <div className=" flex h-5 m-4 px-2 bg-aquamarine-blue-300 rounded-lg">
            <input
              type="text" placeholder="Search by Term,Member or Title"
              className="px-4 mx-1.5 bg-aquamarine-blue-300  "
            />
            <div className="flex ">
              <img
                src="images/cross.jpg"
                alt=""
                className="border-2 border-r-aquamarine-blue-500"
              />
              <img src="images/search.png" alt="" className="w-4 h-4 mt-1.5" />
            </div>
          </div>

          <button className="bg-gray-700 text-white text-xs h-5 w-16 my-4 rounded">
            SEARCH
          </button>
        </div>

        {/* 2nd part */}
        <div className="py-8   ">
          <p className="font-bold mx-24 ">Joe Burros</p>
          <ul className="flex font-bold ">
            <li>
              <a href="a">Home|</a>
            </li>
            <li>
              <a href="a">Settings|</a>
            </li>
            <li>
              <a href="a">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const MobileHeader = () => {
  return (
    <>
      <div className=" bg-aquamarine-blue-500  h-40  py-4 font-serif lg:hidden md:hidden">
        <img src="images/tutangle-logo.jpg" alt="" className=" w-42 h-8 mx-2 " />

        <div className="py-4 flex text-sm font-bold justify-between p-2 ">
          <p className="font-bold  ">Joe Burros</p>
          <ul className="flex font-bold  ">
            <li>
              <a href="a">Home|</a>
            </li>
            <li>
              <a href="a">Settings|</a>
            </li>
            <li>
              <a href="a">Log Out</a>
            </li>
          </ul>
        </div>
        <div className="flex">

        <div className=" flex mx-4 bg-aquamarine-blue-300 rounded-lg w-9/12 h-7  ">
            
            <input
              type="text" placeholder="Search by Term,Member or Title" 
              className="bg-aquamarine-blue-300 w-11/12 placeholder:text-sm "
            />
            <div className="flex ">
              <img
                src="images/cross.jpg"
                alt=""
                className="border-2 border-r-aquamarine-blue-500 w-4"
              />
              <img src="images/search.png" alt="" className="w-2 h-2.5 my-2.5" />
            </div>
            
          </div>
          <button className="bg-gray-700 text-white text-xs h-5 w-16 my-1.5 rounded mr-2">
            SEARCH
          </button>
         
        </div>
        

      </div>

      
    </>
  );
};




export const TabHeader = () => {
  return (
    <>

<div className=" bg-aquamarine-blue-500 h-40  py-4 font-serif hidden md:block  lg:hidden">
    <div className="flex justify-between mb-2">

        <img src="images/tutangle-logo.jpg" alt="" className=" w-42 h-8 mx-2 " />

        <div className="py-4  text-sm font-bold justify-between p-2 ">
          <p className="font-bold pl-16 text-xl ">Joe Burros</p>
          <ul className="flex font-bold ml-4 ">
            <li>
              <a href="a">Home|</a>
            </li>
            <li>
              <a href="a">Settings|</a>
            </li>
            <li>
              <a href="a">Log Out</a>
            </li>
          </ul>
        </div>
    </div>
        <div className="flex">

        <div className=" flex mx-4 bg-aquamarine-blue-300 rounded-lg w-10/12 h-7  ">
            
            <input
              type="text" placeholder="Search by Term,Member or Title"
              className="bg-aquamarine-blue-300 w-full "
            />
            <div className="flex ">
              <img
                src="images/cross.jpg"
                alt=""
                className="border-2 border-r-aquamarine-blue-500 w-4"
              />
              <img src="images/search.png" alt="" className="w-3 h-3 my-2.5" />
            </div>
            
          </div>
          <button className="bg-gray-700 text-white text-xs h-5 w-16 my-1.5 rounded mr-2">
            SEARCH
          </button>
         
        </div>
        

      </div>

    </>
  )
}


