import React,{useCallback, useState} from 'react'
import Button from '../Button/Button'
import DropdownFilterElement from '../DropdownFilterElement/DropdownFilterElement'
import {FilterOptions} from "../App"
type Props = {
  locationOptions:string[]
  priceRangeOptions: string[]
  propertyOptions:string[]
  onSearchButtonClick:(options:FilterOptions)=>void
}

const FilterBar = (props: Props) => {
  const [location, setLocation] = useState(props.locationOptions[0]||"")
  const [date, setDate] = useState(new Date())
  const [priceRange, setPriceRange] = useState(props.priceRangeOptions[0]||"")
  const [propertyType, setPropertyType] = useState(props.propertyOptions[0]||"") 


  const onPropertyTypeChange = useCallback((changed:string)=>{
    setPropertyType(changed)
  },[setPropertyType])

  const onLocationChange = useCallback((changed:string)=>{
    setLocation(changed)
  },[setPropertyType])

  const onPriceRangeChange = useCallback((changed:string)=>{
    setPriceRange(changed)
  },[setPropertyType])

  const onDateChange = useCallback((changed:string)=>{
    setDate(new Date(changed))
  },[setPropertyType])

  return (
    <div className='flex justify-between bg-white p-5 my-5 rounded-sm font-serif'>
      <DropdownFilterElement title="Property Type" value={propertyType} options={props.propertyOptions} onChange={onPropertyTypeChange}/>
      <DropdownFilterElement title="Price" value={priceRange} options={props.priceRangeOptions} onChange={onPriceRangeChange}/>
      <Button onClick={()=>{
        const filterOptions: FilterOptions = {
          location: location,
          date: date,
          propertyType: propertyType,
          priceRange: priceRange
        }
        props.onSearchButtonClick(filterOptions)
      }}>Search</Button>
    </div>
  )
}

export default FilterBar