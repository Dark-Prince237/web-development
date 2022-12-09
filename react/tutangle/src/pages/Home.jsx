import React from "react";
// import { BlockHeader, EntryItem, VideoTitle } from "../components/video-title";

const Home = () => {
  // return (
  //   <div className="flex flex-col gap-4">
  //     <EntryItem
  //       image="https://abdheshnayak.github.io/leapfrog-internship/Assignment/TuTangle/images/user1.jpg"
  //       title="Hi ello"
  //       author="Rashid Iqbal"
  //     />

  //     <EntryItem
  //       image="https://abdheshnayak.github.io/leapfrog-internship/Assignment/TuTangle/images/user1.jpg"
  //       title="Hi ello"
  //       author="Rashid Iqbal 2"
  //       highlightText="New Entry"
  //     />

  //     <BlockHeader text="Friends" />
  //     <BlockHeader text="Friends"  className="border border-r-2 rounded-t-2xl" />
  //   </div>
  // );
  return (
    <>
        <div class="max-w-screen-lg mx-auto   w-full">

        <header class="w-auto h-36 bg-aquamarine-blue-500 flex justify-around p-10 max-lg:bg-pink-400  ">
          
          <div className="flex max-lg:inline-block">12
          <img src="/images/tutangle-logo.jpg " alt="" className="w-52 h-12 mr-5 max-lg:ml-" />
                <div className="flex w-60 h-6 rounded-lg mt-3">
              <div class="flex ">
                <input
                  type="text"
                  placeholder="Search by Term,Member or Title"
                  className="bg-sky-200  placeholder:text-sm"
                />
                <img src="images/cross.jpg" alt="" className="w-3 h-6 " />
                <img src="images/search.jpg" alt="" className="w-5 h-6" />
              </div>
              <button className="ml-10 rounded-md bg-gray-800 text-white text-sm p-1">
                SEARCH
              </button>
            </div>
          </div>
          <div>
            <p class="font-bold ml-28 text-xl"> Joe Burros </p>
            <div className="flex divide-x-2 divide-black ">






              {["home", "settings", "log out"].map((item) => (
                <div key={item} className="capitalize font-bold p-2 text-xl">
                  {item}
                </div>
              ))}
              
            </div>
          </div>
        </header>
        {/* nav bar */}
        <nav class="w-aut0 bg-wild-sand-500 h-10 flex justify-around">
          <div class="box-border">
            <ul class="flex">
              <li className="p-2 font-[muli] font-semibold tracking-tight hover:bg-aquamarine-blue-500 hover:text-white hover:cursor-pointer">
                Create New Entry
              </li>
              <li className="p-2 font-[muli] font-semibold tracking-tight hover:bg-aquamarine-blue-500 hover:text-white hover:cursor-pointer">
                My Topic Box
              </li>
              <li className="p-2 font-[muli] font-semibold tracking-tight hover:bg-aquamarine-blue-500 hover:text-white hover:cursor-pointer">
                Friends
              </li>
              <li className="p-2 font-[muli] font-semibold tracking-tight hover:bg-aquamarine-blue-500 hover:text-white hover:cursor-pointer">
                Invite New Friends
              </li>
            </ul>
          </div>
          <div>
            <ul class="flex">
              <li class="text-l font-bold p-2"> Topic Boxes Invites - 2 </li>
              <li>
                <img
                  src="images/friend.png"
                  alt=""
                  className="w-7 h-7 mt-1.5"
                />
              </li>
              <li className="p-2">
                <a
                  href="https://www.facebook.com"
                  class="text-l text-gray-500 hover:text-black"
                >
                  Friend Request - 0
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content w-auto bg-white h-auto flex">
          {/* first part of content */}
          <div className="w-1/4 h-full  flex justify-end mt-10 mr-3">
            <div class="w-60 h-screen bg-wild-sand-500">
              <div className="w-full h-48 bg-wild-sand-500">
                <ul>
                  <li class="bg-aquamarine-blue-500 text-white p-3">
                    Recent Searches
                  </li>
                  <div class="flex hover:bg-white">
                    <li class="bg-wild-sand-500 p-3 hover:bg-white hover:text-blue-400">
                      <a
                        href="https://www.facebook.com"
                        alt=""
                        className="  cursor-pointer"
                      >
                        Nick Cave and the Bad Seeds
                      </a>
                    </li>
                    <span>
                      <img
                        src="images/download.png"
                        alt=""
                        className="w-2 h-5 mt-4 mr-7"
                      />
                    </span>
                  </div>
                  <div class="flex hover:bg-white hover:text-blue-400">
                    <li class="bg-wild-sand-500 p-3  ">
                      <a
                        href="https://www.facebook.com"
                        alt=""
                        className=" cursor-pointer"
                      >
                        African Animals
                      </a>
                    </li>
                    <span>
                      <img
                        src="images/download.png"
                        alt=""
                        className="w-2 h-5 mt-4 ml-10"
                      />
                    </span>
                  </div>
                  <li class="bg-aquamarine-blue-500 text-white p-3">
                    Recent Searches
                  </li>
                  <div class="flex hover:bg-white hover:text-blue-400">
                    <li class="bg-wild-sand-500 p-3 text-sm font-serif font-bold hover:bg-white">
                      <a
                        href="https://www.facebook.com"
                        alt=""
                        className="  cursor-pointer"
                      >
                        Different versions of the Tristan and isolde Prelude
                      </a>
                    </li>
                    <span>
                      <img
                        src="images/ham.png"
                        alt=""
                        className="w-5 h-5 mt-6 mr-8"
                      />
                    </span>
                  </div>
                  <div class="flex justify-between hover:bg-white hover:text-blue-400">
                    <li class="bg-wild-sand-500 p-3 text-sm font-serif font-bold hover:bg-white">
                      <a
                        href="https://www.facebook.com"
                        alt=""
                        className="cursor-pointer"
                      >
                        Music
                      </a>
                    </li>
                    <span>
                      <img
                        src="images/ham.png"
                        alt=""
                        className="w-5 h-5 mt-6 m-3"
                      />
                    </span>
                  </div>
                  <div class="flex justify-between hover:bg-white hover:text-blue-400">
                    <li class="bg-wild-sand-500 p-3 text-sm font-serif font-bold hover:bg-white">
                      <a
                        href="https://www.facebook.com"
                        alt=""
                        className="  cursor-pointer"
                      >
                        Guitar
                      </a>
                    </li>
                    <span>
                      <img
                        src="images/ham.png"
                        alt=""
                        className="w-5 h-5 mt-6 mr-3"
                      />
                    </span>
                  </div>
                  <div class="flex justify-between hover:bg-white hover:text-blue-400">
                    <li class="bg-wild-sand-500 p-3 text-sm font-serif font-bold hover:bg-white">
                      <a
                        href="https://www.facebook.com"
                        alt=""
                        className="  cursor-pointer"
                      >
                        Bob cohen
                      </a>
                    </li>
                    <span>
                      <img
                        src="images/ham.png"
                        alt=""
                        className="w-5 h-5 mt-6 mr-3"
                      />
                    </span>
                  </div>
                  <div class="flex justify-between hover:bg-white hover:text-blue-400 ">
                    <li class="bg-wild-sand-500 p-3 text-sm font-serif font-bold hover:bg-white">
                      <a
                        href="https://www.facebook.com"
                        alt=""
                        className=" cursor-pointer"
                      >
                        Mark schnack
                      </a>
                    </li>
                    <span>
                      <img
                        src="images/ham.png"
                        alt=""
                        className="w-5 h-5 mt-6 mr-3"
                      />
                    </span>
                  </div>
                  <div class="flex justify-between hover:bg-white hover:text-blue-400 ">
                    <li class="bg-wild-sand-500 p-3 text-sm font-serif font-bold hover:bg-white">
                      <a
                        href="https://www.facebook.com"
                        alt=""
                        className=" cursor-pointer"
                      >
                        Jefferson Dickey
                      </a>
                    </li>
                    <span>
                      <img
                        src="images/ham.png"
                        alt=""
                        className="w-5 h-5 mt-6 mr-3"
                      />
                    </span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-auto bg-white mt-10">
            <h1 className="text-4xl font-bold"> Entries </h1>
            <div className="bg-gray-200 w-full h-24 rounded-3xl border-4 border-b-blue-500">
              <ul className="flex justify-around">
                <li className="font-bold"> All entires </li>
                <li className="font-bold"> Subscribed </li>
              </ul>
              <div>
                <ul className="flex justify-around mt-3">
                  <li className="bg-blue-400 p-3.5 rounded-t-xl text-white">
                    All Members
                  </li>
                  <li className="bg-gray-300 p-3.5 rounded-t-xl hover:bg-blue-400 hover:text-white cursor-pointer"> Friends </li>
                  <li className="bg-gray-300 p-3.5 rounded-t-xl hover:bg-blue-400 hover:text-white cursor-pointer"> New Entry </li>
                  <li className="bg-gray-300 p-3.5 rounded-t-xl hover:bg-blue-400 hover:text-white cursor-pointer">New Comment</li>
                </ul>
              </div>
            </div>
            <div className="font-serif">
              <ul className="p-4 ">
                <li className=" flex b ">
                  <div className="p-4  ">
                    <img src="images/user1.jpg " alt="" className="w-28 h-28" />
                  </div>
                  <div className="font-serif ">
                    <h2 className="p-2  font-bold cursor-pointer leading-tight text-s ">
                      Day for Night by Francois Truffaut, a ground breaking film
                    </h2>
                    <p className="p-2 pt-2 text-xs leading-none">
                      by <span className="text-blue-700">Alan Coe</span>  February 10, 2012 | <span className="text-green-900 font-bold">Subscribed</span>                    </p>
                    <p className="p-2 pt-2 text-xs leading-none">From Topic Box: <span className="text-blue-600">My Favorite Movies </span></p>
                    
                  </div>
                </li>
                
                <hr className="black"/>
                <li className="p-6 flex">
                  <div>
                    <img src="images/user2.jpg" alt="" className="w-28 h-34" />
                  </div>
                  <div className="ml-4 mb-4">
                  <h2 className="p-2  font-bold cursor-pointer leading-tight text-s text-blue-500 mt-2"> NEW ENTRY! </h2>
                  <h2 className="p-2 pt-2 font-bold cursor-pointer leading-tight text-s">
                  Bade Runner, The Director 's Cut
                    </h2>
                    <p className="p-2 pt-2 text-xs leading-none">
                      by <span className="text-blue-700">Mary Pilot</span>  February 8, 2012 </p>
                    <p className="p-2 pt-2 text-xs leading-none">From Topic Box: <span className="text-blue-600"> Behind the Scene </span></p>

                    
                   
                    <p> </p>
                  </div>
                </li>
                <hr />


                <li className="p-6 flex">
                  <div>
                    <img src="images/user3.jpg" alt="" className="w-28 h-34" />
                  </div>
                  <div className="ml-4 mb-4">
                  <h2 className="p-2  font-bold cursor-pointer leading-tight text-s text-blue-500 mt-2"> NEW COMMENT!  </h2>
                  <h2 className="p-2 pt-2 font-bold cursor-pointer leading-tight text-s">
                  The Best French Restaurant in Chicago ?
                    </h2>
                    <p className="p-2 pt-2 text-xs leading-none">
                      by <span className="text-blue-700">Jim Roy </span> | February 7 2012 </p>
                    <p className="p-2 pt-2 text-xs leading-none">From Topic Box: <span className="text-blue-600"> Chicago Restauran Reviews</span></p>

                    
                   
                    <p> </p>
                  </div>
                </li>
                <hr />


             
                <li className="p-6 flex">
                  <div>
                    <img src="images/user4.jpg" alt="" className="w-28 h-34" />
                  </div>
                  <div className="ml-4 mb-4">
                  <h2 className="p-2  font-bold cursor-pointer leading-tight text-s text-orange-500 mt-2"> TOPIC BOX INVITE  </h2>
                  <h2 className="p-2 pt-2 font-bold cursor-pointer leading-tight text-s">
                  Pea Pesto
                    </h2>
                    <p className="p-2 pt-2 text-xs leading-none">
                      by <span className="text-blue-700">Marianne Gig </span> | February 6 2012  </p>
                    <p className="p-2 pt-2 text-xs leading-none">From Topic Box: <span className="text-blue-600"> Favorite Recipes</span></p>

                    
                   
                    <p> </p>
                  </div>
                </li>
                <hr />


                
            
              </ul>
            </div>
          </div>
          <div className="w-1/4 h-auto bg-white flex justify-start ml-2">
            <div className="w-1/2 h-screen bg-gray-200 mt-8 ml-2">
              <ul className="0">
                <li className="text-white bg-blue-400 p-4"> video Title </li>
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white ">Overview of Tu Tangle</li>
                  
                  
                
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white ">
                  Searching the Site
                </li>
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white">
                  Previous % saved Search
                </li>
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white">
                  The Topic box Page
                </li>
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white">
                  Creating a Topic Box
                </li>
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white">
                  View Topic Box Entries
                </li>
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white">
                  Creating on Entry
                </li>
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white">
                  Privacy Settings
                </li>
                <li className="bg-gray-200 font-bold font-serif p-3.5 text-s hover:text-blue-500 hover:bg-white">
                  Co - Authorin
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer className="footer w-auto bg-gray-500 h-9 flex justify-around">
          <ul className="flex">
            <li className="text-white list-disc p-2 mr-5 cursor-pointer">About us</li>
            <li className="text-white list-disc p-2 mr-5 cursor-pointer">Contact us</li>
            <li className="text-white list-disc p-2 mr-5 cursor-pointer">Term of Use</li>
            <li className="text-white list-disc p-2 mr-5 cursor-pointer">Privacy Policy</li>
            <li className="text-white list-disc p-2 mr-5 cursor-pointer">Feedback</li>
          </ul> 

          <span className="p-2 text-white">© TuTangle 2013</span>
          </footer>
     

      <div className="ml-4 mb-4"></div>
      </div>
    </>

    
  );
};

export default Home;
