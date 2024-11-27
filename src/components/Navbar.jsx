import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import {Link} from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";



const Navbar = () => {
    
    let[menuShow, setmenuShow] = useState(false);


    const handleMenu = () => {
        setmenuShow(true);
        console.log(menuShow);
        
    }

  return (
    <nav>
        <div className="container mx-auto flex justify-between items-center py-7">

          
            <div className="">
                <img src={Logo} alt="" />
            </div>
            <div className="lg:display-block">
                <ul className='flex justify-between gap-12'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><Link >Pages</Link></li>
                    <li><Link >Blog</Link></li>
                    <li><Link >Contact</Link></li>
                </ul>
            </div>
            
            <div className="flex items-center  ">
                <input className='border-2 h-10 w-48' type="search" />
                <div className='text-white p-5 bg-[#FB2E86] h-10 flex items-center justify-center'>
                     <CiSearch className='text-2xl text-white' />
                </div>
               
            </div>
            <div onClick={handleMenu} className="lg:hidden">
                <TiThMenu />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
