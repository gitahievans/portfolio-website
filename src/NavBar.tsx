import me from './assets/gitahi.jpg'
import { FaLinkedin, FaTwitter, FaSun, FaMoon, FaGear } from 'react-icons/fa';
import Hashnode from './assets/hashnode.svg';
import { useState, useEffect } from "react";

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

    <nav className="bg-white border-gray-200 dark:bg-gray-900 transition-all duration-1000">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-2 flex-1">
          <img src={me} className="h-10 rounded-full" alt="Evans" />
          <span className="self-center text-base md:text-lg font-semibold whitespace-nowrap dark:text-white">Evans Gitahi</span>
        </div>

        <div className='hidden md:flex items-center gap-8 flex-1 justify-between'>
          <div className="items-center justify-between hidden md:flex md:w-auto w-3/5" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Evans</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-row-reverse items-center w-2/5 justify-between'>
            <div className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-xl border border-transparent hover:border-gray-800 hover:bg-slate-300 dark:text-white dark:hover:text-gray-900 transition-all duration-500" onClick={handleThemeToggle}>
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
              <span>{theme === 'dark' ? 'Dark' : "Light"}</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='hover:bg-slate-300 border-2 border-transparent hover:border-2 hover:border-gray-600 p-3 rounded-full transition-all duration-500 ease-in-out cursor-pointer dark:text-slate-300 dark:hover:bg-gray-400 dark:hover:text-slate-950'>
                <FaLinkedin />
              </div>
              <div className='hover:bg-slate-300 border-2 border-transparent hover:border-2 hover:border-gray-600 p-3 rounded-full transition-all duration-500 ease-in-out cursor-pointer dark:text-slate-300 dark:hover:bg-gray-400 dark:hover:text-slate-950'>
                <FaTwitter />
              </div>
              <div className='hover:bg-slate-300 border-2 border-transparent hover:border-2 hover:border-gray-600 p-3 rounded-full transition-all duration-500 ease-in-out cursor-pointer dark:text-slate-300 dark:hover:bg-gray-800 dark:hover:text-white'>
                <img src={Hashnode} alt="hashnode" className='h-4' />
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2 cursor-pointer px-2 py-1 rounded-xl border border-transparent hover:border-gray-800 hover:bg-slate-300 dark:text-white dark:hover:text-gray-900 transition-all duration-500" onClick={handleThemeToggle}>
          {theme === 'dark' ? <FaMoon /> : <FaSun />}
          <span>{theme === 'dark' ? 'Dark' : "Light"}</span>
        </div>

        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-950 dark:border-gray-600 md:hidden">
          <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Evans</span>
            </button>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Projects</span>
            </button>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Skills</span>
            </button>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default NavBar;