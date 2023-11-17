import React from 'react'

//to add a new element to the NavBar, you can just copy and past a new list element, 
const NavBar = () => {
  return (
    <nav >
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-2 border-gray-100 rounded-none bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-emerald-950 dark:border-gray-700">
          <a href="/" className="block md:p-0 md:pl-4">
            <button class="px-4 py-1 text-white rounded-full shadow-sm hover:bg-green-500/75 ease-in-out delay-150 duration-300">Home</button>
          </a>
          <a href="/Search" className="block md:p-0 ">
            <button class="px-4 py-1 text-white rounded-full shadow-sm hover:bg-sky-500/75 ease-in-out delay-150 duration-300">Search</button>
          </a>
          <a href="/Events" className="block md:p-0">
            <button class="px-4 py-1 text-white rounded-full shadow-sm hover:bg-pink-500/75 ease-in-out delay-150 duration-300">Events</button>
          </a>
          <li className="md:flex-grow"></li>
          <a href="/Login" className="block md:p-0 md:pr-4">
            <button class="px-4 py-1 bg-teal-600 text-white rounded-full shadow-sm hover:bg-teal-600/75 ease-in-out delay-150 duration-300">Login</button>
          </a>
        </ul>
      </div>
    </nav>

  )
}
export default NavBar