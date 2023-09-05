import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home';
import Produtos from './routes/Produtos';
import Error from './routes/Error';
import EditarProdutos from './routes/EditarProduto';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    errorElement: <Error />,
    children: [
      {path: '/', element: <Home />},
      {path: '/produtos', element: <Produtos />},
      {path: '/produtos/editar/:id', element: <EditarProdutos />},
    ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)