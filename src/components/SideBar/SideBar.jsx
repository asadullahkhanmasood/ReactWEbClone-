import React from 'react'
import "./SideBar.css"
function SideBar() {
  return (
    <>
    <div className='flex h-screen bg-red-200 w-80 flex-col'>
            <div className="sideBarheading w-full flex text-center border h-20 justify-center items-center">
                <h1 className='text-2xl font-extrabold'>SelectMenu</h1>
            </div>

            <div className="h-[80%] pt-10 w-full border flex items-center ">
                <ul className='flex flex-col justify-between h-full w-full border h-[90%]'>
                    <li className='border w-full justify-center '><a href="" className='block border w-full bg-amber-400 text-center py-3'  id="">ABOUT</a></li>
                    <li className='border w-full justify-center '><a href="" className='block border w-full bg-amber-400 text-center py-3'  id="">HOME</a></li>
                    <li className='border w-full justify-center '><a href="" className='block border w-full bg-amber-400 text-center py-3'  id="">CONTACT</a></li>
                    <li className='border w-full justify-center '><a href="" className='block border w-full bg-amber-400 text-center py-3'  id="">SERVICES</a></li>
                    <li className='border w-full justify-center '><a href="" className='block border w-full bg-amber-400 text-center py-3'  id="">PROJECTS</a></li>
                    <li className='border w-full justify-center '><a href="" className='block border w-full bg-amber-400 text-center py-3'  id="">UNDER DEV</a></li>
                </ul>
            </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default SideBar