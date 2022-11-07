import React from 'react'

type Props = {
  title:string
  value:string
  onChange: (changed:string)=>void
}

const InputFilterElement = (props: Props) => {
  return (
    <div className='flex flex-1 mx-2 flex-col relative cursor-pointer w-[200px] border-r-[1px] border-gray-300'>
        <p className='text-sm font-serif font-semibold text-gray-500 my-1'>{props.title}</p>
        <input className=' font-semibold focus:outline-none focus:border-b-[1px] mr-2 border-black' type="text" value={props.value} onChange={(e)=>{
          e.preventDefault()
          props.onChange(e.target.value)
        }} />
      </div>
  )
}

export default InputFilterElement