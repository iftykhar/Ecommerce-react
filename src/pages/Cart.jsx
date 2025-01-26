import React from 'react'
import PageHeading from '../components/PageHeading'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartData = useSelector((state)=>state.cartItemManager.cartItems)

  console.log(cartData);
  

  return (
    <>
     <PageHeading headline="Shopping Curt" page="shopping curt" />
    </>
  )
}

export default Cart
