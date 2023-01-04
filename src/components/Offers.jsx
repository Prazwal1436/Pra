import React from 'react'
import offerimg from"./images/price.png"

export default function Offers() {
  return (
   
   <div className='text-center pt-20'><div class="flex flex-wrap justify-center mt-5">
  <img
  src={offerimg}
  class="p-1 bg-white border rounded max-w-2xl"
  alt="..."
/> 
</div>
<button type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-2xl leading-tight uppercase rounded hover:text-white hover:bg-green-300 hover:bg-gradient-to-r from-green-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
        Buy Now</button>
</div>
  )
}
