"use client"
import Link from 'next/link';
import React from 'react'

import { logoutUser } from "@/redux/slice/features/userSlice";
import { Divide, LogOut, ShoppingCart } from "lucide-react"

import { useDispatch, useSelector } from 'react-redux'


const LogCartButton = () => {
    const user = useSelector((state: any) => state.rootreducer.user.currentUser);
    const cartProducts = useSelector((state: any) => state.rootreducer.products?.productData);
    const dispatch = useDispatch();


  return (
    <>
    {user == null 
        ? <Link href={"/login"}>Login</Link> 
        
        : (
          <div className="flex gap-5 relative">
            <Link href={"/cart"}><ShoppingCart color="#86efac" size={24}/></Link>
            { cartProducts.length > 0 && <div className='text-[12px] text-red-400 absolute left-2 bottom-4'>{cartProducts.length}</div> }
            <LogOut className="cursor-pointer" color='#f87171' onClick={()=>dispatch(logoutUser())}/>
          </div>
        )
        
    }
    </>
  )
}

export default LogCartButton

// <div className='border  border-green-300 p-2 rounded-full flex justify-center items-center hover:border-green-600 duration-200 relative'>
//                 <LogCartButton />
//               <span className='absolute top-0 text-xs font-semibold text-red-400'>{cartProducts.length > 0 && cartProducts.length}</span>
//             </div>
//             {user !==null && 
//               <div className='border border-red-400 p-2 rounded-full flex items-center justify-center hover:border-red-600 duration-200'>
//                 <LogOut color='#f87171' onClick={()=>dispatch(logoutUser())}/>
//               </div>
//             }