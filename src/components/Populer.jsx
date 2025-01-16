import React from 'react'

const Populer = () => {
  return (
    <div className='container'>
        <div>
            <h2 className='text-[24px] font-bold leading-7 text-blue-950 mt-10'>What's Popular</h2>
        </div>
        <div className='w-[15%] h-[400px] mt-6'>
            <img className='w-full h-[80%] object-cover' src="/src/assets/images/headerImg.jpg" alt="" />
            <div>
                <h3 className='text-[16px] font-semibold'>My tiny senpai</h3>
                <h4 className='text-[14px] font-normal'>Dec 15, 2024</h4>
            </div>
        </div>
    </div>
  )
}

export default Populer