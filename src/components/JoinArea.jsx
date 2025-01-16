import React from 'react'

const JoinArea = () => {
  return (
    <div>
        <div className="bg-headerImg bg-no-repeat bg-cover relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative px-6 py-[100px] text-white ">
          <h1 className="text-[28px] font-bold leading-[32px] ">Join Today</h1>
          <h3 className="text-[18px] font-meduim leading-6 mt-3">
          Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres or on TV.
          </h3>
          <button className='text-white bg-blue-950 text-[18px] font-semibold leading-5 px-3 py-2 rounded-md mt-8'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default JoinArea