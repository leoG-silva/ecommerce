import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import Pokemon from './componentes/Pokemon'
import PaginaInicial from './telas/PaginaInicial'

const router = createBrowserRouter([
  { path: "/pokemon", element: <Pokemon /> },
  { path: "/", element: <PaginaInicial /> },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
