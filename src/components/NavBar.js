import React from 'react';
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white py-8">
      <ul className="flex items-center">
        <li> <NavLink to={ `home` } className="text-white font-bold text-xl hover:text-gray-300 mr-4">Home</NavLink> </li>
        <li> <NavLink to={ `contact` } className="text-white font-bold text-xl hover:text-gray-300 mr-4" >Contact</NavLink> </li>
        <li> <NavLink to={ `about` }  className="text-white font-bold text-xl hover:text-gray-300 mr-4" >About </NavLink> </li>
        <li> <NavLink to={ `main` }  className="text-white font-bold text-xl hover:text-gray-300 mr-4" >Main </NavLink> </li>
      </ul>
    </nav>
  )
}
