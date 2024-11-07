import React from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all"
import gsap from 'gsap';
import { useRef } from 'react';
import { animateWithGsap } from '../utils/animation'
gsap.registerPlugin(ScrollTrigger);
  

const HowitWorks = () => {
    const videoRef=useRef(null)
    useGSAP(()=>{
      gsap.from("#chip",{
        scrollTrigger:{
              trigger:"#chip",
            start:"50% bottom",
            // toggleActions: 'restart reverse restart reverse',


        },
        opacity:1,
        scale:2,
        duration:2,
        ease:"power2.inOut"
      })
      ,
      gsap.to(".g_fadeIn", {
        opacity:1,
           y:0,
           duration:0.8,
           ease:"power2.inOut",
        scrollTrigger: {
          trigger:".g_fadeIn",
          toggleActions: 'restart reverse restart reverse',
          start: 'top 90%',
          
        }
      })
    //   gsap.to('#honkai', {
    //     scrollTrigger: {
    //       trigger: '#honkai',
    //       toggleActions: 'restart reverse restart reverse',
    //       start: '-10% top',
         
          
        
    //     },
    //     onComplete: () => {
    //       videoRef.current.play();
    //     }
    //   })

    },[])
  return (
    
    <section className='common-padding'>
        <div className='screen-max-width overflow-hidden'>
            <div id='chip' className='flex-center w-full my-20'>
                <img src={chipImg} alt="chip" width={180} height={180} />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='hiw-title'>
                   A17 Pro Chip
                   <br />
                   A montser win for Gaming.
                </h2>
                <p className='hiw-subtitle'>
                    It's here. The biggest redesign in history of Apple GPUs.
                </p>
            </div>
            <div className='mt-10 mb-14 md:mb-20'>
                <div className='relative h-full flex-center '>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt="frame" className='bg-transparent z-10 relative' />
                    </div>
                    <div className='hiw-video'>
                        <video id="honkai" className='pointer-events-none'
                        playsInline preload='none' autoPlay muted ref={videoRef}>
                            <source src={frameVideo} type='video/mp4'/>
                        </video>
                    </div>
                </div>
                <p className='text-gray font-semibold text-center mt-3 text-xl md:text-2xl'>
                    Honkai : Star Rail
                </p>
                </div>
                <div className="hiw-text-container">
                <div className="flex-1 flex justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                  A17 Pro is an entirely new class of iPhone chip that delivers our {" "}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                   
                  </p>
                
                
                  <p className="hiw-text g_fadeIn">
                   Mobile {" "}
                    <span className="text-white">
                     games will look and feel so immersive
                    </span>
                   with incredibly detailed environment and characters.
                   </p>
                   </div>
                
                <div className='flex flex-1 justify-center flex-col g_fadeIn '>
                    <p className='hiw-text'>New</p>
                    <p className='hiw-bigtext'>Pro-Class GPU</p>
                    <p className='hiw-text'>With 6-Cores</p>
                </div>


              </div>
            </div>
        
    </section>
  )
}

export default HowitWorks