
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import RootLayout from './components/RootLayout'

function App() {
  
  const route = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={route} />
      
    </>
  )
}

export default App
