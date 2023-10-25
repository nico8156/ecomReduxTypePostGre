import { getTotalAmount } from '@/helpers/getTotalAmount'
import { Product } from '@/types/globalTypes'
import React from 'react'

const TotalAmount = ({products} : {products: Product[]}) => {
  const total: string = getTotalAmount(products)
  return (
    <div><span className='font-semibold'>Total price : $</span>{total}</div>
  )
}

export default TotalAmount