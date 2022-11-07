

import React, { useState } from 'react'

type Props = {
  title: string
  value: string
  options: string[]
  onChange: (changed:string)=>void
}

const DropdownFilterElement = (props: Props) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = ()=>
  {
    setOpen(open=>!open)
  }
  return (
    <div className='flex flex-col relative cursor-pointer'>
        <p className='text-sm font-serif font-semibold text-gray-500 my-1'>{props.title}</p>
        <p className='text-base font-bold' onClick={toggleOpen}>{props.value}</p>
        {open && <div className='absolute top-[110%] -left-[0%] bg-white  rounded-sm'>
          <ul>
            {props.options.map(((opt,i)=><li key={props.title+"-"+i} className=' px-5 py-2 hover:bg-gray-200 cursor-pointer' onClick={()=>{
              toggleOpen()
              props.onChange(opt)
            }}>{opt}</li>))}
          </ul>
        </div>}
      </div>
  )
}

export default DropdownFilterElement
