import React from 'react'
import data from "../../data/mock.data.json"
import Thumbnail from './Thumbnail'
type Props = {
  location:string
  date: string
  propertyType:string
  priceRange:string
}

const Thumbnails = (props: Props) => {

  return (
    <div className='items-center justify-center'>
      <div className='m-auto max-w-[1200px] grid grid-cols-3 '>
      { 
        data.map((estate)=>{
          return <Thumbnail {...estate}/>
        })
      }
      </div>
  </div>
    
  )
}

export default Thumbnails