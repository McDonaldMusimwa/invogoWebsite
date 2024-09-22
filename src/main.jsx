import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Services from '../pages/Services.jsx'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <div>Not Found</div>,
  children:[
    {
      path: "/services",
      element: <Services />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
