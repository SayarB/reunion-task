import React from 'react'

type Props = {
  title:string
  value:string
  onChange: (changed:string)=>void
}

const DateFilterElement = (props: Props) => {
  return (
    <div className='flex flex-1 mx-2 flex-col relative cursor-pointer w-[200px] border-r-[1px] border-gray-300'>
        <p className='text-sm font-serif font-semibold text-gray-500 my-1'>{props.title}</p>
        <input className=' font-semibold mr-2 focus:outline-none cursor-pointer' type="text" value={props.value} onChange={(e)=>{
          if(e.target.value=="") {
            e.target.type="text"
            e.target.value = "Select Move-in Date"
            e.target.blur()
          }
          props.onChange(e.target.value)
          }} onFocus={(e)=>{
          e.target.type="date"
          e.target.readOnly=false
        }} />
      </div>
  )
}
export default DateFilterElement