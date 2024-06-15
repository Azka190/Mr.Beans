import React from 'react'

function Aboutme() {
    

  return (
    <div className='bg-custom-black text-white flex gap-10 font-roboto'>
        <div>
            <div className=''>
            <img className='pt-44 pl-44 flex relative' src="image 2.png" alt="profile image" />
            <img className='flex absolute -mt-10 pl-[250px] ' src="image 7.png" alt="profile image" />
            <img className='flex absolute -mt-[14px] pl-[305px] ' src="image 9.png" alt="profile image" />
            <img className='flex absolute -mt-10 pl-[370px] ' src="image 9.png" alt="profile image" />
            </div>
            <p className='text-[18px] font-[700px] pl-52 mt-10 '>Certifications</p>
            <p className='text-[34px] font-[700px] pl-52'>Israel Gonzalez</p>
        </div>
        <div className=' mt-56 pl-28'>
            
             <h1 className='font-roboto text-4xl font-[700px] bg-custom-gradient w-12 h-12  rounded-full ' >About me </h1><br />
           
            <p className='py-5 pr-52 '>
                I'm Israel Gonzalez, I'm 27 years old, I currently work independently as a fullstack, UX|UI designer and video game designer.
            </p>
            <p className='pr-52'>
                I currently have a video game studio where I spend my time mixing ideas from all my work to generate quality stories that everyone can enjoy.
            </p>
        </div>
    </div>



  )
}

export default Aboutme


