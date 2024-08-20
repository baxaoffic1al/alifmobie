import React from "react";
import { NavLink } from 'react-router-dom'
import imageLogo from "../assets/logo.png"
import { MdLocalTaxi } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { LuTrees } from "react-icons/lu";
import { IoMdFootball } from "react-icons/io";
import { TbArrowsRandom } from "react-icons/tb";






const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={imageLogo} className="w-28" alt="Flowbite Logo" />    </NavLink>
                <div className="navbars gap-12 flex items-center justify-center">
                    <NavLink to="/transport" className="flex active:text-blue-600 focus:text-blue-500 hover:text-blue-400 items-center justify-center gap-2"><MdLocalTaxi />Transports</NavLink>
                    <NavLink to="/animals" className="flex active:text-blue-600 focus:text-blue-500 hover:text-blue-400 items-center justify-center gap-2"><FaCat />Animals</NavLink>
                    <NavLink to="/foods" className="flex active:text-blue-600 focus:text-blue-500 hover:text-blue-400 items-center justify-center gap-2"><IoFastFood />Foods</NavLink>
                    <NavLink to="/nature" className="flex active:text-blue-600 focus:text-blue-500 hover:text-blue-400 items-center justify-center gap-2"><LuTrees />Nature</NavLink>
                    <NavLink to="/sport" className="flex active:text-blue-600 focus:text-blue-500 hover:text-blue-400 items-center justify-center gap-2"><IoMdFootball />Sport</NavLink>
                    <NavLink to="/random" className="flex active:text-blue-600 focus:text-blue-500 hover:text-blue-400 items-center justify-center gap-2"><TbArrowsRandom />Random</NavLink>
                </div>


                <NavLink to="/login" className="flex items-center justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Kirish
                    </button>
                </NavLink>


            </div>
        </nav>
    )
}

export default Navbar