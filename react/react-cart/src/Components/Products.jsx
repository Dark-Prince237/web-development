import React from 'react'
import Product from '../Components/Product'

const Products = () => {
  return (
    <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="grid grid-cols-5  gap-24 ">
            <Product/>
            <Product/>z
            <Product/>
            <Product/>
         
            <Product/>
            <Product/>
         </div>

    </div>
  )
}

export default Products