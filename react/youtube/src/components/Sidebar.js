import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import classNames from 'classnames'
const Sidebar = () => {
    const location = useLocation()
  return (
   <>

   <div class="sidebar bg-red-600 w-2/12 h-full border-2 border-black">
            <ul>
            <Link to="/"><li class={classNames("text-center p-10 text-4xl bg-red-500",{
                  "bg-yellow-200": location.pathname ==="/"
              })}>Home</li></Link>
              <Link to="/shorts"><li class={classNames("text-center p-10 text-4xl bg-red-300",{
                  "bg-yellow-200": location.pathname ==="/shorts"
              })}>Shorts</li></Link>
              <Link to="/trending"><li class={classNames("text-center p-10 text-4xl bg-red-500",{
                  "bg-yellow-200": location.pathname ==="/trending"
              })}>Trending</li></Link>
              <Link to="/library"><li class="bg-red-300 text-center p-10 text-4xl ">Library</li></Link>
              <Link to="/history"><li class="bg-red-500 text-center p-10 text-4xl ">History</li></Link>
              <li class="bg-red-300 text-center p-10 text-4xl ">Exit</li>
            </ul>
          </div>
   </>
  )
}

export default Sidebar