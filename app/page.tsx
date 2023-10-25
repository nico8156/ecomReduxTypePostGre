
import Image from 'next/image'

export default function Home() {
  
  return (
    
    <main className='h-full w-full py-5 px-10 relative'>
      <Image 
        className="object-cover w-full h-full opacity-40" 
        src={"https://images.pexels.com/photos/2850438/pexels-photo-2850438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
        alt='city view' 
        width={800} 
        height={800}
        priority
        />
      <h1 className='text-6xl text-center mt-20 absolute top-10 left-0 right-0'>Here is your shop for tech <span className='text-green-300'>Products!</span></h1>
    </main>
  )
}
