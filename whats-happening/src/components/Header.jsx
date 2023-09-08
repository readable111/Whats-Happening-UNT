import React from 'react'

const Header = () => {
  return (
    <header className = "relative h-60 ">
        <img className = "top-0 left-0 w-full opacity-70 h-full " src="https://studentaffairs.unt.edu/sites/default/files/university-union/images/aboutus_banner.jpg" alt="" />
        <div className = "absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 p-10 bg-opacity-80 font-mono">What's Happening?</div>
    </header>
  )
}

export default Header