import React from 'react'
import director from './../images/director.png'

function Report() {
  return (
    <div className='min-h-screen py-8 flex flex-row justify-center'>
        <div className='w-3/5'>
            <div className='text-5xl font-extrabold mb-16 tracking-tight leading-[4rem]'>Recognized for driving innovation in Sales Engagement</div>
            <div className='rounded-3xl fluff'>
                <div className='flex py-10 pl-8 pr-12 rounded-3xl bg-white drop-shadow-sm' style={{border:"1px solid #EFF4F9"}}>
                <h1 className='px-14 py-12 parry font-bold text-2xl rounded-lg h-32 text-white'>Gartner</h1>
                <div className='ml-8'>
                    <h1 className=' text-left text-xl font-bold mb-4'>Vymo is a Representative Vendor in Gartner’s Sales Engagement Market Guide</h1>
                    <h2 className=' text-left ibmFont500 mb-8 pr-6 opacity-60'>Vymo should be of interest to application leaders supporting CRM Technologies and sales organizations (such as field sales and telesales) that need to make a step change in sales productivity</h2>
                    <div className='cursor-pointer px-8 py-3 w-60 ibmFont500 blueMaterial rounded-md'>Download Report</div>    
                </div>
            </div>
            
            <div className='flex p-8 ibmFont500'>
                <div className='w-96 flex flex-col items-center mx-4'>
                    <img className='mb-2' src={director} alt="" />
                    <h1 className='font-semibold'>Deepika Sharma</h1>
                    <p className='opacity-60'>Director, Gartner</p>
                </div>
                <h1 className='ml-12 text-left opacity-60 leading-7'>“We selected Vymo because of its unique application of automation and AI technology that allows for seamless data capture and contextual recommendations. In 8 weeks we have got complete visibility into every individual’s productivity and capability.”</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Report