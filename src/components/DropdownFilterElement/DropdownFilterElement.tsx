import React, { useEffect, useRef, useState } from 'react'

type Props = {
  title: string
  value: string
  options: string[]
  onChange: (changed:string)=>void
}

const DropdownFilterElement = (props: Props) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    document.addEventListener('click',(e)=>{
      if(!dropdownRef || !(e.target instanceof Node) || !dropdownRef.current!.contains(e.target)){
        setOpen(false)
      }
    })
  },[])
  const toggleOpen = ()=>
  {
    setOpen(open=>!open)
  }
  return (
    <div ref={dropdownRef} className='flex flex-1 mx-2 my-2 flex-col relative cursor-pointer w-full md:w-[200px] border-r-[1px] border-gray-300'>
        <p className='text-sm font-serif font-semibold text-gray-500 my-1'>{props.title}</p>
        <p className='text-base font-bold' onClick={toggleOpen}>{props.value}</p>
        {open && <div className='absolute w-full top-[110%] -left-[0%] bg-white z-10 rounded-sm -translate-x-1 shadow-md' onBlur={()=>{setOpen(false)}}>
          <ul className='w-[100%]'>
            {props.options.map(((opt,i)=><li key={props.title+"-"+i} className='w-[100%] px-5 py-2 hover:bg-gray-200 cursor-pointer' onClick={()=>{
              toggleOpen()
              props.onChange(opt)
            }}>{opt}</li>))}
          </ul>
        </div>}
      </div>
  )
}

export default DropdownFilterElement
