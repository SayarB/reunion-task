import * as React from 'react';
import NavItem from './NavItem';
import Button from "../Button/Button"
import { useState } from 'react';
export function Navbar() {

  const [selected, setSelected] = useState("rent");

  const navItemClickHandler = (data:string)=>{
    setSelected(data);
  }

  return (
    <div className=" bg-white w-[100%]  h-[8vh] min-h-[50px] flex items-center justify-between font-serif ">
      <h1 className='text-dark font-semibold text-3xl mx-8'>Estatery</h1>
      <nav className='flex-1'>
        <ul className='max-w-[600px] flex justify-evenly items-center '>
          <li><NavItem selected={selected === "rent"} data="rent" clickHandler={navItemClickHandler}>Rent</NavItem></li>
          <li><NavItem selected={selected === "buy"} data="buy" clickHandler={navItemClickHandler}>Buy</NavItem></li>
          <li><NavItem selected={selected === "sell"} data="sell" clickHandler={navItemClickHandler}>Sell</NavItem></li>
          <li><NavItem selected={selected === "manage-property"} data="manage-property" clickHandler={navItemClickHandler}>Manage Property</NavItem></li>
        <li><NavItem selected={selected === "resources"} data="resources" clickHandler={navItemClickHandler}>Resources</NavItem></li>
      </ul>
    </nav>
  <Button onClick={()=>{}}variant="bordered">Login</Button>
    <Button onClick={()=>{}}>Sign Up</Button>
    </div>
  );
}
