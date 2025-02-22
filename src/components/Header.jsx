import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const cartData = useSelector((state)=>state.cartItemManager.cartItems)
    console.log(cartData.length);
    

  return (
    <header className='bg-[#7E33E0] py-3'>
        <div className="container mx-auto lg:flex md:flex block lg:justify-between text-white">
            <div className="flex gap-5">
                <div className="flex items-center gap-2">
                    <CiMail />
                    <h4>Example@gmail.com</h4>
                </div>
                {/* <div className="flex  items-center gap-2">
                    <IoIosCall />
                    <h4>46541324651</h4>
                </div> */}
                <div className="flex items-center gap-2">
                    <IoIosCall />
                    <h4>56566544665</h4>
                </div>
            </div>
            <div className="">
                <ul className="flex gap-3 items-center">
                    <li >
                        <select name="" id="" className="bg-transparent">
                            <option value="">English</option>
                            <option value="">Bangla</option>
                        </select>
                    </li>
                    <li>
                        <select name="" id="" className="bg-transparent">
                            <option value="">USD</option>
                            <option value="">BDT</option>
                        </select>
                    </li>
                    <li className="flex items-center"><p>Login</p> <CiUser /></li>
                    <li className="flex items-center"><p>Wishlist</p> <CiHeart /></li>
                    {/* <li className="relative">
                        <Link className="text-2xl" to='/cart'> <IoCartOutline  /></Link> 
                        <span className="absoulte top-0 right-0">{cartData.length}</span>
                    </li> */}
                    <li className="relative ">
                        <Link className="text-2xl" to="/cart"> 
                            <IoCartOutline />
                        </Link> 
                        <span className="absolute -top-1 -right-1 h-4 w-4 flex justify-center items-center bg-red-400 px-2 py-2 rounded-full animate-bounce">
                            {cartData.length}
                        </span>
                    </li>

                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
