import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import {Link} from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";



const Navbar = () => {
    
    let[menuShow, setmenuShow] = useState(false);


    const handleMenu = () => {
        setmenuShow(!menuShow);
        
        
    }

  return (
    <nav>
        <div className="container mx-auto flex justify-between items-center py-7">

          
            <div className="">
                <img src={Logo} alt="" />
            </div>
            <div className="lg:block">
                <ul
                    className={`fixed top-0 left-0 h-screen w-3/4 bg-black text-white flex flex-col items-start gap-6 p-6 transition-transform duration-300 ${
                    menuShow ? 'translate-x-0' : '-translate-x-full'
                    } lg:static lg:flex lg:flex-row lg:gap-12 lg:bg-transparent lg:text-black lg:h-auto lg:w-auto lg:translate-x-0`}
                >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><Link >Pages</Link></li>
                    <li><Link >Blog</Link></li>
                    <li><Link >Contact</Link></li>
                </ul>
            </div>
            
            <div className="flex items-center  ">
                <input className='border-2 h-10 lg:w-48 w-36' type="search" />
                <div className='text-white p-5 bg-[#FB2E86] h-10 flex items-center justify-center'>
                     <CiSearch className='text-2xl text-white' />
                </div>
               
            </div>
            <div onClick={handleMenu} className="lg:hidden">
                {menuShow == true ? <ImCross /> : <TiThMenu /> }
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar
