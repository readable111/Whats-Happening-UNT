import React from 'react'

//to add a new element to the NavBar, you can just copy and past a new list element, 
const NavBar = () => {
  const liClasses = "block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" className="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:pl-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
          </li>
          <li>
            <a href="/Search" className={liClasses}>Search</a>
          </li>
          <li>
            <a href="/Events" className={liClasses}>Events</a>
          </li>
          <li className="md:flex-grow"></li>
          <a href="/Login" className="block md:p-0 md:pr-4">
            <button class="px-2 py-1 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-500/75 ease-in-out delay-150 duration-300">Login</button>
          </a>
        </ul>
      </div>
    </nav>

  )
}

export default NavBar