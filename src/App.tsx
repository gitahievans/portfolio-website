import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Home from "./components/Home"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"

function App() {

  return (
    <main className="container min-h-screen pb-10 mx-auto max-w-full dark:bg-gray-950 font-ff-poppins">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
