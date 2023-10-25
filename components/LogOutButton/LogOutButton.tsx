"use client"

import React from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import { logoutUser } from '@/redux/slice/features/userSlice';
import { clearCart } from '@/redux/slice/features/productsSlice';
import { LogOut } from 'lucide-react';

const LogOutButton = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login')
    dispatch(logoutUser())
    dispatch(clearCart())
  }

  return (

    <button onClick={()=>handleLogout()}>
      <LogOut className="cursor-pointer" color='#f87171'/>
    </button>
    
  )
  }
export default LogOutButton;