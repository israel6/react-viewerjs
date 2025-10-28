import React from "react"
import { RViewer, RViewerTrigger } from '../react-viewerjs'
const ImageViewerList = () => {
  let sourceImageUrls = [
    "./imgs/image2.jpg",
    "./imgs/image3.jpg",
    "./imgs/logo.png"
  ]
  let thumbImageUrls = sourceImageUrls//In reality, the thumbnail and the original may not be the same, which are set to be equal, just for the sake of a simple demonstration
  return (
    <RViewer imageUrls={sourceImageUrls}>
      <ul>
        {thumbImageUrls.map((pic, index) => {
          return (
            <li  key={index} style={{marginBottom:"20PX"}}>
              <span>image {index+1}</span>
              {/*By default, the index value is 0,So it is necessary to set the index prop*/}
              <RViewerTrigger index={index}>
                <img src={pic} style={{width:"50px",verticalAlign:"middle"}}  />
              </RViewerTrigger>
            </li>
          )
        })
        }
      </ul>
    </RViewer>
  )
};
export default ImageViewerList