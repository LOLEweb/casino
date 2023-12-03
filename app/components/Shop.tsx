"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import adminImg from '../assets/Vector.png'
import coin from './../assets/Coin.svg'
import Card from './Card'
import Modal from './Modal';

const Shop = () => {

  const [isVisibleModal, setIsVisibleModal] = useState(false);



  return (
    <>
      <main className='main bg-[#0d0d0d] h-screen pt-[200px]'>
        <div className='uniq'>
        
          <Card iconImg={adminImg} role={'Locked threads'} price={1488} modalF={() => setIsVisibleModal(true)} />
          <Card iconImg={adminImg} role={'Custom role'} price={1488} modalF={undefined} />
        
          <Card iconImg={adminImg} role={'Nitro gift'} price={1488} modalF={undefined} />
          <Card iconImg={adminImg} role={'Music channels'} price={1488} modalF={undefined} />
        
          <Card iconImg={adminImg} role={'Admin'} price={1488} modalF={undefined} />
          <Card iconImg={adminImg} role={'VIP status'} price={1488} modalF={undefined} />
        
        </div>
        
        { isVisibleModal ? <Modal setActive={setIsVisibleModal} /> : undefined} 
        
      </main>
    </>
  )
}

export default Shop