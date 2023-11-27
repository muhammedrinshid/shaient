import React from 'react'
import { serchimg } from '../../assets/images'
import Button from '../../assets/components/Button'

const WhyChoosUs = () => {
  return (
    <div className='max-container w-full bg-primary flex flex-row py-20 max-md:flex-col-reverse max-lg:px-16'>
        <div className='basis-1/2 flex justify-center items-center ' >
            <img src={serchimg} width={450} alt="" />
        </div>
        <div className='flex flex-col gap-8 justify-center max-md:items-center '>
            <h3 className='text-white text-3xl font-semibold'>Why choose us</h3>
            <p className='max-w-md opacity-60 font-light  text-white text-sm max-md:text-center'>

            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. 
            </p>
            <Button name={"LET'S CONNECT"}/>
        </div>
      
    </div>
  )
}

export default WhyChoosUs
