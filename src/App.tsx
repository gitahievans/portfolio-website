import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Home from "./components/Home"

function App() {

  return (
    <main className="container min-h-screen pb-10 mx-auto max-w-full bg-slate-50 dark:bg-gray-950 font-ff-poppins">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </main>
  )
}

export default App
