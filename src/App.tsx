import { Outlet } from "react-router-dom"
import Home from "@/components/Home"

function App() {

  return (
    <main className='min-h-screen w-full flex flex-col'>
      <Home />
      <Outlet />
    </main>
  )
}

export default App
