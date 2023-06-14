import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'

// Estamos dejando que toda la aplicación acceda al contexto que creamos.
ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
