import React from 'react'


const NavBar = () => {
  return (
        <nav className = "bg-white border-gray-200 dark:bg-gray-900">
          <div className = "hidden w-full md:block md:w-auto" id= "navbar-default">
          <ul className = "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href = "/Home" className = "block px-3 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</a>
            </li>
            <li>
              <a href = "/Search" className = "block px-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Search</a>
            </li>
          </ul>
          </div>
        </nav>
    
  )
}  

export default NavBar