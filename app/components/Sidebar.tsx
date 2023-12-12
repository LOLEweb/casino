'use client'
import React from 'react'
import Image from 'next/image'
import avatar from './../assets/avatar.png'
import iconDise from './../assets/icon-dise.svg'
import iconLeave from './../assets/icon-off.svg'
import Link from 'next/link'

// backend files
import file_back from './../backend/app.js'
import {signIn, signOut} from 'next-auth/react'
import {useSession} from "next-auth/react"
//

const Sidebar = () => {
  const {status} = useSession();
  return (
    <>
    <div className=' bg-[#131313] 2xl sidebar pt-4 pl-6 min-h-full fixed'>
        <div className='flex items-center gap-3 mb-6'>
          <Image src={avatar} alt={'avatar'} />
          <h2 className=' text-white font-semibold text-2xl'>Elitium</h2>
        </div>
        <ul className=' text-[#838286] text-sm flex flex-col gap-4'>
          <li className=' py-3'>
            <Link href="/" legacyBehavior>
              <a className='flex gap-4 duration-300 hover:text-[#794DFD]'>
              <Image src={iconDise} alt={'icon'} />
              Рулетка
              </a>
            </Link>
          </li>
          <li className=' py-3'>
            <Link href="/shop" legacyBehavior>
            <a className='flex gap-4 duration-300 hover:text-[#794DFD]'>
              <Image src={iconDise} alt={'icon'} />
              Магазин
            </a>
          </Link>
          </li>
          <li className=' py-3'>
            <a href="#"  className='flex gap-4 duration-300 hover:text-[#794DFD]' >
            <Image src={iconLeave} alt={'icon'} />
              {status === "authenticated" ? ( //Если игрок авторизован, то выводится Log Out, если нет, то Log in
                <button onClick={() => signOut()}>Log out</button> /*При нажатие на кнопку производится авторизация*/
              ): (
                <button onClick={() => signIn('discord')}>Log in</button> /*При нажатие на кнопку вызывается функция */
              )}
              
            </a>
          </li>
        </ul>
      </div>
    
    
    </>
  )
}

export default Sidebar