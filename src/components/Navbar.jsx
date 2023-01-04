import React from 'react'
import logoimg from "./images/logo.png"

export default function Navbar() {
  return (
    <nav class="
    sticky-top
    w-screen
    
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-gray-100
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg navbar-light

    ">
    <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <img src={logoimg} style={{height: "40px"}} alt=""
        loading="lazy" />
    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
    <a class="
          flex
          items-center
          text-gray-900
          hover:text-gray-900
          focus:text-gray-900
          mt-2
          lg:mt-0
          mr-1
        " href="#">
      
    </a>
    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto" id="scrollspy1">
      <li class="nav-item p-2">
        <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#"><a class="nav-link" href="#example-1">Home</a></a>
      </li>
      <li class="nav-item p-2">
        <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#"><a class="nav-link" href="#example-2">About</a></a>
      </li>
      <li class="nav-item p-2">
        <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#"><a class="nav-link" href="#example-3">Offers</a></a>
      </li>
     
      <li class="nav-item p-2">
        <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#"><a class="nav-link" href="#example-4">References</a></a>
      </li>
    </ul>
    </div>
    <button type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:text-white hover:bg-green-300 hover:bg-gradient-to-r from-green-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
        Buy Now</button>
   
   
    </div>
  </nav>
  )
}
