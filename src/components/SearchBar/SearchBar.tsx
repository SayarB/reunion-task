import React from 'react'

type Props = {
  value:string
  onChange: (e:any)=>void
}

const SearchBar = (props: Props) => {


  
  return (
    <input type="text" value={props.value} onChange={props.onChange} placeholder='Search with Search Bar' className='text-base font-semibold h-[35px] border-[1px] border-primary rounded-md p-2 my-2 active:outline-none focus:outline-none'/>
  )
}

export default SearchBar