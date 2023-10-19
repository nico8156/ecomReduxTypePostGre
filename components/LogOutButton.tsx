"use client"

import { logoutUser } from '@/redux/slice/features/userSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const LogOutButton = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <button 
        className='border-[2px] border-blue-500 text-black px-4 py-2 rounded-md'
        onClick={()=>dispatch(logoutUser())}>
          Click to LogOut
        </button>
    </div>
  )
  }
export default LogOutButton;