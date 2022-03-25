import React, { useCallback, useEffect } from 'react'
import {ReactComponent as Logo} from "../icons/photo.svg"
import { useState } from 'react'
import  { useDropzone } from 'react-dropzone'
import axios from 'axios';
import { getUrl } from '../store/photoUrl';
import { getValue } from '../store/state';
import { getSuccessValue } from '../store/success';
import { useDispatch } from 'react-redux';
import { getUploadSuccessValue } from '../store/uploadSuccess';



export const Homepage = () => {
  
  const [file, setfile] = useState([]); 
  const [showLogo, setshowLogo] = useState(true);
  const dispatch = useDispatch();
 
//   useEffect(() => {
//     console.log("chigala is running");
//     console.log(file)
//   }, [file])
  
  const onDrop = (acceptedFile) => {
    console.log("file just dropped")
    const filePreview = acceptedFile.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
        
    }))

    setfile(
        filePreview
    )
         
          

  }
  
  const onDropAccepted = () => {
    // console.log(file.length)
    // console.log(`this is the file ${file}`)
    // console.log(showLogo)
    setshowLogo(false);
    
    // uploadToCloud();
  }
 
  const {getRootProps, getInputProps} = useDropzone({
      accept: "image/*", 
      multiple:false,
      onDrop,
      onDropAccepted,
  })

  const uploadToCloud = async() => {
    
    const data = new FormData();
    data.append("file",file[0] );
    data.append("upload_preset", "chigala");
    data.append("cloud_name", "chigala");
    console.log(data);
       var config = {
           onUploadProgress: function(progressEvent) {
             var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
             dispatch(getValue(percentCompleted));
           }
         };

   await axios.post(" https://api.cloudinary.com/v1_1/chigala/image/upload", data, config)
        .then((res)=> {
            dispatch(getUrl(res.data.url));
            console.log(res.data.url);
        
        } )
        .catch((err)=> err)
        dispatch(getUploadSuccessValue(true));
        setTimeout(() => {
          dispatch(getSuccessValue(true));
        }, 3000);
    
       
   
 }

  const images = file.map((image)=> (
      
      
    <div key={image.name}>
        <img src={image.preview} alt={image.name} className="w-full h-full"/>
    </div>
))

  return (
    <div className='w-screen h-screen  flex justify-center items-center'>
        <div className=' w-72 h-96 bg-white shadow-2xl shadow-gray rounded-lg flex justify-start space-y-3 flex-col items-center'>
             <p className='text-black text-lg font-bold  font-serif mt-6'>Upload your image</p>
             <p className='text-xs font-thin'>file should be png or jpeg</p>
             <div {...getRootProps()} className=' w-60 h-48 border-dotted border-blue-200 rounded-2xl border-2 flex flex-col items-center  justify-start space-y-9  bg-gray-50 '>
                 <div className=' h-16 w-40 mt-6 flex justify-center  '>
                     {showLogo&&<Logo className='h-full w-full'/>}
                     <div>{images}</div>
                     
                     
                 </div>
                 <p className='text-xs text-gray-400 font-thin '>Drag and drop your image here</p>
             </div>
             <div className='space-y-1 flex items-center flex-col'>
               <p className=' text-xs'>or</p>
               <input type="file"  id='file' {...getInputProps()} className='text-blue-400 hidden '/>
               <label for="file" className='bg-blue-500 rounded-md  text-white pt-1 h-7 text-xs w-24 text-center hover:cursor-pointer'> choose a file </label>
               <button onClick={uploadToCloud} className='bg-blue-500 rounded-md  text-white pt-1 h-7 text-xs w-24 text-center hover:cursor-pointer '>upload</button>
             </div>
        </div>
    </div>
  )
}
