import React from 'react'
import { useSelector } from 'react-redux'

export const ProgressPage = () => {
    const photoIsLoading = useSelector((state)=> state.photoIsLoading.value);

  return (
    <div className='w-screen h-screen flex justify-center items-center '>
        <div className=' shadow-2xl shadow-gray w-96 h-24 flex flex-col justify-around rounded-md  px-6 '>
            <p>uploading....</p>
            <div className='w-full bg-gray-200 h-1 mb-6'>
                <div className='bg-blue-600 h-1 ' style={{width:`${photoIsLoading}%`}}></div>
            </div>
        </div> 
    </div>
  )
}
