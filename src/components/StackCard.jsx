import React from 'react'

function StackCard({logo,name,text}) {
  return (
    <div className='rounded-2xl p-8 my-2 mx-4 w-96 space-y-4 cursor-pointer' style={{ backgroundColor:'#2C233D' }}>
        <img src={logo} alt="" />
        <h1 className='text-left text-xl font-semibold'>{name}</h1>
        <p className='text-left ibmFont500 opacity-60'>{text}</p>
    </div>
  )
}

export default StackCard