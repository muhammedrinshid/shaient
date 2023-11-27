import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../constants'
import Button from './Button'
import { logo } from '../images'


const Navbar = () => {
  return (
    <nav className='w-full max-container fixed z-10 top-0  bg-primary py-4 bg-opacity-40 flex flex-row justify-between px-14 items-center'>
          <div>
            <img src={logo} width={150} alt="logo" />

          </div>
          <div className='flex flex-row gap-8 items-center'>
          <div className='flex flex-row gap-8'>
            {
                menu.map((item)=>(
                    <Link className='font-Poppins font-medium text-base  text-white ' to={item.to}>{item.content}</Link>
                ))
            }
          </div>
          <Button name={"contact"}/>
          </div>


        </nav>
  )
}

export default Navbar
