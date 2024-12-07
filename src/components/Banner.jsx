// import React from 'react'
// import Slider from "react-slick";
// import promotional from "../assets/promotional.png"



// const Banner = () => {
//   return (
//     <section>
//         <div className="container mx-auto   ">
//             <div className="">
//                 <img src="{promotional}" alt="promotional image" />
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Banner
import React from 'react';
import promotional from "../assets/promotional.png";

const Banner = () => {
  return (
    <section>
        <div className="">
            <div>
                <img src={promotional} alt="promotional image" />
            </div>
        </div>
    </section>
  );
}

export default Banner;
