import React, { useContext } from 'react'
import chair from '../assets/chair.png';
import Slider from "react-slick";
// import { apidata } from './ContextApi';
import { apidata } from './ContextApi';




const Featured = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 20000,
        // autoplaySpeed: 20000,
      };

    // let data = useContext(apidata);
    // let data = useContext(apidata);
    // console.log(data);
    let response = useContext(apidata);
    

  return (
    <section>
        <div className="container mx-auto">
            <div className="text-center  pt-8 pb-4">
                <h2 className='text-[42px] font-josef font-bold'>Featured Products</h2>
            </div>
           
            <Slider {...settings}>
                {response.map((item)=>(
                    <div className="!w-[95%]  shadow-lg group">
                    <div className="flex justify-center bg-[#F6F7FB] pt-12 pb-4 px-6 relative overflow-hidden">
                        <img src={item.thumbnail} alt="" />
                        <button className=' text-base rounded-md absolute left-1/2 -translate-x-1/2 px-10 py-2 bg-green-500 -bottom-16 duration-300 ease-in-out group-hover:bottom-2 '>View Details</button>
                        <div className="flex gap-3 absolute -left-40 top-0 group-hover:left-2 duration-300 ease-in-out">
                            <i>icon </i>
                            <i>icon </i>
                            <i>icon </i>
                        </div>
                    </div>
                    <div className="text-center pt-4 pb-10 group-hover:bg-[#2F1AC4]">
                        <h2 className='text-[#FB2E86] text-[18px] group-hover:text-white'>{item.title}</h2>
                        <h4 className='group-hover:text-white'>Code - Y523201</h4>
                        <p className='group-hover:text-white'>${item.price} </p>
                    </div>
                </div>
                ))}
                
            </Slider>


            
        </div>
    </section>
  )
}

export default Featured
