import React from 'react'

import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

import { Sidebar } from "../components/Sidebar";

const Home = () => {
  return (
    <>
    <div className="bg-yellow-400 h-screen ">

      <div className="flex w-full h-544">
        <Sidebar />
        <Main/>
      </div>

      <Footer/>
      
    </div>
  </>
  )
}

export default Home