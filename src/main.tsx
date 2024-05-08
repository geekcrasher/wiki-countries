import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContext.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/index.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<Home />} />
      <Route path='country/:name' element={<></>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>,
)
