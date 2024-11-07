import React from 'react'
import {appleImg, bagImg, searchImg} from "../utils"
import {navLists} from "../constants"

const Navbar = () => {
  return (
    <div>
      <header className='w-full px-5 sm:px-10 py-5 flex justify-between items-center'>
        <nav className='w-full flex screen-max-width'>
          <img src={appleImg} alt="appleImg"  width={18} height={22}/>
          <div className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map((nav)=>{
              return(
              <div className='px-5 cursor-pointer text-gray text-md
              transition-all hover:text-white' key={nav}>{nav}</div>
              )
            })}
          </div>
          <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt="searchImg" width={22} height={22} />
            <img src={bagImg} alt="bagImg" width={22} height={22} />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar