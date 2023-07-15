import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    } [theme]
  }, [theme]);

  // const handleThemeToggle = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <div className="dark:bg-black h-screen">
      <h1 className="text-3xl text-indigo-800">Hello Evans</h1>
    </div>
  )
}

export default App
