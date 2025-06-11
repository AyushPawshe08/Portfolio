import React from 'react'

const LoadingPage = () => {
  return (
    <div className='wrapper fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50'>
        <div className="container rotate-45 w-24 grid grid-cols-3 gap-x-1 gap-y-1">
            {new Array(9).fill().map((arr, index) => {
                return <div key={index} className='box w-7 h-7 bg-blue-300'></div>
            })}
        </div>
    </div>
  )
}

export default LoadingPage