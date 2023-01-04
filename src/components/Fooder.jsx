import React from 'react'
import ref3img from"./images/g3.png"

export default function Fooder() {
  return (
    <footer class="bg-gray-200 text-center lg:text-left">
    <div class="flex flex-wrap justify-center mt-5">
  <img
  src={ref3img}
  class="p-1 bg-white border rounded max-w-8xl"
  alt="..."
/> 
</div>
    <div class="text-gray-700 text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
      © 2023 Copyright:
      <a class="text-gray-800" href="">Prajjwal</a>
    </div>
  </footer>



    
  )
}
