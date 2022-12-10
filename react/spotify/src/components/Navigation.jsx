

export const Navigation = () => {
    return (
        <>
            <div className="h-16 w-full bg-cod-gray-500 ">

                <div className="flex justify-between ">
                    <div className="flex px-16 py-2 ">

                        {[{ value: "w-8 h-8 bg-black rounded-2xl m-2 opacity-50", image: "images/left.png" }, { value: "w-8 h-8 bg-black rounded-2xl m-2", image: "images/right.png" }].map(({ value, image }) =>
                        (
                            <div className={value}>
                                <img src={image} alt="" className="w-6 h-6 m-1.5" />
                            </div>
                        )

                        )}
                    </div>



                    <div className="flex py-4 px-4 bg-cod-gray-500 gap-8 ">
                     <button className="bg-cod-gray-500 px-2  text-white rounded-2xl border hover:bg-cod-gray-400" >Upgrade</button>
                     <div className="bg-cod-gray-500  hover:bg-cod-gray-400 flex px-3  items-center gap-2 rounded-2xl">
                         <img src="images/login.png" alt=""  className="w-8 h-8  "/>
                         <p className="text-white  font-bold">Rashid</p>
                         <img src="images/down.png" alt=""  className="w-3 h-3 "/>
                     </div>
                    </div>
                </div>

                <div>


                </div>

            </div>
        </>
    )
}
