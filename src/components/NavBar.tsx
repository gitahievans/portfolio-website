import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from "react";
import MobileNav from './MobileNav';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../../Constants/constants';

const NavBar = () => {
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    } [theme]
  }, [theme]);


  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="lg:max-w-[85%] mx-auto border-gray-200 dark:bg-gray-950 transition-all duration-500">
      <div className="w-full flex flex-wrap items-center justify-between p-4 ">
        <div className='hidden md:flex items-center gap-8 w-full justify-between '>
          <div className="items-center justify-between hidden md:flex md:w-auto ">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-lg">
              {
                NavLinks.map(nav => (
                  <li key={crypto.randomUUID()}>
                    <NavLink to={nav.to} className={({ isActive }) => isActive ? 'border-b-2 border-b-purple-600 px-3 lg:px-6 py-2 text-sm lg:text-lg dark:text-white  font-medium transition-all duration-500 ' : 'px-3 lg:px-6 py-2 text-sm lg:text-lg dark:text-white  font-medium hover:bg-gray-200 border-b-2 border-b-transparent rounded-3xl  transition-all duration-500'} >{nav.text}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='flex'>
            <div className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-xl border border-transparent hover:border-gray-800 hover:bg-slate-300 dark:text-white dark:hover:text-gray-900 transition-all duration-500" onClick={handleThemeToggle}>
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
              <span>{theme === 'dark' ? 'Dark' : "Light"}</span>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <div className="flex md:hidden items-center gap-2 cursor-pointer px-2 py-1 rounded-xl border border-transparent hover:border-gray-800 hover:bg-slate-300 dark:text-white dark:hover:text-gray-900 transition-all duration-500" onClick={handleThemeToggle}>
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
            <span className='hidden md:block'>{theme === 'dark' ? 'Dark' : "Light"}</span>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;