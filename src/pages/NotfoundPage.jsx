import React from 'react'
import { Link } from 'react-router-dom'


const NotfoundPage = () => {
  return (
    <div className='font-poppins h-screen flex  flex-col justify-center items-center'>
        <h1 className='font-bold'>Page not found❌</h1>
        <Link to={"/"}><button className='bg-blue-600 rounded-full p-3'>Home</button>
        </Link>
    </div>
  )
}

export default NotfoundPage