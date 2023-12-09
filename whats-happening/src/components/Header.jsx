import React from 'react'
//This is just the banner that has the image of the university
const Header = () => {
  return (
    <header className = "relative h-60 ">
        <img className = "top-0 left-0 w-full opacity-70 h-full " src="https://studentaffairs.unt.edu/sites/default/files/university-union/images/aboutus_banner.jpg" alt="" />
        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"src="/logo.png"alt="Logo"style={{ width: '625px', height: '300px' }}/>
    </header>
  )
}

export default Header
