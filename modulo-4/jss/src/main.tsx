import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Button } from './components/Button'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Aplicar estilos a App con JSS */}
    {/* <App /> */}

    {/* Playground para aplicar estilos en React luego pasar a JSS */}
    <Button>Click me</Button>
    
  </React.StrictMode>,
)
