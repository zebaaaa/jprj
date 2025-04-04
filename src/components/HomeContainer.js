import React from "react";
import ReactPlayer from 'react-player';
// import {Link} from "react-router-dom";
const HomeContainer = () => {
  const videoUrl = '/video/jvid.mp4';
  return (
    <div>
      <div className="relative h-screen w-full py-8 m-0 overflow-hidden bg-[#f7f4e1] ">
        <ReactPlayer
        url={videoUrl}
        width="100%" /* Set width to 100% for full-screen video */
        height="100vh" /* Set height to 100vh for full viewport height */
        controls={false}  // Optionally remove controls for a cleaner look
        playing={true}  // Enable autoplay
        loop={true} /* Enable video controls */
        muted ={true}
        />

         </div>
      
     <div class="pt-[2vh] ">
      {/* div1 */}
      <div class="flex text-[#3f2d21] ">
      <div class="w-1/2  p-4 ">
      <h2 class="text-7xl mb-12">Jewellry that defines</h2>
      <h1 class="text-9xl mt-2">YOU</h1>
      <p class="text-2xl text-gray-800 italic mt-20">Elegance in every detail</p>
      <p class="text-2xl text-gray-800 italic">Crafted to reflect your uniqueness</p>
      <p class="text-xl text-gray-800 mt-6">Starting just at 1000rs</p>

      </div>
      <div class="w-1/2  p-4">
      <img src="/images/2rings.jpg" alt="ring" class="w-full h-auto"/>
      </div>

      </div>
      {/* div2 */}
      
    
      <h1 class="text-center text-[#3f2d21] text-2xl ">Best Seller</h1>
        <div class=" flex bg-[#EDE1D5] mb-4 ">
          
      <div class="w-1/4  p-4 ">
      <img src="/images/pendant1.jpg" alt="ring" class="w-full h-48 object-cover"/>
      <h2 class="text-lg text-[#3f2d21] mt-2 flex flex-col items-center">Elegant Pendant</h2>
      <div class="flex flex-col items-center">
      <button class="mt-3 px-0.5 py-0.5 border border-[#3f2d21] text-[#3f2d21] bg-transparent hover:bg-[#3f2d21] hover:text-white transition">
      Shop Now
    </button>
      </div>
      </div>
      <div class="w-1/4 p-4">
      <img src="/images/ring1.jpg" alt="ring" class="w-full h-48 object-cover"/>
      <h2 class="text-lg text-[#3f2d21] mt-2 flex flex-col items-center">Classic Ring</h2>
      <div class="flex flex-col items-center">
      <button class="mt-3 px-0.5 py-0.5 border border-[#3f2d21] text-[#3f2d21] bg-transparent hover:bg-[#3f2d21] hover:text-white transition">
      Shop Now
    </button>
      </div>
      </div>
      <div class="w-1/4  p-4">
      <img src="/images/earring1.jpg" alt="ring" class="w-full h-48 object-cover"/>
      <h2 class="text-lg text-[#3f2d21] mt-2 flex flex-col items-center">Silver Hoops</h2>
      <div class="flex flex-col items-center">
      <button class="mt-3 px-0.5 py-0.5 border border-[#3f2d21] text-[#3f2d21] bg-transparent hover:bg-[#3f2d21] hover:text-white transition">
      Shop Now
    </button>
      </div>
      </div>
      <div class="w-1/4  p-4">
      <img src="/images/bracelet1.jpg" alt="ring" class="w-full h-48 object-cover"/>
      <h2 class="text-lg text-[#3f2d21] mt-2 flex flex-col items-center">Bracelet</h2>
      <div class="flex flex-col items-center">
      <button class="mt-3 px-0.5 py-0.5 border border-[#3f2d21] text-[#3f2d21] bg-transparent hover:bg-[#3f2d21] hover:text-white transition">
      Shop Now
    </button>
      </div>
      </div>
        </div>
        <h1 class="text-center text-[#3f2d21] text-2xl">Category</h1>
        {/* div3 */}
        <div class="flex ">
        <div class="w-1/3 p-4">
        <img src="/images/ring2.jpg" alt="ring" class="w-full h-48 object-cover"/>
        <h2 class="text-lg text-[#3f2d21] mt-2 flex flex-col items-center">Ring</h2>
      </div>
      <div class="w-1/3  p-4">
      <img src="/images/bangle1.jpg" alt="ring" class="w-full h-48 object-cover"/>
      <h2 class="text-lg text-[#3f2d21] mt-2 flex flex-col items-center">Bracelet</h2>
      </div>
      <div class="w-1/3  p-4">
      <img src="/images/earring2.jpg" alt="ring" class="w-full h-48 object-cover"/>
      <h2 class="text-lg text-[#3f2d21] mt-2 flex flex-col items-center">Earring</h2>
      </div>
      <div class="w-1/3  p-4">
      <img src="/images/pendant2.jpg" alt="ring" class="w-full h-48 object-cover"/>
      <h2 class="text-lg text-[#3f2d21] mt-2 flex flex-col items-center">Pendant</h2>
      </div>

        </div>

        {/* div4 */}
        <div class="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url('/images/bgimg.jpg')` }}>
          <div class="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
        <div class="flex flex-col items-center">
      <button class="mt-3 px-4 py-4 border border-[#3f2d21] text-xl text-[#3f2d21] bg-transparent hover:bg-[#3f2d21] hover:text-white transition">
      Shop Now
    </button>
      </div>
        </div>
      </div>


      <footer class="bg-[#EDE1D5] text-[#3f2d21] py-6 mt-10">
  <div class="container mx-auto flex flex-col text-center items-center px-6">

    <h2 class="text-lg font-semibold">ZARIA's</h2>
    
   
    
    <p class="text-sm mt-4 md:mt-0">© 2025 ZARIA's.</p>
    <p class="text-sm mt-4 md:mt-0"> All rights reserved.</p>

    
  </div>
</footer>

        
      
     </div>
      </div>
    
  )
};
export default HomeContainer;