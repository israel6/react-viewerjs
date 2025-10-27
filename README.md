# react-viewerjs

[View README in English](README-en.md)

图片预览;对[viewerjs](https://github.com/fengyuanchen/viewerjs)库的react封装


## 安装

npm i react-viewerjs

## API

### RViewer组件配置参数

| 参数        | 说明     | 类型           | 默认值  | 是否必须 |
| --------- | ------ | ------------ | ---- | ---- |
| imageUrls | 单张图片预览地址（使用字符串）或者多张图片预览地址集合（使用数组） | string\|array | undefined    | 是 |
| options | 预览配置参见（[viewerjs options](https://github.com/fengyuanchen/viewerjs#options)） | object | undefined    | 否 |

### RViewerTrigger组件说明

该组件只有一个元素，用于触发图片预览

| 参数        | 说明     | 类型           | 默认值 | 是否必须 |
| --------- | ------ | ------------ | ---- | ---- |
| index | 预览触发显示索引为index图片，默认为0，显示第一张 | number | 0    | 否 |


- #### 基础
````jsx
import React from "react"
import { RViewer, RViewerTrigger } from '../react-viewerjs'
const OneImagePreview = () => {
  let sourceUrl = "./imgs/1.jpg"
  let options={
    toolbar: {//单张图片预览不要pre和next底部按钮，隐藏它
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
  let sourceUrl = ["./imgs/1.jpg","./imgs/2.jpg","./imgs/3.jpg","./imgs/4.jpg","./imgs/5.jpg"]
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
ReactDOM.render(<BaseDemoComponent />, document.getElementById('root'));
````

- #### 列表
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
  let thumbImageUrls = sourceImageUrls//小图和原图一样，只是为了演示方便
  return (
    <RViewer imageUrls={sourceImageUrls}>
      <ul>
        {thumbImageUrls.map((pic, index) => {
          return (
            <li  key={index} style={{marginBottom:"20PX"}}>
              <span>image {index+1}</span>
              {/*这里需要设置index值，告知触发图片预览该显示哪张图片*/}
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

1) Usar la versión recomendada de Node

- Este repo incluye `.nvmrc` con la versión recomendada (14.21.3). Si usas nvm / nvm-windows:

  nvm install
  nvm use

  Si no usas nvm, instala Node 14 LTS manualmente.

2) Instalar dependencias

Desde la raíz del proyecto puedes ejecutar el script de ayuda que instala las dependencias del ejemplo:

  npm run bootstrap

O manualmente:

  cd examples
  npm install

3) Variables de entorno

Si necesitas integrar servicios externos (por ejemplo Mistral/Continue) crea un archivo `examples/.env` copiando `examples/.env.example` y poniendo tus claves:

  MISTRAL_API_KEY=tu_valor_aqui

O configura la variable en Windows (temporal en sesión):

  $env:MISTRAL_API_KEY = "tu_valor"

Para persistir la variable en Windows:

  setx MISTRAL_API_KEY "tu_valor"

4) Ejecutar la demo

  cd examples
  npm start

5) Notas

- Añadimos `engines` en los `package.json` y `.nvmrc` para indicar la versión de Node recomendada.
- Si prefieres una solución totalmente reproducible, puedo preparar un `Dockerfile` para contenerizar la demo.

Si quieres que haga el `Dockerfile` o un script cross-platform para arrancar todo automáticamente, dime y lo preparo.

---
Preparado en máquina local: Administrador
Fecha: 2025-10-27
Nota: Este README fue actualizado en la máquina local antes de subir el proyecto al repositorio GitHub del usuario.
https://xiabingwu.github.io/react-viewerjs/#/list
