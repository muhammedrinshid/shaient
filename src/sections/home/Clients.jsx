import React from 'react'
import { clients } from '../../assets/constants'

const Clients = () => {
    return (
        <div className='w-full max-container bg-primary pb-32'>

            <div className='p-12 flex flex-row max-md:flex-col'>
                <h3 className='text-[2.4rem] font-semibold text-white basis-1/2  px-4'>
                    Trusted by 200+ companies around the world            </h3>
                <p className='text-white opacity-60 font-light mt-4 basis-1/2 px-4'>
                    Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
                </p>

            </div>
            <div>
                <div className='flex flex-row gap-4 flex-wrap max-lg:px-4  overflow-clip lg:pl-56 max-lg:justify-center mt-12'>{
                    clients.map((client) => (
                        <div className='px-4 py-2 border border-white-400  rounded-md '>
                            <img src={client.img} width={120} alt={client.altText} />
                        </div>
                    ))
                }</div>
                <div className='   flex flex-wrap flex-row-reverse gap-4 max-lg:px-4 lg:pr-56 overflow-clip  max-lg:justify-center mt-12'>{
                    clients.map((client) => (
                        <div className='px-4 py-2 border border-white-400  rounded-md '>
                            <img src={client.img} width={120} className='min-h-full' alt={client.altText} />
                        </div>
                    ))
                }</div>
            </div>

        </div>
    )
}

export default Clients
