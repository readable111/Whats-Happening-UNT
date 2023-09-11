import React from 'react'
import NavItem from './NavItem'

const NavBar = () => {
  return (
        <div className = "flex flex-row border-y bg-gray-300 h-10 border-black justify-start">
            <div className = "basis-1/2 border-x bg-gray-300 border-black flex items-center justify-center"><NavItem /></div>
            <div className =  "basis-1/2 border-x bg-gray-300 border-black flex items-center justify-center"><NavItem /></div>
        </div>
    
  )
}  

export default NavBar