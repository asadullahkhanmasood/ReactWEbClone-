import "./SideBar.css"
import React from "react";

function SideBar() {
  return (
    <>
    <div className='flex h-screen bg-red-200 w-80 flex-col'>
            <div className="sideBarheading w-full flex text-center border h-20 justify-center items-center">
                <h1 className='text-2xl font-extrabold'>SelectMenu</h1>
            </div>

            <div className="h-[80%] pt-10 w-full border flex items-center">
                <ul className='flex flex-col justify-between h-full w-full'>
                    <li className='border w-full flex justify-center items-center'><a href="/about" className='block w-full bg-amber-400 text-center py-3'>ABOUT</a></li>
                    <li className='border w-full flex justify-center items-center'><a href="/" className='block w-full bg-amber-400 text-center py-3'>HOME</a></li>
                    <li className='border w-full flex justify-center items-center'><a href="/contact" className='block w-full bg-amber-400 text-center py-3'>CONTACT</a></li>
                    <li className='border w-full flex justify-center items-center'><a href="/services" className='block w-full bg-amber-400 text-center py-3'>SERVICES</a></li>
                    <li className='border w-full flex justify-center items-center'><a href="/projects" className='block w-full bg-amber-400 text-center py-3'>PROJECTS</a></li>
                    <li className='border w-full flex justify-center items-center'><a href="/dev" className='block w-full bg-amber-400 text-center py-3'>UNDER DEV</a></li>
                </ul> 
            </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default SideBar