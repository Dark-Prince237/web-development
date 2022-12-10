import React from 'react'

const Menu = ({ label, image, hover, size,side,labelclass }) => {
    return (
      <>
        <div className={`flex ${side} ${hover} hover:cursor-pointer`}>
          <img src={image} alt=" reload soon" className={`${size}`} />
          <span className={` text-gray-400 ${labelclass}`}>{label}</span>
        </div>
      </>
    );
  };


export const Sidebar = () => {
  return (
   <>
    
          {/* sidebar */}
          <div className="w-1/4  flex flex-col justify-between bg-black ">
            <div className=" ">
              <Menu label="Spotify" image="images/spotify.png" size="w-10 h-10"  side="p-4" labelclass="p-2 text-xl font-bold " />
              <Menu
                label="Home"
                image="images/home.png"
                hover="hover:brightness-200 "
                size="w-5 h-5"
                side="py-2 px-6"
                labelclass="px-2 text-white"
                
              />
              <Menu
                label="Search"
                image="images/search.png"
                hover="hover:brightness-200 "
                size="w-5 h-5"
                side="py-2 px-6"
                labelclass="px-2" 
              />
              <Menu
                label="Your Library"
                image="images/library.png "
                hover="hover:brightness-200 "
                size="w-5 h-5"
                side="py-2 px-6 pb-5 "
                labelclass="px-2" 
              />
              <Menu
                label="Create Playlist"
                image="images/plus.png"
                hover="hover:brightness-200 "
                size="w-5 h-5"
                side="py-2 px-6 "
                labelclass="px-2" 
              />
              <Menu
                label="Liked Songs"
                image="images/heart.png"
                hover="hover:brightness-200 "
                size="w-5 h-5"
                side="py-2 px-6"
                labelclass="px-2" 
              />
              <Menu
                label="Your Episodes"
                image="images/banner.png"
                hover="hover:brightness-200 "
                size="w-5 h-5"
                side="py-2 px-6"
                labelclass="px-2" 
              />

              {/* {["home","contact"].map((value)=>
              (
                <div>
                    <Menu label={value}/>
                </div>
              ))} */}

            

            <hr className=" h-2 w-11/12  pr-2 mx-4 my-2 text-center" /> 
            </div>

            <Menu label="Install App" image="images/download.png"  size="w-5 h-5"
                side="py-2 px-6" labelclass="px-2  " hover="hover:brightness-200 " />
          </div>

         
       
   </>
  )
}
