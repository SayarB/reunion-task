import React, { useState } from 'react'

type Props = {
    id:number,
    name:string,
    image_link:string
    price:number,
    tag?: string,
    type:string,
    beds:number,
    bathrooms:number,
    address:string,
    location:string,
    area:string,
    favourite:boolean,
}

const Thumbnail = (props: Props) => {
  const [fav, setFav] = useState(props.favourite)

  const toggleFav = ()=>
  {
    setFav((f: boolean)=>!f)
  }

  return (
    <div className='w-[80%] max-w-[300px] m-auto rounded-lg  my-2 aspect-[.80] shadow-sm overflow-hidden flex flex-col bg-white'>
      <div className='w-full'><img className='w-full' src={props.image_link} alt={props.name}/></div>
      <div className='p-3'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-serif text-gray-400'> <span className=' text-2xl font-medium text-primary'>${props.price}</span> /month</p>
            <h1 className='font-serif text-2xl font-medium'>{props.name}</h1>
          </div>
          <div className='w-[40px] bg-light p-[10px] rounded-full cursor-pointer' onClick={()=>toggleFav()}>
            <img src={fav?"/heart-filled.png":"heart_border.png"} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Thumbnail