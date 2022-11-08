import React from 'react'

type Props = {
  icon:string 
  children: any

}

const Feature = (props: Props) => {
  return (
    <div className='flex items-center font-serif'><img className='w-[20px] h-[20px] m-[3px]' src={props.icon} alt="" /> <p className='text-[12px] '>{props.children}</p></div>

  )
}

export default Feature