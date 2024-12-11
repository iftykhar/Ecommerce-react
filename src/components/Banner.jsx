import React from 'react';
import Slider from 'react-slick';
import promotional from "../assets/promotional.png"; 
import sofa from "../assets/sofa.png";

const Banner = () => {
  
  const images = [promotional, promotional, promotional]; 

  const settings = {
    dots: true,
    infinite: false, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
  };

  return (
    // <section className="w-full">
    //   <div className=" mx-auto">
    //     <Slider {...settings}>
    //       {images.map((image, index) => (
    //         <div key={index} className="flex justify-center">
    //           <img src={image} alt={`promotional image ${index + 1}`} className="w-full h-auto" />
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </section>
    <section className='bg-[#f2f0ff] py-36' >
        <div className="container mx-auto">
            <div className="lg:flex lg:justify-between items-center">
                <div className="lg:w-[45%]">
                    <h4 className='text-[#FB2E86]   font-bold font-lato pb-3'>Best Furniture For Your Castle....</h4>
                    <h2 className='lg:text-[53px] text-[24px] font-josef pb-4 font-bold'>New Furniture Collection Trends in 2020</h2>
                    <p className='lg:text-[16px] font-lato font-bold leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p>

                    <div className="pt-5">
                        <button className='px-5 py-3 rounded bg-[#FB2E86] text-white text-bold'>Shop now</button>
                    </div>
                </div>
                <div className="lg:w-[55%] flex justify-end">
                    <img className="w-2/3" src={sofa} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;

