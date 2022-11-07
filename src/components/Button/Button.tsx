import React from 'react'

type Props = {
  variant?: "bordered"|"filled"
  children?:string
}
const Button = ({variant="filled", children=""}: Props) => {
  return (
    <button className={`py-3 px-3 min-w-[100px] mx-2 rounded-md text-sm ${variant==="bordered"?" border-[1px] border-primary text-primary":"bg-primary text-white"}`}>{children}</button>
  )
}
export default Button