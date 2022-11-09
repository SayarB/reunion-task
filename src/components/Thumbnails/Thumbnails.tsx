import React from 'react'
import data from "../../data/mock.data.json"
import Thumbnail from './Thumbnail'
type Props = {
  location:string
  date: string
  propertyType:string
  priceRange:string
  search:string
}

const Thumbnails = (props: Props) => {

  
  
  const matchPropertyType=(ent:any): boolean=>{
    return ent.type.toLowerCase()===props.propertyType.toLowerCase() || props.propertyType.toLowerCase()==="any"
  }
  const matchLocation=(ent:any): boolean=>{
    if(props.location.toLowerCase()==="any")return true
    return ent.location.toLowerCase()===props.location.toLowerCase()
  }
  const matchDate=(ent:any): boolean=>{
    if(props.date===""||props.date==="Select Move-in Date")return true
    if(ent.available)return true
    const availableFromDate = new Date(ent.availableFrom)
    const requiredDate = new Date(props.date);
    return availableFromDate<=requiredDate
  }
  const matchPrice=(est:any): boolean=>{
    if(props.priceRange.toLowerCase()==="any")return true
    var lowPrice:string|number = props.priceRange.split("-")[0].trim();
    var highPrice: string|number = props.priceRange.split("-")[1].trim();
    lowPrice = parseInt(lowPrice.split("$")[1])
    highPrice = parseInt(highPrice.split("$")[1]);
    return est.price>=lowPrice&&est.price<=highPrice

  }
  const matchSearch = (est:any):boolean=>{
    
    return props.search.length===0||est.name.toLowerCase().indexOf(props.search.toLowerCase())>=0;
  }

  
  const dataToShow=data.filter((estate)=>matchSearch(estate)&&matchPropertyType(estate)&&matchPrice(estate)&&matchLocation(estate)&&matchDate(estate))


  return (
    <div className='items-center justify-center'>
      <div className='m-auto my-2 max-w-[1900px] w-[100%] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {
        dataToShow.length>0?dataToShow.map((estate)=><Thumbnail {...estate}/>):<div className='flex flex-col w-[100vw] items-center justify-center'><div className=' w-[300px] h-[300px]'><img className='m-auto w-full h-full' src="/not_found_icon.png" alt="" /></div><p className='text-gray-300 text-3xl font-serif font-semibold accent-gray-300'>No Matches Found</p></div>     
      }
      </div>
  </div>
    
  )
}

export default Thumbnails