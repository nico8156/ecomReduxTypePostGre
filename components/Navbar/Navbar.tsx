import Link from 'next/link'
import React from 'react'
import LogCartButton from '../LogCartButton/LogCartButton'

interface Link {
  title: string
  href: string
}

const links: Link[] = [
  {
    title: "Phone",
    href: "/store/phone"
  },
  {
    title: "Phone Case",
    href: "/store/phoneCase"
  },
  {
    title: "Watch",
    href: "/store/watch"
  }
];

const Navbar: React.FC = () => {


  return (
    <div className='border-b-[1px] border-green-300 py-2 px-10'>
      <nav className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <Link  href={"/"} className='text-3xl font-bold'>LOGO</Link>
        </div>
          
        <div className='flex gap-10 items-center'>
          {links.map((link)=>(
            <Link 
            as={link.href}
            className='font-semibold hover:text-green-300 duration-200' 
            href={link.href} 
            key={link.title}
            >{link.title}</Link>
          ))}
        </div>
        
        <div className='flex items-center gap-2'>
          <LogCartButton/>
        </div>

      </nav>
    </div>
  )
}

export default Navbar