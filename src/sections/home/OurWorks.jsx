import React from 'react'
import Button from '../../assets/components/Button'
import { blogs1, blogs2 } from '../../assets/constants'
import { left } from '../../assets/icons'

const OurWorks = () => {
  return (
    <div className='max-container w-full bg-secondary flex flex-row p-16 max-xl:flex-col max-xl:items-center '>
        <div className='basis-1/4 max-w-sm pr-4 flex flex-col max-xl:items-center mb-12'>
            <h3 className='text-white text-3xl font-bold mb-4 max-xl:text-center '>Some pieces of our work</h3>
            
            <p className='opacity-60 mb-8 font-light max-xl:text-center text-white text-sm'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            <Button name="SHOW MORE"/>
        </div>
        <div className='grid grid-cols-2 gap-4 max-lg:grid-cols-1'>
            <div className='flex flex-col gap-4' >
                {
                    blogs2.map((blog)=>(
                        <div className='border border-opacity-[55%] rounded-sm border-white p-4 min-w-[400px] max-sm:min-w-[250px] '>
                            {
                                blog.img&&(
                                    <div className='w-full h-36 bg-[#8474C4] rounded-sm mb-4'></div>
                                )
                            }
                            <span className='py-1 px-2 bg-yellow text-xs rounded-md mb-4 text-terinary  uppercase font-bold'>
                                {
                                    blog.btn
                                }

                            </span>
                            <h4 className='text-white font-bold mt-6 text-xl '>
                                {blog.hed}
                            </h4>
                            <div className='flex flex-row mt-4 '>
                            <p className='text-[#728095]  opacity-6'>Read more <img className='inline' src={left} alt="" /></p>

                            </div>
                        </div>
                        
                    ))
                }

            </div>
            <div className='flex flex-col gap-4' >
                {
                    blogs1.map((blog)=>(
                        <div className='border border-opacity-[55%] rounded-sm border-white p-4 min-w-[400px] max-sm:min-w-[250px] '>
                            {
                                blog.img&&(
                                    <div className='w-full h-36 bg-[#8474C4] rounded-sm mb-4'></div>
                                )
                            }
                            <span className='py-1 px-2 bg-yellow text-xs rounded-md mb-4 text-terinary  uppercase font-bold'>
                                {
                                    blog.btn
                                }

                            </span>
                            <h4 className='text-white font-bold mt-6 text-xl '>
                                {blog.hed}
                            </h4>
                            <div className='flex flex-row mt-4 '>
                            <p className='text-[#728095]  opacity-6'>Read more <img className='inline' src={left} alt="" /></p>

                            </div>
                        </div>
                        
                    ))
                }

            </div>
        </div>
      
    </div>
  )
}

export default OurWorks
