import Products from '@/components/products/Products';
import { getData } from '@/helpers/getProdctsByCategory';
import React from 'react'



const Watch = async() => {

  const category = "watch"
  const products = await getData(category);
  return (
    <div className="flex flex-wrap gap-5 justify-evenly overflow-y-auto no-scrollbar">
       <Products products={products}/>
    </div>
  )
}

export default Watch