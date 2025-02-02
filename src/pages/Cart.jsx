import React from 'react'
import PageHeading from '../components/PageHeading'
import { useDispatch, useSelector } from 'react-redux'
import { FiMinus,FiPlus  } from "react-icons/fi";
import { decreament, increament } from '../components/slice/cartSlice';

const Cart = () => {

  const cartData = useSelector((state)=>state.cartItemManager.cartItems)

  // console.log(cartData);

  const dispatch = useDispatch()

  const handleIncreament = (index)=>{
    dispatch(increament(index))
  }

  const handleDecreament = (index)=>{
    dispatch(decreament(index))
  }
  

  let{totalPrice, totalQuantity} = cartData.reduce((acc, curr)=>{

    acc.totalPrice += (curr.price * curr.qty);
    acc.totalQuantity += curr.qty;

    return acc

  }, {totalPrice: 0,totalQuantity: 0})
  
  console.log(totalQuantity);
  


  return (
    <>
     <PageHeading headline="Shopping Curt" page="shopping curt" />

     
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-[70%]">
            {cartData.map((item,index) => (
              
              <div className="flex  items-center justify-between">
                <div className="flex items-center w-[40%]">
                  <img className='w-20' src={item.thumbnail} alt="" />
                  <h3 >{item.title}</h3>
                </div>
                <div className="items-center w-[20%]">
                  <span>${item.price}</span>
                </div>
                <div className=" w-[20%]">
                  <div className="flex gap-4 items-center bg-[#BEBFC2] w-20">
                    <FiMinus onClick={()=>handleDecreament(index)}/>
                    <span>{item.qty}</span>
                    <FiPlus onClick={()=>handleIncreament(index)}/>
                  </div>
                </div>
                
                <div className="w-[20%]">
                  <span>${(item.price)*(item.qty).toFixed(2)}</span>
                </div>
              </div> 
            ))}
        </div>
        <div className="w-[25%]">
          <div className="bg-red-500 mb-5">
            <h2>Cart Totals</h2>
            <div className="">
              <h2 className='mb-2'>Total Price: ${totalPrice.toFixed(1)}</h2>
              <h2 className='mb-2'>Total Quantity: {totalQuantity}</h2>

            </div>
          </div>
        </div>

      </div>       
    </div>
   


    

    </>
  )
}

export default Cart
