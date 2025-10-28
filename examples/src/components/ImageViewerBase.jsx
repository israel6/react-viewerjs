import React, { useEffect } from "react"
import { RViewer, RViewerTrigger } from '../react-viewerjs'

// Componente para forzar estilos con JavaScript
const ForceStyles = () => {
  useEffect(() => {
    const forceStyles = () => {
      const buttons = document.querySelectorAll('.viewer-toolbar li');
      buttons.forEach(button => {
        // FORZAR transparencia completa con cssText para sobrescribir TODO
        button.style.cssText = `
          background: transparent !important;
          background-color: transparent !important;
          background-image: none !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          text-shadow: none !important;
          outline: none !important;
          width: 40px !important;
          height: 40px !important;
          margin: 4px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: relative !important;
          cursor: pointer !important;
          transition: none !important;
          opacity: 1 !important;
          visibility: visible !important;
        `;
        
        // Eliminar TODOS los pseudo-elementos
        const style = document.createElement('style');
        style.textContent = `
          .viewer-toolbar li::before,
          .viewer-toolbar li::after {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            width: 0 !important;
            height: 0 !important;
            content: none !important;
            background: transparent !important;
            background-color: transparent !important;
            background-image: none !important;
            border: none !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
        `;
        document.head.appendChild(style);
        
        // Solo cambiar el contenido si no tiene nuestro icono personalizado
        if (!button.querySelector('.custom-icon')) {
          // Determinar qué icono mostrar según la clase
          let icon = '';
          if (button.classList.contains('viewer-zoom-in')) icon = '+';
          else if (button.classList.contains('viewer-zoom-out')) icon = '−';
          else if (button.classList.contains('viewer-one-to-one')) icon = '1:1';
          else if (button.classList.contains('viewer-reset')) icon = '↻';
          else if (button.classList.contains('viewer-prev')) icon = '←'; // Flecha izquierda clara para retroceder
          else if (button.classList.contains('viewer-play')) icon = '⛶'; // Icono pantalla completa más claro
          else if (button.classList.contains('viewer-next')) icon = '→'; // Flecha derecha clara para siguiente
          else if (button.classList.contains('viewer-rotate-left')) icon = '↶';
          else if (button.classList.contains('viewer-rotate-right')) icon = '↷';
          else if (button.classList.contains('viewer-flip-horizontal')) icon = '↔';
          else if (button.classList.contains('viewer-flip-vertical')) icon = '↕';
          
          // Crear span con el icono
          const iconSpan = document.createElement('span');
          iconSpan.textContent = icon;
          iconSpan.className = 'custom-icon';
          iconSpan.style.cssText = `
            color: white !important;
            font-size: 20px !important;
            font-weight: bold !important;
            text-shadow: none !important;
            display: block !important;
            text-align: center !important;
            line-height: 40px !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            background: transparent !important;
            background-color: transparent !important;
            pointer-events: none !important;
            z-index: 10 !important;
          `;
          
          button.appendChild(iconSpan);
        }
      });
    };

    // Aplicar estilos inmediatamente
    forceStyles();
    
    // Re-aplicar cada 3 segundos para no interferir con la funcionalidad
    const interval = setInterval(forceStyles, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return null;
};

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
        <button style={{
          padding: '12px 24px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}>one image preview</button>
      </RViewerTrigger>
    </RViewer>
  )
}

const MultiImagePreview = () => {
  let sourceUrl = ["./imgs/image2.jpg","./imgs/image3.jpg","./imgs/logo.png"]
         let options = {
           toolbar: {
             zoomIn: true,
             zoomOut: true,
             oneToOne: true,
             reset: true,
             prev: true,
             play: true,
             next: true,
             rotateLeft: true,
             rotateRight: true,
             flipHorizontal: true,
             flipVertical: true,
             fullscreen: false,
             close: false
           }
         }
  return (
    <RViewer options={options} imageUrls={sourceUrl}>
      <RViewerTrigger>
        <button style={{
          padding: '12px 24px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}>Múltiples imágenes con todos los controles</button>
      </RViewerTrigger>
    </RViewer>
  )
}

const ImageViewerBase = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center'
    }}>
      <ForceStyles />
      <OneImagePreview />
      <MultiImagePreview />
    </div>
  )
};

export default ImageViewerBase