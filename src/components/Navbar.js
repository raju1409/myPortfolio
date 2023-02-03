import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

export function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()
    // it is used to close navbar button when clicked while its on mobile screen size
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close" }>
        <div className='toggleButton'>

            <button onClick={() => {setExpandNavbar(prev => !prev)}} > 
                <ReorderIcon /> 
            </button>
        </div>

        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
            <Link to="https://docs.google.com/document/d/12Be1EXSia5U7o6XTPnOEZGPDmb5LwS6q/edit" target="_blank">Resume</Link>

        </div>

    </div>
  )
}

export default Navbar