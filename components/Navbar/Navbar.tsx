

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LogCartButton from '../LogCartButton'
import { LogOut } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '@/redux/slice/features/userSlice'
import { redirect } from 'next/navigation'
import { setAllProducts } from '@/redux/slice/features/productsSlice'

const links = [
  {
    title: "Phone",
    href: "/store"
  },
  {
    title: "Phone Case",
    href: "/phonecase"
  },
  {
    title: "Watch",
    href: "/watch"
  }
];

const Navbar = () => {


  return (
    <div className='border-b-[1px] border-green-300 py-2'>
      <nav className='flex justify-evenly items-center'>
        <div className='flex gap-2 items-center'>
          <Link href={"/"} className='text-3xl font-bold'>LOGO</Link>
        </div>
          
        <div className='flex gap-10 items-center'>
          {links.map((link)=>(
            <Link className='font-semibold hover:text-green-300 duration-200' href={link.href} key={link.title}>{link.title}</Link>
          ))}
        </div>
        <div>
          {/* <input type="text" placeholder='Search for a product...' className='border p-2 outline-none rounded-xl placeholder:text-sm' /> */}
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <LogCartButton/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar