import React from 'react'

const Button = ({name,onclick,isBlack}) => {
  return (
    <button className={`border  px-5 inline-flex items-center justify-center rounded-3xl font-medium outline-none uppercase py-2 text-sm ${isBlack?"border-primary  text-white bg-primary py-1" :" border-yellow text-yellow"}   text-lg max-w-[200px]`}>
        {name}
    </button>
  )
}

export default Button
