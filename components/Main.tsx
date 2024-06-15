import React from 'react'

function Main() {
  return (
    <div className='flex bg-custom-blue'>
        <div className='text-white  mt-[51px] ml-[128px]'>
            <button className=' bg-custom-gradient w-[134px] h-[64px] mt-[179px]  rounded-custom '>Hello,i'm </button>
            <h1 className='font-[500] text-[50px] h-[84.38px] font-roboto'>Mr. Beans</h1>
            <p className='font-[700] text-[22px] h-[25.78px] font-roboto'>FULL-STACK DEVELOPER | UX/UI DESIGNER | FREELANCER</p>
            <img className='w-[226px] h-[40px] mt-[30px]  ' src="Group 9.png" alt="images of icons" />
            <button className=' bg-custom-gradient w-[180px] h-[45px] mt-[30px] rounded-full '>Download CV</button>          
        </div>
        <div>
        <img className='w-[483px] h-[540px] mt-[108px] ' src="iphone 13.png" alt="images of icons" />
        </div>
    </div>
  )
}

export default Main