import React from 'react'
import Accordion from './Accordion'
import assistantimg from './../images/assistant.png'
import coachimg from './../images/coach.png'

function Accord() {

  const accordionData=[
    {
      title:"1. Personal Assistant",
      content:"Vymo automatically captures all sales activities so your sellers don’t have to report them manually. Vymo also helps sellers plan their schedules so they can engage with customers or partners intelligently",
      img:assistantimg,
    },
    {
      title:"2. Personal Coach",
      content:"Vymo understands what makes your best sellers successful and nudges best behaviors proactively to the rest of your team. Vymo also suggests interventions based on insights to improve outcomes.",
      img:coachimg
    }
  ];

  return (
    <div className='mt-64 h-screen my-24 flex flex-row justify-center'>
        <div className='w-5/6 px-24'>
            <div className='text-5xl px-48 font-extrabold mb-16 tracking-tight leading-[4rem]'>The power of an intelligent Assistant and a Coach</div>
            <div className='rounded-3xl blueMaterial text-left'>
                <Accordion data={accordionData} />
            </div>
            
        </div>
    </div>
  )
}

export default Accord