"use client"

import ProductCart from '@/components/ProductCart'
import TotalAmount from '@/components/TotalAmount'

import { Product } from '@/types/globalTypes'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    
    const productsCart: Product[] = useSelector((state: Product[]) => state.rootreducer.products.productData)
    const userName = useSelector((state: any) => state.rootreducer.user?.currentUser?.username )

  return (
    <>
      <h1 className='text-xl mt-5 mb-2'>Here is your Cart <span className='text-green-300 text-2xl capitalize'>{userName}</span></h1>
      {productsCart.length === 0 && (<p>But it&apos;s empty now ...</p>)}
      <div className="flex flex-wrap gap-5 justify-evenly overflow-y-auto overflow-x-auto no-scrollbar px-10">
          <ProductCart productsCart={productsCart}  />
      </div>
      <div className="mt-2">
        {productsCart.length > 0 && (<TotalAmount products={productsCart} />)}
      </div>
    </>
  )
}

export default Cart



// {userName !== null ? 
//     (<div className='h-full maw-w-screen-xl mx-auto flex flex-col overflow-y-auto mt-10'>
//         <div>
//             <h1 className='text-xl'>Here is your Cart <span className='text-green-300 text-2xl capitalize'>{userName}</span></h1>
//         </div>
//         {products.length > 0 
//         ?
//         <div className='flex flex-col'>
//             <main className=''>
//                 {products.map((product: any) => (
//                     <div key={product.id}>
//                         <ProductCart product={product}  />
//                         <div className='border-[1px] border-gray-200 mx-72'></div>
//                     </div>
                    
//                 ))}

//             </main>
//             <p>Total : $ <span>{totalAmount}</span></p>
//         </div>
//         :
//         <h1>Empty... Right now ...</h1>
//         }
//         </div>) 
        
// :
//     (<h1>You need to log in for shopping...</h1>)
// }