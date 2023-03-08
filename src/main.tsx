import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Carrinho from './pages/carrinho/Carrinho'
import CompraFinalizada from './pages/compraFinalizada/CompraFinalizada'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/carrinho',
    element: <Carrinho />,
  },
  {
    path: '/pedido-finalizado',
    element: <CompraFinalizada />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
