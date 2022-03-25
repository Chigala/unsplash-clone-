import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import {ReactComponent as Logo} from "../icons/success.svg"
import { MdDone} from "react-icons/md"


export const ImagePreview = () => {
  const [done, setdone] = useState(false)
    const photoIsLoading = useSelector((state)=> state.photourl.value);
  return (
    <div className='w-screen h-screen  flex justify-center items-center'>
        <div className=' w-72 h-96 bg-white shadow-2xl shadow-gray rounded-lg flex justify-start space-y-4 flex-col items-center '>
            
             <div className='mt-8 flex flex-col items-center space-y-4'>
               <Logo className="w-48 h-5"/>
               <p className='text-black  text-base font-semibold' >uploaded successfully</p>
               <div className=' w-60 h-48 border-dotted border-blue-200 rounded-2xl border-2 flex flex-col items-center  justify-start space-y-9  bg-gray-50 '>
                   <img src={photoIsLoading} alt="dog" className='w-full h-full rounded-2xl' />
               </div>
               
               <div className='flex flex-row border-gray rounded-xl  border-2 border-solid  h-8'>
                 <div className=' w-40'><p className='truncate'>{photoIsLoading}</p></div>
                 <button className='bg-blue-500 text-white rounded-md text-xs  w-16' onClick={()=> {setdone(true); navigator.clipboard.writeText(photoIsLoading)}}>{done?<MdDone className='text-xl ml-6 text-white-500'/>: "copy link"}</button>

               </div>
             </div>
        </div>
    </div>
  )
}
