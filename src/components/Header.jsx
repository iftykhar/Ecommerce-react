import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#7E33E0] py-3'>
        <div className="container mx-auto lg:flex justify-between text-white">
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
                    <li className="items-center text-2xl"> <IoCartOutline /> </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
