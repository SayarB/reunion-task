import React from 'react'

type Props = {
  variant?: "bordered"|"filled"
  children?:string
  type?:"button"|"submit"|"reset"
  className?:string
  onClick:()=>void
}
const Button = (props: Props) => {
  return (
    <button type={props.type||"button"} onClick={props.onClick} className={`py-3 px-5 min-w-[100px] mx-2 rounded-md text-sm ${props.variant==="bordered"?" border-[1px] border-primary text-primary":"bg-primary text-white"} ${props.className}`}>{props.children}</button>
  )
}
export default Button