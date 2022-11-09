import React, { useState } from 'react'
import Feature from './Feature'

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
    <div key={"thumbnail-"+props.id} className='w-[80%] min-w-[280px] max-w-[350px] m-auto rounded-lg  my-2 h-[350px] shadow-sm overflow-hidden flex flex-col bg-white'>
      <div className='w-full overflow-hidden h-[56%]'><img className='w-full' src={props.image_link} alt={props.name}/></div>
      <div className='flex-1 p-3 flex flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-serif text-gray-400'> <span className=' text-xl font-medium text-primary'>${props.price}</span> /month</p>
            <h1 className='font-serif text-xl font-semibold'>{props.name}</h1>
          </div>
          <div className='w-[40px] bg-light p-[10px] rounded-full cursor-pointer' onClick={()=>toggleFav()}>
            <img src={fav?"/heart-filled.png":"heart_border.png"} alt="" />
          </div>
        </div>
        <p className='text-gray-300 font-serif text-base py-2 border-b-[1px] border-gray-300'>{props.address}</p>
        <div className='flex text-sm justify-between'>
        <Feature icon='/bed_icon.png'>{props.beds} Beds</Feature>
        <Feature icon="/bathroom_icon.png">{props.bathrooms} Bathrooms</Feature>
        <Feature icon='/area_icon.png'>{props.area} m<sup>2</sup></Feature>
        </div>
      </div>

      
      
    </div>
  )
}

export default Thumbnail