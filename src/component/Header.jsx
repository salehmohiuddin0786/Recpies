import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Recipes</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
      <Link to="/">Home</Link>
      <Link to="/About">About us</Link>
      <Link to="/Recipes" >Recipes</Link>
      <Link  to="/Contact">Contact us</Link>
      <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"  to="/Login">Login</Link>
      
    </nav>
    
    
  </div>
</header>

  )
}

export default Header