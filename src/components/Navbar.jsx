import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket} from "react-icons/md";
import { FaUser } from 'react-icons/fa';
import { motion } from "framer-motion";
const Navbar = () => {
  return (
  <navbar  className="fixed z-50 w-screen    px-4 md:p-6 md:px-16 bg-[#f7f4e1]" >

    <div className="hidden md:flex w-full h-full mb-4">
  <div className="flex items-center justify-center w-full"> 
    <p className="text-headingcolor text-4xl text-[#3f2d21] font-semi-bold">Zaria's</p>
  
    </div>
    <div className="relative flex items-center justify-end ">
      <MdShoppingBasket className="text-textColor text-2xl cursor-pointer mr-4 p-1" />
      <FaUser className="text-textColor text-2xl cursor-pointer ml-4 p-1" />
      
    </div>
</div>
<hr className="w-full  border-[#3f2d21] " />
    
    <div className="hidden md:flex w-full h-full items-center justify-center mt-4">
       <motion.ul 
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="flex items-center gap-8 "> 
        <li className="text-base text-[#3f2d21] hover: text-headingcolor  duration-100 
        transition-all ease-in-out cursor-pointer">
          <Link to="/*">Home</Link>
        </li>
        <li className="text-base text-[#3f2d21] hover: text-headingcolor  duration-100 
        transition-all ease-in-out cursor-pointer">
          <Link to="/*">Customer</Link>
        </li>
        <li className="text-base text-[#3f2d21] hover: text-headingcolor  duration-100 
        transition-all ease-in-out cursor-pointer">
          <Link to="/*">queries</Link>
        </li>
       
      </motion.ul>
    </div>

  
  

  </navbar>
  )
};
export default Navbar;