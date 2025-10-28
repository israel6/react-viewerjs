# react-viewerjs

[Ver README en Inglés](README-en.md)

Vista previa de imágenes; Envoltura de React para la biblioteca [viewerjs](https://github.com/fengyuanchen/viewerjs)


## Instalación

npm i react-viewerjs

## API

### Parámetros de configuración del componente RViewer

| Parámetro   | Descripción | Tipo         | Valor por defecto | Requerido |
| ----------- | ----------- | ------------ | ----------------- | ---------- |
| imageUrls   | URL de una imagen para vista previa (usando cadena) o colección de URLs de imágenes para vista previa (usando arreglo) | string\|array | undefined | Sí |
| options     | Configuración de vista previa (ver [viewerjs options](https://github.com/fengyuanchen/viewerjs#options)) | object | undefined | No |

### Descripción del componente RViewerTrigger

Este componente tiene solo un elemento hijo, usado para activar la vista previa de imágenes

| Parámetro  | Descripción | Tipo  | Valor por defecto | Requerido |
| ---------- | ----------- | ----- | ----------------- | ---------- |
| index      | En la colección de imágenes, selecciona la imagen en el índice para vista previa, por defecto 0, muestra la primera | number | 0 | No |


- #### Básico
````jsx
import React from "react"
import { RViewer, RViewerTrigger } from '../react-viewerjs'
const OneImagePreview = () => {
  let sourceUrl = "./imgs/1.jpg"
  let options={
    toolbar: {//Para una sola imagen, ocultar los botones prev y next en la barra de herramientas
      prev: false,
      next: false
    }
  }
  return (
    <RViewer options={options} imageUrls={sourceUrl}>
      <RViewerTrigger>
        <button>vista previa de una imagen</button>
      </RViewerTrigger>
    </RViewer>
  )
}
const MultiImagePreview = () => {
  let sourceUrl = ["./imgs/1.jpg","./imgs/2.jpg","./imgs/3.jpg","./imgs/4.jpg","./imgs/5.jpg"]
  return (
    <RViewer imageUrls={sourceUrl}>
      <RViewerTrigger>
        <button>Vista previa de múltiples imágenes</button>
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
ReactDOM.render(<BaseDemoComponent />, document.getElementById('root'));
````

- #### Lista
````jsx
import React from "react"
import { RViewer, RViewerTrigger } from '../react-viewerjs'
const ListDemoComponent = () => {
  let sourceImageUrls = [
    "./imgs/1.jpg",
    "./imgs/2.jpg",
    "./imgs/3.jpg",
    "./imgs/4.jpg",
    "./imgs/5.jpg"
  ]
  let thumbImageUrls = sourceImageUrls//Las miniaturas y las imágenes originales son las mismas, solo para demostración
  return (
    <RViewer imageUrls={sourceImageUrls}>
      <ul>
        {thumbImageUrls.map((pic, index) => {
          return (
            <li  key={index} style={{marginBottom:"20PX"}}>
              <span>imagen {index+1}</span>
              {/*Aquí se necesita establecer el valor index para informar cuál imagen mostrar al activar la vista previa*/}
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
ReactDOM.render(<ListDemoComponent />, document.getElementById('root'));
````
## Instrucciones rápidas (español) — ejecutar y compartir

Estos pasos facilitan ejecutar el ejemplo en otra máquina y evitar problemas de versión de Node.

### 1) Usar la versión recomendada de Node

Este repo incluye `.nvmrc` con la versión recomendada (14.21.3). Si usas nvm / nvm-windows:

```bash
nvm install
nvm use
```

Si no usas nvm, instala Node 14 LTS manualmente.

### 2) Instalar dependencias

Desde la raíz del proyecto puedes ejecutar el script de ayuda que instala las dependencias del ejemplo:

```bash
npm run bootstrap
```

O manualmente:

```bash
cd examples
npm install
```

### 3) Variables de entorno

Si necesitas integrar servicios externos (por ejemplo Mistral/Continue) crea un archivo `examples/.env` copiando `examples/.env.example` y poniendo tus claves:

```bash
MISTRAL_API_KEY=tu_valor_aqui
```

O configura la variable en Windows (temporal en sesión):

```powershell
$env:MISTRAL_API_KEY = "tu_valor"
```

Para persistir la variable en Windows:

```cmd
setx MISTRAL_API_KEY "tu_valor"
```

### 4) Ejecutar la demo

```bash
cd examples
npm start
```

### 5) Notas

- Añadimos `engines` en los `package.json` y `.nvmrc` para indicar la versión de Node recomendada.
- Si prefieres una solución totalmente reproducible, puedo preparar un `Dockerfile` para contenerizar la demo.

Si quieres que haga el `Dockerfile` o un script cross-platform para arrancar todo automáticamente, dime y lo preparo.

---
Preparado en máquina local: Administrador
Fecha: 2025-10-27
Nota: Este README fue actualizado en la máquina local antes de subir el proyecto al repositorio GitHub del usuario.
https://israel6.github.io/react-viewerjs/
