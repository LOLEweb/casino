import React from 'react'
import Image from 'next/image'
import avatar from './../assets/avatar.png'
import iconDise from './../assets/icon-dise.svg'
import iconSHop from './../assets/akar-icons_cart.svg'
import iconLeave from './../assets/icon-off.svg'
import Link from 'next/link'


const Sidebar = () => {
  return (
    <>
    <div className=' bg-[#131313] sidebar pt-4 lg:pl-6 min-h-full fixed lg:block flex flex-col items-center'>
        <div className='flex items-center gap-3 mb-6'>
          <Image src={avatar} alt={'avatar'} />
          <h2 className=' text-white font-semibold text-2xl lg:block hidden'>Elitium</h2>
        </div>
        <ul className=' text-[#838286] text-sm flex flex-col gap-4'>
          <li className=' py-3'>
            <Link href="/" legacyBehavior>
              <a className='flex gap-4 duration-300 hover:text-[#794DFD]'>
              <Image className='lg:w-5 lg:h-5 w-6 h-6' src={iconDise} alt={'icon'} />
              <p className='lg:block hidden'>Рулетка</p>
              </a>
            </Link>
          </li>
          <li className=' py-3'>
            <Link href="/shop" legacyBehavior>
            <a className='flex gap-4 duration-300 hover:text-[#794DFD]'>
              <Image className='lg:w-5 lg:h-5 w-6 h-6' src={iconSHop} alt={'icon'} />
              <p className='lg:block hidden'>Магазин</p>
            </a>
          </Link>
          </li>
          <li className=' py-3'>
            <a href="#" className='flex gap-4 duration-300 hover:text-[#794DFD]'>
            <Image className='lg:w-5 lg:h-5 w-6 h-6' src={iconLeave} alt={'icon'} />
              <p className='lg:block hidden'>Log out</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar