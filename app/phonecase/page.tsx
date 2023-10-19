import Products from '@/components/Products';
import { getData } from '@/helpers/getProdctsByCategory';
import { Product } from '@/types/globalTypes';
import React from 'react'



const PhoneCase = async() => {

  const category = "phonecase"
  const products = await getData(category);
  return (
    <div className="flex flex-wrap gap-5 justify-evenly overflow-y-auto no-scrollbar">
       <Products products={products}/>
    </div>
  )
}

export default PhoneCase