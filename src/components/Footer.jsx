import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div className=''>
                <p className='font-semibold text-gray text-xs'>
                More ways to shop: {" "}
                    <span className='text-blue underline'> 
                      Find Apple Store{" "}
                    </span>
                    or {" "}
                    <span className='text-blue underline'> 
                      Other retailer{ " "}
                    </span>
                    near you.
                </p>
                <p className='font-semibold text-gray text-xs'>
                   Or call 00800-040-1966
                </p>
            </div>
            <div className='w-full h-[1px] bg-neutral-700 my-5'></div>
           <div className='flex md:flex-row flex-col justify-between md:items-center'>
            <p className='font-semibold text-gray text-xs'>
                Copyright @ 2024 Apple inc. all rights reserved.
            </p>
            <div className='flex'>
                {
                    footerLinks.map((links,i)=>(
                         <p key={links} className='font-semibold text-gray text-xs'>
                          {links}{" "}
                          {i!==footerLinks.length-1 && <span className='mx-2'>|</span>}
                         </p>
                    ))
                }
            </div>
           </div>
        </div>
    </footer>
  )
}

export default Footer