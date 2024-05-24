import { useTheme } from "@/context/ThemeContext";
import { Button } from "../ui/button";
import { Earth, MoonStar, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const { theme, handleChangeTheme } = useTheme()

  const navigate = useNavigate()

  const navigateToHomePage = (): void => {
    navigate('/')
  }


  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between px-2 sm:px-6 h-[5.5rem] w-full shadow-sm bg-white dark:bg-[#2b3945]">
        <Button onClick={navigateToHomePage} className="flex items-center gap-4 bg-transparent text-base text-[#333] dark:text-slate-50 sm:text-lg font-medium">
          <span><Earth color="#f56565" size={24} /></span>
          Wiki Countries
        </Button>
        <Button onClick={handleChangeTheme} className="bg-transparent" >
          {theme === 'dark' ?
            <Sun size={20} /> :
            <MoonStar size={20} />
          }
        </Button>
      </nav>
    </>
  );
}

export default Navbar;