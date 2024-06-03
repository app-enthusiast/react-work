import React from 'react';
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="">
      <ul className="flex items-center">
        <li> <NavLink to={ `contact` } className="text-black font-bold text-xl hover:text-orange-200 mr-4" >Contact</NavLink> </li>
        <li> <NavLink to={ `about` }  className="text-black font-bold text-xl hover:text-orange-200 mr-4" >About </NavLink></li>
        <li> <NavLink to={ `login` }  className="text-black font-bold text-xl hover:text-orange-200 mr-4" >Login </NavLink></li>
      </ul>
    </nav>
  )
}
