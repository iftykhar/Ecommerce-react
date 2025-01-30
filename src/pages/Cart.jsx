import React from 'react'
import PageHeading from '../components/PageHeading'
import { useSelector } from 'react-redux'
import { FiMinus,FiPlus  } from "react-icons/fi";

const Cart = () => {

  const cartData = useSelector((state)=>state.cartItemManager.cartItems)

  console.log(cartData);
  
  

  return (
    <>
     <PageHeading headline="Shopping Curt" page="shopping curt" />

     
    
            {cartData.map((item) => (
              <div className="container mx-auto">
                <div className="flex  items-center justify-between">
                  <div className="flex items-center">
                  <img className='w-20' src={item.thumbnail} alt="" />
                  <h3 >{item.title}</h3>
                  </div>
                  <div className="items-center">
                    <span>${item.price}</span>
                  </div>
                  <div className="flex gap-4 items-center bg-[#BEBFC2]">
                     <FiMinus/>
                     <span>{item.qty}</span>
                     <FiPlus/>
                  </div>
                  <div className="">
                    <span>${(item.price)*(item.qty)}</span>
                  </div>
                </div>
                
              </div>
            
            ))}
    
   


    

    </>
  )
}

export default Cart
