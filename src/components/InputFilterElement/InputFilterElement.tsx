import React, { useState } from 'react'

type Props = {
  title:string
  value:string
  options?:string[]
  onChange: (changed:string)=>void
}

const InputFilterElement = (props: Props) => {

  const [open, setOpen] = useState(false)
  const [matchingOptions, setMatchingOptions]=useState(props.options||[]);

  const toggleOpen = ()=>
  {
    setOpen(open=>!open)
  }
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>
    )=>{
    setOpen(true)
    const matching = props.options?.filter(opt=>opt.toLowerCase().includes(e.target.value))
    setMatchingOptions(matching||[])
  }

  return (
    <div className='flex flex-1 mx-2 flex-col relative cursor-pointer w-[200px] border-r-[1px] border-gray-300'>
        <p className='text-sm font-serif font-semibold text-gray-500 my-1'>{props.title}</p>
        <input className=' font-semibold focus:outline-none focus:border-b-[1px] mr-2 border-black' type="text" value={props.value} onChange={(e)=>{
          e.preventDefault()
          props.onChange(e.target.value)
          onChangeHandler(e)
        }} />
        {open && matchingOptions?.length>0 && <div className='absolute w-full top-[110%] -left-[0%] bg-white  rounded-sm -translate-x-1' onBlur={()=>{setOpen(false)}}>
          <ul className='w-[100%]'>
            {matchingOptions?.map(((opt,i)=><li key={props.title+"-"+i} className='w-[100%] px-5 py-2 hover:bg-gray-200 cursor-pointer' onClick={()=>{
              toggleOpen()
              props.onChange(opt)
            }}>{opt}</li>))}
          </ul>
        </div>}
      </div>
  )
}

export default InputFilterElement