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
      <div className="flex justify-between py-20">
        <div className="w-[70%]">
          
          <div className="flex  items-center justify-between">
                <div className="lex items-center w-[40%]">
                  <h2 className='font-josef text-2xl'>Product</h2>                  
                </div>
                <div className="items-center w-[20%]">
                    <h2 className='font-josef text-2xl'>Price</h2>
                </div>
                <div className=" w-[20%]">
                    <h2 className='font-josef text-2xl'>Quantity</h2>
                </div>
                <div className="w-[20%]">
                  <h2 className='font-josef text-2xl'>Total</h2>                  
                </div>
          </div>
            {cartData.map((item,index) => (
              
              <div className="flex  items-center justify-between border-4 border-transparent border-b-gray-200">
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

              <div className="mt-6 flex justify-between">
              <button className="bg-[#FB2E86] text-white py-3 px-20">Update Curt</button>
              <button className="bg-[#FB2E86] text-white py-3 px-20">Clear Curt</button>
              </div>
        </div>
        <div className="w-[25%]">
          <div className="py-5">
            <div className="  mb-5 ">
              <div className="text-center">
                <h2 className="font-josef text-2xl">Cart Totals</h2>
              </div>
              
              <div className="bg-[#E8E6F1] p-5">
                <div className=" px-3 ">
                  <h2 className='mb-2 font-josef  flex justify-between underline-offset-8'>SubTotal Price: <span>${totalPrice.toFixed(1)}</span></h2>
                  <h2 className='mb-2 font-josef  flex justify-between'>Total Quantity: <span>{totalQuantity}</span></h2>
                  <h2 className='mb-2 font-josef  flex justify-between'>Total Price(withVat): <span>{(totalPrice * (0.15)).toFixed(2)}</span></h2>
                </div>
                
                <div className="mt-4 pt-8">
                  <div className="flex gap-2 items-center mb-4">
                    <input type="checkbox" name="" id="" /><p>Shipping & taxes calculated at checkout</p>
                  </div>
                  
                  <button className="bg-[#19D16F] text-white py-3 px-20">Proceed To Checkout</button>
                </div>
                

              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="  mb-5 ">
              <div className="text-center">
                <h2 className="font-josef text-2xl">Calculate Shipping</h2>
              </div>
              
              <div className="bg-[#E8E6F1] p-5">
                <div className="  ">
                  {/* <h2 className='mb-2 font-josef  flex justify-between underline-offset-8'>SubTotal Price: <span>${totalPrice.toFixed(1)}</span></h2>
                  <h2 className='mb-2 font-josef  flex justify-between'>Total Quantity: <span>{totalQuantity}</span></h2>
                  <h2 className='mb-2 font-josef  flex justify-between'>Total Price(withVat): <span>{(totalPrice * (0.15)).toFixed(2)}</span></h2> */}
                  <input type="text" placeholder='Bangladesh'className='bg-transparent border-4  border-b-[#C7CEE4] mb-4 ' name="" id="" />
                  <input type="text" placeholder='Mirpur Dhaka - 1200'className='bg-transparent border-4  border-b-[#C7CEE4] mb-4 ' name="" id="" />
                  <input type="text" placeholder='Postal Code'className='bg-transparent border-4  border-b-[#C7CEE4] mb-4 ' name="" id="" />
                </div>
                <div className="mt-4 pt-8">
                  
                  
                  <button className="bg-[#FB2E86] text-white py-3 px-20">Calculate Shiping</button>
                </div>
                

              </div>
            </div>
          </div>
          
        </div>

      </div>       
    </div>
   


    

    </>
  )
}

export default Cart
