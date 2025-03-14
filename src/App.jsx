
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import RootLayout from './components/RootLayout'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'



function App() {
  
  const route = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={route} />
      
    </>
  )
}

export default App

