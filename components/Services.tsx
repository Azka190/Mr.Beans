import React from 'react'
import Image from 'next/image'

function Services() {
  return (

    <div className='bg-custom-blue'>
          <div className=" bg-no-repeat  h-screen bg-center  " style={{ backgroundImage: "url('/iPhone 13 Pro.png')" }}>

      <div>
        <div className='flex absolute w-20 h-15 ml-[650px] pt-20 '> 
        <img src="bg.png" alt=""  />
        </div>
        <div className='flex relative'>
        <h1 className='font-roboto text-[50px] font-[700px]  text-white ml-[670px] pt-[73px]' >My Services </h1><br />
        </div>
      </div>
        <div>
       </div>
        </div>
    </div>
  )
}

export default Services