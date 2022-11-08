import React, { useState } from 'react';
import FilterBar from './FilterBar/FilterBar';
import { Navbar } from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import Thumbnails from './Thumbnails/Thumbnails';
export type FilterOptions = {
  location:string
  date: string
  propertyType:string
  priceRange:string
}
function App() {
  const defaultFilterOptions:FilterOptions = {
    location: "any",
    date: '',
    propertyType: "any",
    priceRange: "any"
  }
  const [filterOptions, setFilterOptions] = useState(defaultFilterOptions) 

  const onSearchButtonClick = (options:FilterOptions)=>{
    setFilterOptions(options)
  }
  return (
    <div className=' bg-background min-h-[100vh]'>
      <Navbar/>
      <div className='w-[80vw] m-auto mt-10'>
        <div className='flex justify-between items-center'><h1 className='font-serif text-4xl font-semibold'>Search Properties to Rent</h1> <SearchBar/></div>
        <FilterBar locationOptions={["Any","New York, USA","Texas, USA","Indiana, USA"]} priceRangeOptions={["Any", "$0-$1000", "$1000-$2000", "$2000-$3000","$3000-$4000", "$4000-$5000"]} 
        propertyOptions={["Any","Houses", "Flats", "Apartments"]} onSearchButtonClick={onSearchButtonClick} />
        <Thumbnails {...filterOptions}/>
      </div>
    </div>
  );
}

export default App;
