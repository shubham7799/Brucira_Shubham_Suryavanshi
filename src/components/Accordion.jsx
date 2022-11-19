import React, { useState } from 'react'
import arrowright from './../images/arrow-right.png'

function Accordion({data}) {

    const [tab,setTab]=useState(0);

    function change(activeTab){
        if(activeTab!==tab){
            setTab(activeTab);
        }
    }

  return (
    <div>
        {
            data.map((element,index)=>{
                return (<>
                    {tab!==index && <h1 className={'text-3xl pl-20 py-6'} onClick={()=>{change(index)}}>{element.title}</h1>}
                    {tab===index && expanded(element)}</>
                );
            })
        }
    </div>
  )
}

function expanded({title,content,img}) {
    return (
        <div className='flex pl-20 pr-12 rounded-3xl bg-[#2C233D] justify-between items-center'>
            <div className='space-y-4 w-5/12 py-24'>
                <h1 className={'text-3xl'}>{title}</h1>
                <p className='ibmFont500 opacity-60'>{content}</p>            
                <div className='flex items-center cursor-pointer w-fit rounded ibmFont400 py-2 px-4 border border-white'>
                    See how it works
                    <span className='pl-2'><img src={arrowright} alt="" /></span>
                </div>                
            </div>
            <img className='w-60 h-50' src={img} alt="" />
        </div>
    );
}

export default Accordion