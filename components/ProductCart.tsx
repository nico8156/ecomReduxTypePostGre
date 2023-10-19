"use client"
import { Minus, Plus, Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from './../redux/slice/features/productsSlice'
import { Product } from '@/types/globalTypes';

const ProductCart = ({productsCart}:any) => {

    const dispatch = useDispatch();
    

    // const { id, title, description, brand, price, quantity, image } = product;
  return (
    <>
    
    <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-1 no-scrollbar'>
        {productsCart.map((item: Product) =>(
            <div key={item.id} className='flex gap-5 items-center overflow-hidden border-b-2'>
                <button onClick={() => dispatch(removeFromCart(item))}>
                    <Trash size={18} color="#ef4444"/>
                </button>
                <Image src={item.image} width={300} height={300} alt={item.title} className='w-full h-80 object-cover' priority />
                <div>
                    <p className='font-semibold'>{item.title}</p>
                    <p className='text-green-300'>{item.brand}</p>
                    <p>{item.description}</p>
                    <p className='text-l font-semibold'>{item.price} $</p>
                </div>
                <div className='flex gap-5'>
                    <button onClick={() => dispatch(decreaseQuantity(item))}>
                        <Minus />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => dispatch(increaseQuantity(item))}>
                        <Plus />
                    </button>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProductCart
