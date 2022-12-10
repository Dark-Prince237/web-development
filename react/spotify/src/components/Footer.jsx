import React from 'react'

export const Footer = () => {
  return (
   <>
    <div className="bg-cod-gray-500 w-full h-20  bottom-0 fixed">
    <div class="">
	<div class="player px-6  mx-auto ">
	
		
		
		<div class="">
			<div class="h-1 bg-gray-300">
				<div class="h-full w-2/3 bg-gray-600 hover:bg-gray-800"></div>
			</div>
			<div class="flex justify-between ">
				<span class="text-xs text-gray-600">2:45</span>
				<span class="text-xs text-gray-600">3:15</span>
			</div>
		</div>
		<div class="flex items-center justify-center ">
			<button class="play-button w-10 h-10 rounded-full text-gray-500 hover:text-gray-700">
				<svg class="m-auto w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
			</button>
			<button class="play-button w-20 h-20 rounded-full flex mx-4 text-gray-700 hover:text-gray-900">
				<svg class="m-auto w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
			</button>
			<button class="play-button w-10 h-10 rounded-full text-gray-500 hover:text-gray-700">
				<svg class="m-auto w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
			</button>
		</div>
	</div>
</div>
    </div>
   </>


)};
