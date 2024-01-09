import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageData from './components/DtaCompornrts.jsx'
import AppClass from './AppClass.jsx'

const images=ImageData()
console.log(images)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App imageprop={images}/> */}
    <AppClass imageprop={images}/>
  </React.StrictMode>,
)
