"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import adminImg from '../assets/Vector.png'
import threads from '../assets/channelTextLockedThread 1.svg'
import gift from '../assets/chatGiftNitro 1.svg'
import guildRole from '../assets/guildRole 1.svg'
import music from '../assets/discoveryMusic 1.svg'
import iconStar from '../assets/iconStarFull 1.svg'

import Card from './Card'
import Modal from './Modal';

const Shop = () => {

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

    const handleCardClick = (title: string) => {
        setIsVisibleModal(true);
        setModalTitle(title);
    }



  return (
    <>
      <main className='main bg-[#0d0d0d] h-screen pt-[200px]'>
        <div className='uniq'>
        
          <Card iconImg={threads} role={'Locked threads'} price={1488} modalF={() => handleCardClick("Locked threads")} />
          <Card iconImg={guildRole} role={'Custom role'} price={1488} modalF={() => handleCardClick("Custom role")} />
        
          <Card iconImg={gift} role={'Nitro gift'} price={1488} modalF={() => handleCardClick("Nitro gift")} />
          <Card iconImg={music} role={'Music channels'} price={1488} modalF={() => handleCardClick("Music channels")} />
        
          <Card iconImg={adminImg} role={'Admin'} price={1488} modalF={() => handleCardClick("Admin")} />
          <Card iconImg={iconStar} role={'VIP status'} price={1488} modalF={() => handleCardClick("VIP status")} />
        
        </div>
        
        { isVisibleModal ? <Modal setActive={setIsVisibleModal} title={modalTitle} /> : undefined} 
        
      </main>
    </>
  )
}

export default Shop