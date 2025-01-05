// import React from 'react'
// import logo from '../assets/logo.png';

// const Footer = () => {
//   return (
//     // <section>
//     //     <div className="">
//     //         <div className="">
//     //             <img src={logo} alt="" />
//     //         </div>
//     //     </div>
//     // </section>
    
//   );
// }

// export default Footer
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const categories = [
    'Laptops & Computers',
    'Cameras & Photography',
    'Smart Phones & Tablets',
    'Video Games & Consoles',
    'Waterproof Headphones',
  ];

  const customerCare = [
    'My Account',
    'Discount',
    'Returns',
    'Orders History',
    'Order Tracking',
  ];

  const pages = [
    'Blog',
    'Browse the Shop',
    'Category',
    'Pre-Built Pages',
    'WooCommerce Pages',
  ];

  return (
    <footer className="bg-[#EEEFFB] py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-josefin-sans text-[#000] mb-4">Hekto</h2>
          <p className="text-[#8A8FB9] text-sm">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-josefin-sans text-[#000] mb-4">Categories</h3>
          <ul className="space-y-2 text-[#8A8FB9] text-sm">
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-josefin-sans text-[#000] mb-4">Customer Care</h3>
          <ul className="space-y-2 text-[#8A8FB9] text-sm">
            {customerCare.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-josefin-sans text-[#000] mb-4">Pages</h3>
          <ul className="space-y-2 text-[#8A8FB9] text-sm">
            {pages.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#E7E4F8] mt-6 pt-4 flex flex-col md:flex-row justify-evenly items-center text-sm text-[#9DA0AE]">
        <p>©Webecy - All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebook className="text-[#151875]" />
          <FaTwitter className="text-[#151875]" />
          <FaInstagram className="text-[#151875]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
