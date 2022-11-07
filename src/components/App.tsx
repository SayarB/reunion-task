import React from 'react';
import { Navbar } from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
function App() {
  return (
    <div className=' bg-background min-h-[100vh]'>
      <Navbar/>
      <div className='w-[80vw] m-auto mt-10'>
        <div className='flex justify-between items-center'><h1 className='font-serif text-4xl font-semibold'>Search Properties to Rent</h1> <SearchBar/></div>
        
      </div>
    </div>
  );
}

export default App;
