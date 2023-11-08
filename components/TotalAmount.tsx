import { getTotalAmount } from '@/helpers/getTotalAmount'
import { Item, Product } from '@/types/globalTypes'
import React from 'react'

const convertToItem = (products: Product[]): Item[] => {
  return products.map((product) => ({
    brand: product.brand,
    category: product.category,
    description: product.description,
    image: product.image,
    isNew: product.isNew,
    oldPrice: product.previousPrice,
    price: product.price,
    title: product.title,
    _id: product.id,
    quantity: product.quantity,
  }));
};

const TotalAmount = ({products} : {products: Product[]}) => {
  const total: string = getTotalAmount(convertToItem(products)).toString()
  return (
    <div><span className='font-semibold'>Total price : $</span>{total}</div>
  )
}

export default TotalAmount