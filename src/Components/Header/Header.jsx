import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header(){
  return (
    <div>
      <header className = "flex items-center bg-linear-to-r to-purple-800 from-[#110c38] fixed w-full top-0 z-1 ">
        <img className = 'h-20 w-60' src="/src/Images/quizlogo.webp" alt="Quiz" />
        <NavLink to = '/' className="ml-50 text-white font-bold text-2xl">Home</NavLink>
        <NavLink to = '/about' className="ml-50 text-white font-bold text-2xl">About</NavLink>
        <NavLink to = '/quiz' className="ml-60 text-white font-bold text-2xl">Quiz</NavLink>
      </header>
    </div>
  )
}

export default Header