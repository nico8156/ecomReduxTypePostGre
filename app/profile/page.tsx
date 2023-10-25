"use client"

import { User } from "@/types/globalTypes";

import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { loginUser, logoutUser } from "@/redux/slice/features/userSlice";
import { clearCart } from "@/redux/slice/features/productsSlice";



type ProfileData = {
    email: string
    username: string
    photo?: string
  }


const Profile = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: User) => state.rootreducer.user?.currentUser);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm<ProfileData>({defaultValues: user})

    const onSubmit = async(data: ProfileData) =>{
        
        const response = await fetch('/api/user/profile', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                photo: data.photo
            })
          })
        if (response.status === 200){
            reset()
            dispatch(loginUser(data))
            router.push('/');
            router.refresh();
        }
    }
    const onDelete = async () => {
        const response = await fetch('/api/user/profile', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
            })
          })
        if (response.status === 201){
            reset()
            dispatch(logoutUser())
            dispatch(clearCart())
            router.push('/');
            router.refresh();
        }
    }
    

    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className='font-bold text-2xl text-red-400'>Your Profile:</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5 p-10 border rounded-xl border-green-300 xl:w-1/2 w-2/3">

                <label className='mb-2 mt-1 font-bold' htmlFor="username">
                    Username:
                </label>
                <input 
                    className="focus:outline-none px-2 py-2 border rounded-lg border-gray-200" 
                    type="text" 
                    id="username"
                    {...register("username", {required: "Username is required"})}
                    />

                <label htmlFor="email" className="mb-2 mt-1 font-bold">
                    Email: 
                </label>
                <input 
                    className="focus:outline-none px-2 py-2 border rounded-lg border-gray-200" 
                    type="email" 
                    id="email"
                    {...register("email", {required: "Email is required"})}
                    />

                <label htmlFor="photo" className="mb-2 mt-1 font-bold">
                    Photo: 
                </label>
                <input 
                    className="focus:outline-none px-2 py-2 border rounded-lg border-gray-200" 
                    type="text" 
                    placeholder="add an url to display your photo" 
                    id="photo"
                    {...register("photo")}
                    />

                <div className="flex gap-5 justify-center">
                    <button 
                    className=" w-full font-semibold px-4 py-4 border border-green-300 mt-7 rounded-md hover:bg-green-300 duration-200 hover:border-white"
                    >
                        update
                    </button>
                </div>
            </form>
                    <button 
                    className="font-semibold px-4 py-4 border border-red-400 mt-7 rounded-md hover:bg-red-400 duration-200 hover:border-white"
                    onClick={()=> onDelete()}
                    >Delete Profile</button>
        </div>

    )
}

export default Profile

    
