import React from 'react'
import refimg from"./images/g4.png"
import ref2img from"./images/g5.png"




export default function References() {
  return (
<div className='text-center pt-20'>
    
<div class="flex flex-wrap justify-center mt-5">
  <img
  src={refimg}
  class="p-1 bg-white border rounded w-screen h-auto"
  alt="..."
/> 
</div>

<div class="flex flex-wrap justify-center mt-5">
  <img
  src={ref2img}
  class="p-1 bg-white border rounded w-4xl h-auto"
  alt="..."
/> 
</div>



    </div>
  )
}
