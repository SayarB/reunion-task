import React from 'react'

type NavItemProps = {
  dropdown?:boolean
  selected?:boolean
  children?: string
  data?:string
  clickHandler:(data: string) => void
}

export default function NavItem({dropdown=false, selected=false, children="",data="", clickHandler}:NavItemProps) {
  return (
    <div className={`cursor-pointer rounded-md text-base font-serif py-2 px-3 font-medium ${selected?"text-primary bg-light":""} hover:text-primary transition-all`} onClick={()=>clickHandler(data)}>
      {children}
    </div>
  )
}