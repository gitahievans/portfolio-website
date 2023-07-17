import me from '../assets/gitahi.jpg'
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from "react";
import MobileNav from './MobileNav';
// import LinkedIn from '../assets/linkedin-logo.png'
// import Twitter from '../assets/twitter.png';
// import Github from '../assets/github.png';
// import { IconStyles } from '../../Constants/constants';

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
    <nav className="lg:max-w-[85%] mx-auto border-gray-200 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-2 flex-1">
          <img src={me} className="h-10 rounded-full" alt="Evans" />
        </div>

        <div className='hidden md:flex items-center gap-8 flex-1 justify-between'>
          <div className="items-center justify-between hidden md:flex md:w-auto w-3/5" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-lg">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">/Evans</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">/Projects</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">/Skills</a>
              </li>
            </ul>
          </div>
          <div className='flex'>
            <div className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-xl border border-transparent hover:border-gray-800 hover:bg-slate-300 dark:text-white dark:hover:text-gray-900 transition-all duration-500" onClick={handleThemeToggle}>
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
              <span>{theme === 'dark' ? 'Dark' : "Light"}</span>
            </div>
            {/* <div className='flex items-center gap-2'>
              <img src={LinkedIn} alt='linkedin' className={IconStyles} />
              <img src={Twitter} alt='twitter' className={IconStyles} />
              <img src={Github} alt='github' className={IconStyles} />
            </div> */}
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