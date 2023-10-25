"use client"

import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/redux/slice/features/productsSlice'
import Link from 'next/link'
import { User } from '@/types/globalTypes'

interface Item {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
    quantity: number;
  }

const Products = ({products}:{products: any}) => {

  const currentUser = useSelector((state: User) => state.rootreducer.user?.currentUser);
  const userName = currentUser?.username;


  const dispatch = useDispatch()

  return (
    <>
        <h1 className='mt-10 text-3xl'>Choose your next Tech-Product here {userName && <span className='text-5xl text-green-300'>{userName}</span>}</h1>
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10'>
        {products.map((item: Item)=>(
            <div className='w-[270px] border-[1px] border-gray-400 rounded-md overflow-hidden hover:border-gray-800 duration-200' key={item._id}>
                <Link href={{pathname: "/productPage", query:{_id: item?._id, category: item?.category}}}>
                  <Image 
                      src={item?.image} 
                      width={500} 
                      height={500} 
                      alt={`${item?.category}+${item?.brand}`}
                      className='w-full h-80 object-cover'
                      priority
                  />
                  <div className='px-4 pb-2 text-sm flex flex-col gap-2'>
                      <p className='text-gray-600'>
                          {item?.title}
                      </p>
                      <p className='font-semibold'>
                          {item?.price}
                      </p>
                  </div>
                </Link>
                <div className='flex items-center justify-between p-3'>
                    <Link 
                    href={{pathname: "/productPage", query:{_id: item?._id, category: item?.category}}}
                    className='px-3 py-1 border-[1px] border-green-300 hover:text-green-300 rounded-md duration-200'>
                        More info +
                    </Link>
                    <button 
                        disabled={currentUser===null}
                        className='bg-gradient-to-r from-lime-200 to-green-300 px-3 py-1 rounded-md cursor-pointer hover:scale-105 duration-200 disabled:opacity-50 disabled:hover:scale-100'
                        onClick={()=> dispatch(addToCart({
                            id: item._id,
                            title:item.title,
                            price:item.price,
                            description: item.description,
                            category: item.category,
                            image: item.image,
                            brand: item.brand,
                            quantity: 1
                        }))}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        ))}
        </div>
    </>
    )
}

export default Products