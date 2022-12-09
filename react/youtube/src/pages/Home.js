import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import searchImage from "../images/search.png";

const Home = () => {
  return (
    <>
      <div class=" border-8 border-black m-0 p-0 box-border">
        <Topbar />

        <div class="bg-purple-100 border-3 border-black w-full h-screen  flex">
          <Sidebar />
          <div class="bg-white-300 w-10/12 h-full  border-3 border-black">
            <div class=" flex w-full h-screen flex-col  overflow-hidden bg-gradient-to-br from-yellow-300 to-red-500 p-6 sm:py-12">
              <span className="w-20 inline-block absolute ml-[323px] mt-[40px] text-4xl font-bold">
                Search
              </span>
              <img
                src={searchImage}
                alt=""
                className="w-20 inline-block absolute ml-[480px] mt-[40px]"
              />
              <div class="relative rounded-2xl bg-red-600 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
                <div class="mx-auto max-w-md">
                  <form action="" class="relative mx-auto w-full">
                    <input
                      type="search"
                      class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-7
                       outline-none focus:w-full focus:cursor-text focus:border-red-300 focus:bg-red-300 focus:ring-red-300 focus:pl-10 focus:pr-4"
                    />
                  </form>
                </div>
              </div>
              <div class="py-10 flex ">
                <div>
                  <div class="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.youtube.com/embed/EgT_us6AsDg"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="m-3"
                    ></iframe>
                  </div>
                  <p class="text-center">Selena Gomez-The Love You Like a Love</p>
                </div>

                <div>
                  <div class="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.youtube.com/embed/0tjVtYtZ384"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="m-3"
                    ></iframe>
                  </div>
                  <p class="text-center">Falguni Pathak-Maine Churi hai chankai</p>
                </div>

                
                <div>

                <div class="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/eN6AYHAT8UM"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="m-3"
                  ></iframe>
                </div>
                <p class="text-center">Yaad Piya Ki Aane Lagi</p>
                </div>
                <div>
                <div class="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/1zfzka5VwRc"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="m-3"
                  ></iframe>
                </div>

                <p class="text-center">Demi Lovato - Give Your Heart a Break </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
