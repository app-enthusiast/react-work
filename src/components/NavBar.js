import React from 'react';
import App from '../App';
import { Outlet, Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <ul>
        <li> <Link to={ `home` } >Home</Link> </li>
        <li> <Link to={ `contact` } >Contact</Link> </li>
        <li> <Link to={ `about` } >About </Link> </li>
        <li> <Link to={ `main` } >Main </Link> </li>
      </ul>
    </div>
  )
}
