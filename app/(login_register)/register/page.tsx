"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"

type FormData = {
  username: string
  email: string
  password: string
  confpassword: string
}

const Register = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()


  const onSubmit = async(data: FormData) => {

    try {

      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password
        })
      })
      if(response.status === 201){
        router.push('/login')
      }
      reset();
      return true;
      
    } catch (error) {

      console.error(error)
      
    }
    
    

  }

  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl text-red-400'>
        Register
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-5 p-10 border rounded-xl border-green-300 xl:w-1/2 w-2/3'>
        <label htmlFor='username' className='mb-2 font-bold'>
          Username:
        </label>
        <input 
          id='username'
          autoComplete="off"
          className='focus:outline-none px-2 py-2 border rounded-lg border-gray-200' 
          placeholder='Enter your Username' 
          
          {...register("username", {required: "Username is required"})}
          />
          {errors.username && (<p className='text-red-500'>{`${errors.username.message}`}</p>)}
        <label htmlFor='email' className='mb-2 mt-1 font-bold'>
          Email:
        </label>
        <input 
          id='email'
          autoComplete="off"
          className='focus:outline-none px-2 py-2 border rounded-lg border-gray-200' 
          placeholder='Enter your Email'
          
          {...register("email", {required: "Email is required"})}
        />
        {errors.email && (<p className='text-red-500'>{`${errors.email.message}`}</p>)}
        <label htmlFor='password' className='mb-2 mt-1 font-bold'>
          Password:
        </label>
        <input 
          id='password'
          autoComplete="off"
          className='focus:outline-none px-2 py-2 border rounded-lg border-gray-200' 
          placeholder='Enter your Password' 
          type='password' 
          
          {...register("password", {minLength:{
            value: 6,
            message: "Past word must constains at least 6 characters"
          }})}
        />
        {errors.password && (<p className='text-red-500'>{`${errors.password.message}`}</p>)}
        <label  className='mb-2 mt-1 font-bold' htmlFor="confpassword">
          Confirm your Password:
        </label>
        <input 
          autoComplete="off"
          className='focus:outline-none px-2 py-2 border rounded-lg border-gray-200' 
          placeholder='Confirm your Password'
          type='password'
          id='confpassword'
          {...register("confpassword", {required : "Confirm password is required",
                validate: (value) =>
                  value === getValues("password") || "Password must match" })}
        />
        {errors.confpassword && (<p className='text-red-500'>{`${errors.confpassword.message}`}</p>)}
        <button 
          disabled={isSubmitting}
          className='px-4 py-4 border border-red-400 mt-7 rounded-md hover:bg-red-400 duration-200 hover:border-white'  
          type='submit'
        >
          Submit
        </button>
      </form>
      <h3 className='mt-2'>Already have an account ... Go <span className='text-orange-600 hover:text-orange-300 duration-200'>
        <Link href={"/login"}>
          Here
        </Link>
        </span>
      </h3>
    </div>
  )
}

export default Register