import React from 'react'
import { Navigation } from './Navigation'





export const MainImage = ({ image, name, singer, image_class }) => {
  return (
    <>
      <div className="w-56 px-8 py-6 h-3/12  rounded-xl  bg-cod-gray-700 hover:transition duration-1000 ease-linear  border border-green-900 hover:border-y-green-400 hover:border-x-blue-400   transform hover:skew-y-12 hover:scale-110 hover:drop-shadow-2xl hover:animate-bounce  ">
        <img src={image} alt="" className={image_class} />
        <p className="text-white py-3 text-center">{name} </p>
        <p className="text-xs text-gray-300  py-2 text-center">{singer}</p>
        <img src="images/play5.png " className="relative w-12 h-12 bottom-0 left-32 opacity-20 hover:opacity-100 hover:-scale-150 hover:animate-bounce" alt="" />

      </div>
    </>
  )
}



export const Main = () => {
  return (
    <>   <div className="h-full w-3/4 bg-cod-gray-400 overflow-auto">
      <Navigation />


      <div className="h-full w- bg-cod-gray-400 ">


        <div >
          <div className="flex justify-between py-4 px-4">

            <h1 className="text-white  text-2xl font-md">Popular albums</h1>
            <p className="text-gray-300 text-sm font-md hover:underline">SHOW ALL</p>
          </div>

          <div className="flex gap-4 px-6 flex-wrap">

            {[{image: "images/img1.jpg",name: "Apna Bana Le",singer: "Arjit Singh" },
              {image:"images/img2.jpg", name:"Champagne Talk" ,singer:"King"},
              {image:"images/img3.jpg", name:"Thee Thalapathy" ,singer:" Silambarasan TR,Thaman S" },
              {image:"images/img4.jpg", name:"The Carnival"  ,singer:"King"},

              
              
              ].map(({image,name,singer})=>(

              <MainImage image={image} name={name} singer={singer}/>
              
              ))}

            {/* <MainImage image="images/img1.jpg" name="Apna Bana Le" singer="Arjit Singh,Sachin-Jigar" />
            <MainImage image="images/img2.jpg" name="Champagne Talk" singer="King" />
            <MainImage image="images/img3.jpg" name="Thee Thalapathy" singer=" Silambarasan TR,Thaman S" />
            <MainImage image="images/img4.jpg" name="The Carnival" singer="King" /> */}

          </div>



        </div>


        <div>
          <div className="flex justify-between py-4 px-4">

            <h1 className="text-white  text-2xl font-md">Charts</h1>
            <p className="text-gray-300 text-sm font-md  hover:underline">SHOW ALL</p>
          </div>

          <div className="flex gap-4 px-6 flex-wrap">
            <MainImage image="images/img5.jpg" name="Hot Hits Telugu" singer="Tune in to the Hottest" />
            <MainImage image="images/img6.jpg" name="Latest Telugu" singer="New Music From Tollywood!" />
            <MainImage image="images/img7.jpg" name="Hot Hits Tamil" singer="Tune in to the Hottest tracks" />
            <MainImage image="images/img8.jpg" name="Hot Vikram Songs" singer="Tune Hot in the South " />

          </div>



        </div>

        <div>
          <div className="flex justify-between py-4 px-4 ">

            <h1 className="text-white  text-2xl font-md">Popular Artist</h1>
            <p className="text-gray-300 text-sm font-md  hover:underline">SHOW ALL</p>
          </div>
          {["Artist"].map(d => (
            <div className="flex gap-4 px-6 flex-wrap">
              <MainImage image="images/img9.jpg" name="A.R.Rahman" singer={d} image_class=" rounded-full hover:animate-spin-slow " />
              <MainImage image="images/img10.jpg" name="Sidhu Moose Wala" singer={d} image_class=" rounded-full hover:animate-spin-slow" />
              <MainImage image="images/img11.jpg" name="Yuvan Shankar Raja" singer={d} image_class=" rounded-full hover:animate-spin-slow" />
              <MainImage image="images/img12.jpg" name="Pritam" singer={d} image_class=" rounded-full hover:animate-spin-slow" />

            </div>
          )

          )}




        </div>




      </div>
    </div>

    </>
  )
}

