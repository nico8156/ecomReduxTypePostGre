"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"


import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { loginUser } from '@/redux/slice/features/userSlice'



type FormData = {
  email: string
  password: string
}

const Login = () => {

  const router = useRouter();
  
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async(data: FormData) => {

    
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
    if(response.status === 201){
      const data = await response.json();
      console.log({data})
      reset();
      router.push('/')
      if(data){
        const username = data.userByEmail.username;
        const email = data.userByEmail.email;
        console.log({username}, {email});
        dispatch(loginUser(
          {username: username,
          email: email}
        ))
      }
    }
  }

  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl text-red-400'>
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-5 p-10 border rounded-xl border-green-300 w-1/3'>
        <label 
          className='mb-2 mt-1 font-bold' 
          htmlFor="email"
          
          >
          Email:
        </label>
        <input 
          className='focus:outline-none px-2 py-2 border rounded-lg border-gray-200' 
          placeholder='Enter your Email'
          id='email'
          {...register("email", {required: "Email is required"})}
        />
        {errors.email && (<p className='text-red-500'>{`${errors.email.message}`}</p>)}
        <label className='mb-2 mt-1 font-bold' htmlFor="password">
          Password:
        </label>
        <input 
          className='focus:outline-none px-2 py-2 border rounded-lg border-gray-200' 
          placeholder='Enter your Password' 
          type='password' 
          id='password'
          {...register("password", {required: "Password is required"})}
        />
        {errors.password && (<p className='text-red-500'>{`${errors.password.message}`}</p>)}
        <button 
          disabled={isSubmitting}
          className='font-semibold px-4 py-4 border border-red-400 mt-7 rounded-md hover:bg-red-400 duration-200 hover:border-white'  
          type='submit'
        >
          Submit
        </button>
      </form>
      <h3 className='mt-2'>Want to register, it is <span className='text-orange-600  hover:text-orange-300 duration-200'>
        <Link href={"/register"}>
          Here
        </Link>
        </span>
      </h3>
    </div>
  )
}

export default Login


