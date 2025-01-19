import React, { useContext, useEffect, useState } from 'react';
import PageHeading from '../components/PageHeading';
import { apidata } from '../components/ContextApi';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CiSquareAlert } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/cartSlice'
// import { IoCartOutline } from "react-icons/io5";
// import React, {  } from 'react';


const Shop = () => {
  let data = useContext(apidata)

  let [category, setCategory] = useState([])

  useEffect(()=>{
    setCategory([...new Set(data.map((item)=>item.category))])
  },[data])

  
  let [cat, setCat] = useState([])

  const handleCategory = (catName)=>{
    let filteredProducts = data.filter((item)=> item.category == catName)
    setCat(filteredProducts)
    
  }

  let [catShow, setCatShow] = useState(false)
  

  let [priceItems, setPriceItems] = useState([])

  const handelPriceFiltering = (value)=> {
    
    let priceFilteredItems = data.filter((item)=>item.price> value.min && item.price <= value.max)
    
    setPriceItems(priceFilteredItems)

  }


  let [currentPage , setCurrentPage] = useState(1)

  let [perPage , setPerPage] = useState(21)

  let lasatItemIndex = currentPage * perPage;

  let firstItemIndex =  lasatItemIndex - perPage;

  let perPageProduct = data.slice(firstItemIndex, lasatItemIndex)

  let totalPagesNumber = Math.ceil(data.length /perPage);


  let pageNumbers = useState([])

for(let i = 1; i <= totalPagesNumber; i++){
  pageNumbers.push(i)
  
}

const handleNextPage = () => {
  if(currentPage !== totalPagesNumber){
    setCurrentPage(currentPage + 1)
  }
}
const handlePrevPage = () => {
  if(currentPage > 1 ){
    setCurrentPage(currentPage - 1)
  }
}

const handlePage  = (item)=>{
  setCurrentPage(item)
}


const dispatch = useDispatch();

const handleAddToCart = (item)=> {
  dispatch(addToCart(item))
}



  return (
    <>
      <PageHeading headline="Shop Grid Default" page="Shop Grid Default" />

      <div className="container mx-auto">
      
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-2">
              Ecommerce Accesories & Fashion item
            </h2>
            <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
          </div>

          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-4 lg:mt-0">
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Per Page:</span>
              <input
                type="number"
                className="w-16 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="10"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Sort By:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="default">Best Match</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>

            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex space-x-1">
                <button className="border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary">
                  <span className="material-icons text-sm">grid_view</span>
                </button>
                <button className="border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary">
                  <span className="material-icons text-sm">view_list</span>
                </button>
              </div>
            </div>
          </div>
        
        </div>
        <div className="">
          <div className="flex">
            <div className="w-[20%]">
              <div className="mb-2">
                    <h2 onClick={()=>setCatShow(!catShow)} className="text-[24px] font-sans font-bold flex items-center gap-3">Shop By Category <IoMdArrowDropdownCircle /></h2>
                  {catShow &&
                  
                  <ul className='h-60 overflow-y-scroll'>
                    {category.map((item)=>(
                      <li onClick={()=>handleCategory(item)} className='p-4 border-b-[1px]'>{item}</li>
                    ))}
                  </ul>

                  }
              </div>
              
            <div className="mb-2">
                  <h2  className="text-[24px] font-sans font-bold flex items-center gap-3">Shop By Price <IoMdArrowDropdownCircle /></h2>
                  
                  
                  <ul >
                    {/* {category.map((item)=>(
                      <li onClick={()=>handleCategory(item)} className='p-4 border-b-[1px]'>{item}</li>
                    ))} */}
                    <li onClick={()=>handelPriceFiltering({min: 0.00, max:50.00})} className='p-4 border-b-[1px]'>$0.00 - $50.00</li>
                    <li onClick={()=>handelPriceFiltering({min: 50.01, max:150.00})} className='p-4 border-b-[1px]'>$50.01 - $150.00</li>
                    <li onClick={()=>handelPriceFiltering({min: 150.01, max:250.00})} className='p-4 border-b-[1px]'>$150.01 - $250.00</li>
                    <li onClick={()=>handelPriceFiltering({min: 250.01, max:500.00})} className='p-4 border-b-[1px]'>$250.01 - $500.00</li>
                    <li onClick={()=>handelPriceFiltering({min: 500.01, max:10000.00})} className='p-4 border-b-[1px]'>$500.01 - $10000.00</li>
                  </ul>

                  
            </div>
              
            </div>
            <div className="w-[80%] flex flex-wrap justify-between py-2">
              {cat.length > 0 ? 
              cat.map((item) => (
                <div className="!w-[32%] shadow-lg group " key={item.id}>
                    <div className="flex justify-center bg-[#F6F7FB] pt-12 pb-4 px-6 relative overflow-hidden">
                        <img src={item.thumbnail} alt="" />
                        {/* */}

                        <Link to={`/shop/${item.id}`}>
                        <button className='text-base rounded-md absolute left-1/2 -translate-x-1/2 px-10 py-2 bg-green-500 -bottom-16 duration-300 ease-in-out group-hover:bottom-2'>View Details</button> 
                        </Link>
                        <div className="flex gap-3 absolute -left-40 top-0 group-hover:left-2 duration-300 ease-in-out">
                            <i onClick={()=>handleAddToCart(item)} >Cart </i>
                            <i>icon</i>
                            <i>icon</i>
                        </div>
                    </div>
                    <div className="text-center pt-4 pb-10 group-hover:bg-[#2F1AC4]">
                        <h2 className='text-[#FB2E86] text-[18px] group-hover:text-white'>{item.title}</h2>
                        <h4 className='group-hover:text-white'>Code - Y523201</h4>
                        <p className='group-hover:text-white'>${item.price}</p>
                    </div>
                </div>
              ))
              :
              priceItems.length > 0  ? 
              priceItems.map((item) => (
                <div className="!w-[32%] shadow-lg group " key={item.id}>
                    <div className="flex justify-center bg-[#F6F7FB] pt-12 pb-4 px-6 relative overflow-hidden">
                        <img src={item.thumbnail} alt="" />
                        {/* */}

                        <Link to={`/shop/${item.id}`}>
                        <button className='text-base rounded-md absolute left-1/2 -translate-x-1/2 px-10 py-2 bg-green-500 -bottom-16 duration-300 ease-in-out group-hover:bottom-2'>View Details</button> 
                        </Link>
                        <div className="flex gap-3 absolute -left-40 top-0 group-hover:left-2 duration-300 ease-in-out">
                            <i onClick={()=>handleAddToCart(item)} >Cart </i>
                            <i>icon</i>
                            <i>icon</i>
                        </div>
                    </div>
                    <div className="text-center pt-4 pb-10 group-hover:bg-[#2F1AC4]">
                        <h2 className='text-[#FB2E86] text-[18px] group-hover:text-white'>{item.title}</h2>
                        <h4 className='group-hover:text-white'>Code - Y523201</h4>
                        <p className='group-hover:text-white'>${item.price}</p>
                    </div>
                </div>
              )) 

              :
              perPageProduct.map((item) => (
                <div className="!w-[32%] shadow-lg group " key={item.id}>
                    <div className="flex justify-center bg-[#F6F7FB] pt-12 pb-4 px-6 relative overflow-hidden">
                        <img src={item.thumbnail} alt="" />
                        <Link to={`/shop/${item.id}`}>
                        <button className='text-base rounded-md absolute left-1/2 -translate-x-1/2 px-10 py-2 bg-green-500 -bottom-16 duration-300 ease-in-out group-hover:bottom-2'>View Details</button> 
                        </Link>
                        <div className="flex gap-3 absolute -left-40 top-0 group-hover:left-2 duration-300 ease-in-out">
                            <i onClick={()=>handleAddToCart(item)} >Cart </i>
                            <i>icon</i>
                            <i>icon</i>
                        </div>
                    </div>
                    <div className="text-center pt-4 pb-10 group-hover:bg-[#2F1AC4]">
                        <h2 className='text-[#FB2E86] text-[18px] group-hover:text-white'>{item.title}</h2>
                        <h4 className='group-hover:text-white'>Code - Y523201</h4>
                        <p className='group-hover:text-white'>${item.price}</p>
                    </div>
                </div>
              ))}
            
            </div>
            
          </div>
          {/* <div className="container">
              <ul className='flex gap-6'>
                <li onClick={handlePrevPage} className='border-2 px-5 py-2 '>Prev</li>
                {pageNumbers.map((item)=>(
                  <li onClick={()=>handlePage(item)} className={`border-2 px-5 py-2 ${item == currentPage ? "bg-green-500 text-white" : ""}`}>{item}</li>
                ))}
                <li onClick={handleNextPage} className='border-2 px-5 py-2 '>Next</li>
              </ul>
          </div> */}
          <div className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              <li>
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-primary text-black'
                  }`}
                >
                  Prev
                </button>
              </li>
              {Array.from({ length: totalPagesNumber }, (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePage(index + 1)}
                    className={`px-3 py-1 border rounded-md ${
                      currentPage === index + 1
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPagesNumber}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === totalPagesNumber ? 'bg-gray-200 cursor-not-allowed' : 'bg-primary text-black'
                  }`}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>

        </div>
        
          
      </div>
      
    </>
  );
};

export default Shop;

