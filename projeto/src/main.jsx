import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { UsuarioProvider } from './contexts/usuarioContext.jsx'
import Rotas from './rotas.jsx'
import Cabecalho from './components/cabecalho.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UsuarioProvider>
        <Cabecalho />
        <Rotas />
      </UsuarioProvider>
    </BrowserRouter>
  </StrictMode>,
)
