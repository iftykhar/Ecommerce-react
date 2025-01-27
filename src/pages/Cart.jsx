import React from 'react'
import PageHeading from '../components/PageHeading'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartData = useSelector((state)=>state.cartItemManager.cartItems)

  console.log(cartData);
  
  

  return (
    <>
     <PageHeading headline="Shopping Curt" page="shopping curt" />

     {/* {Array.isArray(cartData) &&
      cartData.map((item) => (
        <h3 key={item.title}>{item.title}</h3>
      ))} */}

    {Array.isArray(cartData) && cartData.length > 0 ? (
            cartData.map((item, index) => (
              <h3 key={index}>{item.title}</h3> // Make sure each item has a "title" property
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}

    </>
  )
}

export default Cart
