import React from 'react'
import Button from '../../assets/components/Button'

const Mail = () => {
  return (
    <div className='max-container w-full p-10 bg-primary '>
      <div className='bg-yellow rounded-sm py-16 flex flex-col justify-center items-center gap-6 px-12' >
        <h3 className='text-3xl font-bold text-center'>
        Let’s discuss the idea
        </h3>
        <p className='max-w-md text-center text-sm text-opacity-[60%]'>
        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. 
        </p>
        <div className='flex flex-row  flex-nowrap'>
            <input type="text" placeholder='your mail' className='pl-4  text-white-400 max-sm:w-full flex-1 mr-4 border-2  py-2 text-sm rounded-full border-[#A1AEBF]' />
            <Button name={"SEND"} isBlack={true}/>       </div>
      </div>
    </div>
  )
}

export default Mail
