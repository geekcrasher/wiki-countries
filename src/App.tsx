import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <main className='min-h-screen w-full flex flex-col'>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
