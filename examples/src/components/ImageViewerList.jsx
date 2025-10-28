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
      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {thumbImageUrls.map((pic, index) => {
          return (
            <li key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '15px',
              transition: 'transform 0.3s ease'
            }}>
              <RViewerTrigger index={index}>
                <img 
                  src={pic} 
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    cursor: "pointer",
                    marginBottom: "10px"
                  }}
                  alt={`Imagen ${index + 1}`}
                />
              </RViewerTrigger>
              <span style={{
                fontSize: '14px',
                color: '#333'
              }}>Imagen {index + 1}</span>
            </li>
          )
        })}
      </ul>
    </RViewer>
  )
};
export default ImageViewerList