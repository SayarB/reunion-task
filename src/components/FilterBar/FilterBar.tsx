import React,{useCallback, useState} from 'react'
import Button from '../Button/Button'
import DropdownFilterElement from '../DropdownFilterElement/DropdownFilterElement'
import {FilterOptions} from "../App"
import DateFilterElement from '../DateFilterElement/DateFilterElement'
import InputFilterElement from '../InputFilterElement/InputFilterElement'
type Props = {
  locationOptions:string[]
  priceRangeOptions: string[]
  propertyOptions:string[]
  onSearchButtonClick:(options:FilterOptions)=>void
}

const FilterBar = (props: Props) => {
  const [location, setLocation] = useState(props.locationOptions[0]||"")
  const [date, setDate] = useState("Select Move-in Date")
  const [priceRange, setPriceRange] = useState(props.priceRangeOptions[0]||"")
  const [propertyType, setPropertyType] = useState(props.propertyOptions[0]||"") 
  const [open, setOpen]=useState(false);

  const onPropertyTypeChange = useCallback((changed:string)=>{
    setPropertyType(changed)
  },[setPropertyType])

  const onLocationChange = useCallback((changed:string)=>{
    setLocation(changed)
  },[setLocation])

  const onPriceRangeChange = useCallback((changed:string)=>{
    setPriceRange(changed)
  },[setPriceRange])

  const onDateChange = useCallback((changed:string)=>{
    console.log(changed)
    setDate(changed)
  },[setDate])

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
    }} className='flex justify-between bg-white p-5 my-5 rounded-sm font-serif flex-col lg:flex-row max-w-screen-xl m-auto transition-all'>

      <p className='text-primary font-semibold cursor-pointer md:hidden' onClick={()=>{setOpen(!open)}}>Filters</p>
        <div className={`flex-1 flex flex-col ${!open && "hidden"} md:flex filterbarbreakpoint:flex-row`}>
          <div className='flex mb-2 flex-1 justify-evenly items-center flex-col md:flex-row'>
            <DropdownFilterElement title='Location' value = {location} onChange={onLocationChange} options={props.locationOptions}/>
            <DropdownFilterElement title="Property Type" value={propertyType} options={props.propertyOptions} onChange={onPropertyTypeChange}/>
            <DropdownFilterElement title="Price" value={priceRange} options={props.priceRangeOptions} onChange={onPriceRangeChange}/>
            <DateFilterElement title={"When"} value={date} onChange={onDateChange}/>
          </div>
        <Button className={"self-center"} type={"submit"} onClick={()=>{
          const filterOptions: FilterOptions = {
            location: location,
            date: date,
            propertyType: propertyType,
            priceRange: priceRange
          }
          props.onSearchButtonClick(filterOptions)
        }}>Search</Button>
      </div>
    </form>
  )
}

export default FilterBar