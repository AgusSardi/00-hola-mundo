import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

// Importar componentes:
import {App} from './App.jsx'

import './index.css'


const root = createRoot(document.getElementById('root'))

root.render(
  <App/>
)