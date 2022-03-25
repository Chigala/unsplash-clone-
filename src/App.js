import { useState } from "react";
import { Homepage } from "./components/homepage";
import { ProgressPage } from "./components/progressPage";



import { ImagePreview } from "./components/imagepreview";

import { useSelector } from "react-redux";

function App() {
  
  // const [uploadSuccess, setuploadSuccess] = useState(true)
  // const [showLinear, setshowLinear] = useState(false);
  // const [showPreview, setshowPreview] = useState(false)
  
  const success = useSelector((state)=> state.success.value)
  const photoIsLoading = useSelector((state)=> state.photoIsLoading.value);
  const successUpload = useSelector((state)=> state.uploadSuccess.value)
 
  return (

        <div>
              {successUpload !== true?<Homepage/>: null}
              {photoIsLoading < 100 || success !== true?
              <ProgressPage/>: null}
              
              {photoIsLoading === 100 && success === true?<ImagePreview/>: null}
              
        </div>

  );
}

export default App;
