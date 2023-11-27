import React from 'react'
import { footers } from '../../assets/constants'
import { logo } from '../../assets/images'

const Footer = () => {
  return (
    <div className='max-container w-full bg-primary py-32 px-16 flex flex-row justify-between flex-wrap'>
        {
            footers.map((foot)=>(
                <div className='flex flex-col gap-2 mb-16 mx-6'>
                    <p className='text-lg font-semibold text-white mb-1'>{foot.head}</p>
                    {
                        foot.links.map((lk)=>(
                            <p className='text-white text-opacity-[0.60] m-1'>{lk}</p>
                        ))
                    }
                </div>
            ))
        }
        <div className='flex flex-col gap-2'>
            <img src={logo} alt="" />

        </div>
       
      
    </div>
  )
}

export default Footer
