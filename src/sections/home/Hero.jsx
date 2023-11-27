import React from 'react'
import { saffron, violet } from '../../assets/images'
import Button2 from '../../assets/components/Button2'

const Hero = () => {
    return (
        <div className='h-screen relative bg-hero bg-primary flex justify-center items-center w-full max-container' >
            <img src={saffron} className='absolute bottom-0 left-0 h-[60%]' alt="" />
            <img src={violet} className='absolute top-0 right-0 h-[60%]' alt="" />
            <div className='sm:max-w-md max-sm:max-w-xs'>

                <h1 className='text-white text-[4rem] max-lg:text-[3rem] max-sm:text-[2rem] font-semibold leading-[4rem] max-lg:leading-[3rem] max-sm:leading-[2rem]'>Attract <span className='primary-greadient text-transparent font-bold bg-clip-text'>NewLeads</span><br />
                    { } like never before</h1>
                <p className='text-white opacity-60 font-light mt-4'>
                    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
                </p>
                <div className='flex flex-row gap-2 mt-8 max-sm:flex-wrap'>
                    <input placeholder='Email' type="text" className='pl-4 text-white-400 max-sm:w-full flex-1 mr-4 border rounded-full border-white-400 bg-transparent' />
                    <Button2 name='ATTRACT' />
                </div>
            </div>
        </div>
    )
}


export default Hero
