import React from 'react'
import { offerings } from '../../assets/constants'

const WeOffer = () => {
  return (
    <div className='w-full max-container bg-secondary flex flex-col items-center lg:px-32 px-24 py-12'>
        <h3 className='text-white mb-6 text-3xl font-semibold'>We Offer</h3>
        <p className='text-white opacity-60 font-light xl:max-w-sm max-sm:px-10 text-center'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-8'>
        {
            offerings.map((offer)=>(
                <div className=' border border-white p-8 flex flex-col gap-4 '>
                    <img src={offer.img} width={40} alt="" />
                    <h3 className='text-white font-semibold text-xl'>{offer.heading}</h3>
                    <p className='lg:max-w-sm  opacity-60 font-light text-white text-sm'>{offer.content}</p>
                </div>
            ))
        }

      </div>
    </div>
  )
}

export default WeOffer
