import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import React from 'react'

const Header = () => {
  return (
    <header className="violate">
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <CiMail />
                    <h4>Example@gmail.com</h4>
                </div>
                <div className="flex  items-center gap-2">
                    <IoIosCall />
                    <h4>46541324651</h4>
                </div>
            </div>
            <div className="">
                
            </div>
        </div>
    </header>
  )
}

export default Header
