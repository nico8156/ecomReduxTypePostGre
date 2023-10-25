import { getSingleProduct } from '@/helpers/getSingleProduct';
import { Item } from '@/types/globalTypes';
import Image from 'next/image';
import React from 'react'

type Props = {
    searchParams: {[key: string]: string | string[] | undefined}
}

const PageProduct = async({searchParams}:Props) => {
    const { idP, category } = searchParams;
    let categoryString = category?.toString();
    console.log({category})
    const id = Number(searchParams._id);
    const categoryProduct = categoryString?.replace(" ", "");
    console.log(categoryProduct)
    console.log(id)
    const product: Item = await getSingleProduct(id, categoryString);
  return (
    <div className='max-w-screen-xl mx-auto flex items-center gap-10'>
        <Image 
        src={product?.image} 
        alt={`${product?.title}`} 
        width={500} 
        height={500} 
        />
        <div className='flex flex-col gap-3'>
            <p className='text-xl font-semibold'>{product.title}</p>
            <p className='text-sm'>{product?.description}</p>
            <p>Price: ${product?.price}</p>
            <p>Category: {product?.category}</p>
            <p className='text-green-300'>{product?.isNew && "New Item"}</p>
        </div>
    </div>
  )
}

export default PageProduct