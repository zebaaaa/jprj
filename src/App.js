import React from "react";
import {  Route, Routes } from 'react-router-dom'; 
import './index.css';

import { AnimatePresence } from "framer-motion";
import HomeContainer from './components/HomeContainer';
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <div className=" h-auto flex flex-col " >
      <Navbar />
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full bg-[#f7f4e1]'>
        <Routes>
        <Route path="/*" element={<HomeContainer />} /> 
       </Routes>
        </main>
    </div>
    </AnimatePresence>
    
  )
};
export default App;









