import NavBar from "./components/NavBar"
import Projects from "./components/Projects"

function App() {

  return (
    <main className="container h-screen mx-auto max-w-full bg-slate-50 dark:bg-gray-900 font-ff-poppins">
      <NavBar />
      <Projects />
    </main>
  )
}

export default App
