import React from "react";

export const DesktopLNavigation = () => {
  return (
    <>
      <div className=" bg-gray-200 h-12 justify-between hidden md:hidden xl:flex">
        <ul className="flex items-center  ">
          <li className="px-4 bg-gray-200 p-3 hover:bg-aquamarine-blue-300">
            <a href="a">Create New Entry</a>
          </li>
          <li className="px-4 bg-gray-200 p-3 hover:bg-aquamarine-blue-300">
            <a href="a">My Topic Box</a>
          </li>
          <li className="px-4 bg-gray-200 p-3 hover:bg-aquamarine-blue-300">
            <a href="a">Friends</a>
          </li>
          <li className="px-4 bg-gray-200 p-3 hover:bg-aquamarine-blue-300">
            <a href="a">Invite New Friends</a>
          </li>
        </ul>

        <ul className="flex items-center px-2 ">
          <li className="p-3 bg-gray-200 hover:bg-aquamarine-blue-300 ">
            <a href="a">Topic Boxes Invites-2</a>
          </li>
          <li>
            <img src="images/friend.png" alt="" className="w-10 h-10 " />
          </li>
          <li className="p-3 mx-8 bg-gray-200 hover:bg-aquamarine-blue-300">
            <a href="a">Friends Requests-0</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const DesktopNavigation = () => {
  return (
    <>
      <div className=" bg-gray-200 h-12 justify-between  font-bold   font-serif hidden md:hidden lg:flex xl:hidden">
        <ul className="flex items-center gap-6  ">
          <li className="p-3 bg-gray-200  hover:bg-aquamarine-blue-300">
            <a href="a">Create New Entry</a>
          </li>
          <li className="p-3 bg-gray-200  hover:bg-aquamarine-blue-300">
            <a href="a">My Topic Box</a>
          </li>
          <li className="p-3 bg-gray-200  hover:bg-aquamarine-blue-300">
            <a href="a">Friends</a>
          </li>
          <li className="p-3 bg-gray-200  hover:bg-aquamarine-blue-300">
            <a href="a">Invite New Friends</a>
          </li>
        </ul>

        <ul className="flex items-center px-2 ">
          <li className="p-3 bg-gray-200 hover:bg-aquamarine-blue-300 ">
            <a href="a">Topic Boxes Invites-2</a>
          </li>
          <li>
            <img src="images/friend.png" alt="" className="w-10 h-10 " />
          </li>
          <li className="p-3 mx-8 bg-gray-200 hover:bg-aquamarine-blue-300">
            <a href="a">Friends Requests-0</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const MobileNavigation = () => {
  function menubar() {}

  return (
    <>
      <div>
        <div className="h-12  flex justify-end cursor-pointer xl:hidden lg:hidden items-center   ">
          <div
            className="flex  hover:bg-aquamarine-blue-500 p-3 "
            onClick={menubar}
          >
            <div className="mx-2">Menu</div>
            <img src="images/menu.png" alt="" className="w-4 h-4 my-1.5" />
          </div>
        </div>
      </div>
    </>
  );
};

export const TabNavigation = () => {
  return (
    <>
      <div className="w-36 h- bg-lime-300">
        <div>
          <div className=" bg-lime-200">Home</div>
          <div className=" bg-lime-200">contact</div>
        </div>

        <div className="flex items-end h-44 bg-lime-300">
          <div>Logout</div>
        </div>
      </div>
    </>
  );
};
