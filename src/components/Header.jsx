import React from 'react'
import logo from './../images/logo.png'

function Header() {
  return (
    <div className='flex w-full justify-between items-center py-6 px-32 absolute'>
        <div className='flex items-center'>
            <img src={logo} alt="" />
            <h1 className='pl-4 text-2xl'>Vymo</h1>
        </div>
        <div className='flex space-x-12 font-semibold ibmFont500'>
            <p className='cursor-pointer'>Why Vymo</p>
            <div className='cursor-pointer flex items-center'>Products
              <span className='pl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </div>
            <div className='cursor-pointer flex items-center'>Solutions
              <span className='pl-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </div>
            <p className='cursor-pointer'>Company</p>
            <p className='cursor-pointer'>Resources</p>
        </div>
        <div className='cursor-pointer px-8 py-3 ibmFont500 blueMaterial rounded-md'>Book Demo</div>
    </div>
  )
}

export default Header