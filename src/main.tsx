import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContext.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/index.tsx'
import { CountriesContextProvider } from './context/CountriesContext.tsx'
import Country from './pages/Country/index.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<Home />} />
      <Route path='country/:name' element={<Country />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CountriesContextProvider>
        <RouterProvider router={router} />
      </CountriesContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
