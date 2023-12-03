import Image from 'next/image'
import React, { FC } from 'react'
import star from '../assets/Star-icon.svg'
type modal = {
setActive: any
}

const Modal:FC<modal> = ({setActive}) => {
    return (
    <>
        <div onClick={()=> setActive(false)} className='overlay'></div>
        <div className='modal'>
            <div className='gif-modal'>
                1
            </div>
            <div className='flex flex-col items-center text-center text-2xl text-white'>
                <Image src={star} alt='icon' />
                <h3 className=' text-4xl mb-12'>VIP status</h3>
                <p className='max-w-[315px]'>
                    Lorem ipsum dolor sit amet consectetur. Blandit tellus elementum suspendisse odio. Faucibus penatibus
                    lobortis quis tempor eget libero sagittis orci est. Vulputate facilisi condimentum id bibendum.
                    Massa ornare 
                </p>
                <button>123</button>
            </div>
        </div>
    </>
    )
    }

    export default Modal