"use client"

import Link from 'next/link';
import Image from 'next/image';
import {  useSelector } from 'react-redux'
import { ShoppingCart } from "lucide-react"

import { Product, User } from '@/types/globalTypes';
import LogOutButton from '../LogOutButton/LogOutButton';

const LogCartButton = () => {

    const user = useSelector((state: User) => state.rootreducer.user.currentUser);
    const cartProducts = useSelector((state: Product[]) => state.rootreducer.products?.productData);
    
  return (
    <>
    {user == null 
        ? <Link href={"/login"}>Login</Link> 
        
        : (
          <div className="flex gap-5 relative items-center">
            <Link href={"/cart"}><ShoppingCart color="#86efac" size={24}/></Link>
            { cartProducts?.length > 0 && <div className='text-[12px] text-red-400 absolute left-2 bottom-4'>{cartProducts.length}</div> }
            
            <LogOutButton/>
            
            <Link href={'/profile'}>
              <Image 
                src={user.photo === "undefined" ? "https://images.pexels.com/photos/209695/pexels-photo-209695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : user.photo}
                alt='profile'
                height={30}
                width={30}
                className='w-[30px] h-[30px] cursor-pointer hover:scale-110 duration-200 rounded-full object-cover'
                
              />
            </Link>
          </div>
        )
    }
    </>
  )
}

export default LogCartButton