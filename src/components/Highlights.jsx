import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(()=>{
   gsap.to("#title",{
    opacity:1,
    y:0,
    duration:0.3
   })
   gsap.to(".link",{
    opacity:1,
    y:0,
    duartion:1,
    stagger:0.25
   })
  },[])
  return (
    <section id="highlights" className='w-screen max-w-[1650px] m-auto  overflow-hidden h-full common-padding 
     bg-zinc '>
     <div className="screen-max-width ">
       <div className='mb-12 w-full md:flex  justify-between items-end'>
        <h1 id='title' className='section-heading'>Get The Highlights</h1>
        <div className='flex-wrap flex items-end gap-5'>
          <p className='link'>
            Watch the film
            <img src={watchImg} alt="watchImg" />
          </p>
         
          <p className='link'>
            Watch the film
            <img src={rightImg} alt="rightImg" />
          </p>
        </div>
       </div>
     </div>
     <div>
      <VideoCarousel/>
     </div>

    </section>
  )
}

export default Highlights