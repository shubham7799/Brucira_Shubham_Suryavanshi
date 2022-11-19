import React, { useState } from 'react'
import azure from './../images/integrations/azure.png'
import crmnext from './../images/integrations/crmnext.png'
import google from './../images/integrations/google.png'
import office from './../images/integrations/office.png'
import salesforce from './../images/integrations/salesforce.png'
import teams from './../images/integrations/teams.png'
import webex from './../images/integrations/webex.png'
import StackCard from './StackCard'
import Marquee from "react-fast-marquee";


function Integrations() {

    const [hover,setHover]=useState(true);

  return (
    <div className='violet py-32 flex flex-col items-center w-full integration'>
        <div className='px-24 mb-24'>
            <div className='text-5xl font-bold mx-80 leading-[1.3] tracking-tight mb-4'>Turnkey Integrations with your sales tech stack</div>
            <p className=' ibmFont400 opacity-50'>Get up and running in months weeks!</p>
        </div>
        <div className='w-full space-y-4' 
            onMouseEnter={()=>{setHover(false)}} 
            onMouseLeave={()=>{setHover(true)}}>
            <Marquee play={hover} gradient={false} speed={70}>
                    <div className='flex'>
                        <StackCard logo={crmnext} name={"CRMNext"} text={"Vymo integrates with leading global CRM solutions to drive better performance and make its data more impactful."} />
                        <StackCard logo={azure} name={"Azure Active Directory"} text={"The following enterprise single sign-on (SSO) services come integrated with Vymo out-of-the-box."} />
                        <StackCard logo={teams} name={"MS Teams"} text={"Vymo improves your team’s efficiency by auto-detecting and auto-logging all your team’s sales communication"} />
                        <StackCard logo={webex} name={"WebEx"} text={"Vymo improves your team’s efficiency by auto-detecting and auto-logging all your team’s sales communication"} />
                    </div>
            </Marquee>
            <Marquee play={hover} gradient={false} speed={70} delay={-3}>
                    <div className='flex'>
                        <StackCard logo={office} name={"Office 365"} text={"Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites"} />
                        <StackCard logo={google} name={"Google Suite"} text={"Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites"} />
                        <StackCard logo={salesforce} name={"Salesforce"} text={"Vymo integrates with leading global CRM solutions to drive better performance and make its data more impactful."} />
                        <StackCard logo={crmnext} name={"CRMNext"} text={"Vymo integrates with leading global CRM solutions to drive better performance and make its data more impactful."} />
                    </div>
            </Marquee>
        </div>
        <div className='cursor-pointer px-8 py-4 mt-20 w-72 blueMaterial ibmFont500 rounded-md'>See how Vymo can help</div>    
    </div>
  )
}

export default Integrations