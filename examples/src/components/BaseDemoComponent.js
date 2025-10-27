import React from "react"
import { RViewer, RViewerTrigger } from '../react-viewerjs'
const OneImagePreview = () => {
  let sourceUrl = "./imgs/image2.jpg"
  let options={
    toolbar: {//Since there is only one picture, let's hide "prev" and "next"
      prev: false,
      next: false
    }
  }
  return (
    <RViewer options={options} imageUrls={sourceUrl}>
      <RViewerTrigger>
        <button>one image preview</button>
      </RViewerTrigger>
    </RViewer>
  )
}
const MultiImagePreview = () => {
  let sourceUrl = ["./imgs/image2.jpg","./imgs/image3.jpg","./imgs/logo.png"]
  return (
    <RViewer imageUrls={sourceUrl}>
      <RViewerTrigger>
        <button>Multiple images preview</button>
      </RViewerTrigger>
    </RViewer>
  )
}
const BaseDemoComponent = () => {
  
  return (
    <div>
      <OneImagePreview />
      <MultiImagePreview />
    </div>
  )
};
export default BaseDemoComponent