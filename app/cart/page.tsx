"use client"

import ProductCart from '@/components/ProductCart'
import TotalAmount from '@/components/TotalAmount'

import { Product, User } from '@/types/globalTypes'
import { redirect, useRouter } from 'next/navigation'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '@/redux/slice/features/productsSlice'

const Cart = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const productsCart: Product[] = useSelector((state: Product[]) => state.rootreducer.products.productData)
  const currentUser = useSelector((state: User) => state.rootreducer.user?.currentUser)
  
  if(currentUser == null) {
    router.refresh()
    router.push('/')
    dispatch(clearCart())
  }
  
  const userName = currentUser?.username

  return (
    <>
      <h1 className='text-xl mt-5 mb-2'>Here is your Cart <span className='text-green-300 text-2xl capitalize'>{userName}</span></h1>
      {productsCart?.length === 0 && (<p>But it&apos;s empty now ...</p>)}
      <div className="flex flex-wrap gap-5 justify-evenly overflow-y-auto overflow-x-auto no-scrollbar px-10">
          <ProductCart productsCart={productsCart}  />
      </div>
      <div className="mt-2">
        {productsCart?.length > 0 && (<TotalAmount products={productsCart} />)}
      </div>
    </>
  )
}

export default Cart