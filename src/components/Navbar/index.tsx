import { useTheme } from "@/context/ThemeContext";
import { Button } from "../ui/button";
import { Earth, MoonStar, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const { darkMode, handleChangeTheme } = useTheme()

  const navigate = useNavigate()

  const navigateToHomePage = (): void => {
    navigate('/')
  }


  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between px-6 h-[5.5rem] w-full shadow-sm bg-white">
        <Button onClick={navigateToHomePage} className="flex items-center gap-2 bg-transparent text-base text-[#333] sm:text-lg font-medium">
          <span><Earth color="#f56565" size={24} /></span>
          Wiki Countries
        </Button>
        <Button onClick={handleChangeTheme} className="bg-transparent" >
          {darkMode ?
            <MoonStar size={20} /> :
            <Sun size={20} />
          }
        </Button>
      </nav>
    </>
  );
}

export default Navbar;