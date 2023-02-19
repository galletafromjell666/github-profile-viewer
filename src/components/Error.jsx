import React from 'react'

const Error = () => {
  return (
    <div className="w-full max-w-[450px] min-h-[585px] flex flex-col justify-evenly items-center bg-black/20 text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
    <img className="w-3/5" src="./sad_computer.png" />
    <h1 className="text-4xl font-semibold">No data yet</h1>
    <h2 className="text-2xl text-center text-white/70 ">
    Error
    </h2>
  </div>
  )
}

export default Error