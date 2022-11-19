import React from 'react'
import hero from './../images/hero.png'
import img1 from './../images/img1.png'
import img2 from './../images/img2.png'
import img3 from './../images/img3.png'

function Hero() {
  return (
    <div className='h-screen'>
        <div className='h-full w-full flex absolute -z-10 pb-16' >
            <div className='w-9/12 h-full'></div>
            <div className='w-3/12 h-full bg-[#1C122E]'></div>
        </div>
        <div className='pl-32 pr-16'>
        <div className='flex h-screen pt-32 z-50 pb-16 mb-20'>
            <div className='py-20 pr-24'>
                <h1 className='text-6xl text-left font-bold leading-[1.3]'>Conventional CRMs are insufficient</h1>
                <p className='text-left ibmFont500 text-lg my-4 opacity-60'>What you need is an intelligent sales frontend that helps you drive interventions across the customer lifecycle to improve outcomes.</p>
                <div className='cursor-pointer px-8 text-lg ibmFont500 mt-12 py-4 w-72 blueMaterial rounded-md'>See how Vymo can help</div>    
            </div>
            <img className='' src={hero} alt="" />
        </div>
        <div className='w-full content-center mb-40 ibmFont500 text-left md:flex justify-between'>
            <div className='flex'>
                <img className='w-10 h-10 mr-4 mt-2' src={img1} alt="" />
                <p className='text-xl'>Turn systems of records into systems of insight</p>
            </div>
            <div className='flex mx-16'>
                <img className='w-10 h-10 mr-4 mt-2' src={img2} alt="" />
                <p className='text-xl'>Drive targeted interventions, improve outcomes</p>
            </div>
            <div className='flex'>
                <img className='w-10 h-10 mr-4 mt-2' src={img3} alt="" />
                <p className='text-xl'>Leverage data across the customer lifecycle</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero