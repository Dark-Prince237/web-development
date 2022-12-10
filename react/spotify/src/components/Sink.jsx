import React from "react";

export const Sink = () => {
  return (
    <>
      <div className="bg-yellow-400 h-screen ">
        <div className="flex w-full h-544">
          {/* sidebar */}
          <div className="w-1/4  flex flex-col justify-between bg-black  ">
            <div className=" ">
              <div className="flex p-4 ">
                <img src="images/spotify.png" alt="reload soon" />
                <span className="text-white p-2 text-2xl font-bold">
                  Spotify
                </span>
              </div>

              <div className="flex px-4 py-2 hover:brightness-125 hover:cursor-pointer">
                <img src="images/home.png" alt=" reload soon" />
                <span className="text-white px-4">Home</span>
              </div>

              <div className="flex px-5 py-2 hover:brightness-125 hover:cursor-pointer ">
                <img
                  src="images/search.png"
                  alt=" reload soon"
                  className="w-5 h-5"
                />
                <span className="text-gray-300 px-6 text-sm">Search</span>
              </div>

              <div className="flex px-5 py-2 hover:brightness-125 hover:cursor-pointer ">
                <img
                  src="images/library.png"
                  alt=" reload soon"
                  className="w-5 h-5"
                />
                <span className="text-gray-300 px-6 text-sm">Your Library</span>
              </div>

              <div className="flex px-5 pt-6 pb-2 hover:brightness-200 hover:cursor-pointer ">
                <img
                  src="images/plus.png"
                  alt=" reload soon"
                  className="w-5 h-5 h "
                />
                <span className="text-gray-300 px-6 text-sm">
                  Create Playlist
                </span>
              </div>

              <div className="flex px-5 py-2 hover:brightness-125 hover:cursor-pointer ">
                <img
                  src="images/heart.png"
                  alt=" reload soon"
                  className="w-5 h-5"
                />
                <span className="text-gray-300 px-6 text-sm">Liked Songs</span>
              </div>

              <div className="flex px-5 py-2  hover:brightness-125 hover:cursor-pointer ">
                <img
                  src="images/banner.png"
                  alt=" reload soon"
                  className="w-5 h-5"
                />
                <span className="text-gray-300 px-6 text-sm">
                  Your Episodes
                </span>
              </div>
              <hr className=" h-2 w-11/12  pr-2 mx-4 my-2 text-center" />
            </div>

            <div className="flex px-5 pb-3 hover:brightness-125 hover:cursor-pointer ">
              <img
                src="images/download.png"
                alt=" reload soon"
                className="w-5 h-5 "
              />
              <span className="text-gray-300 px-6 text-sm">Install App</span>
            </div>
          </div>

          <div className="h-full w-3/4 bg-cod-gray-400">
            <div className="h-16 w-full bg-cod-gray-500"></div>
          </div>
        </div>
        <div className="bg-cod-gray-500 w-full h-20 absolute bottom-0"></div>
      </div>
    </>
  );
};
