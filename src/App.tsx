import NavBar from "./components/NavBar"
import Projects from "./components/Projects"

function App() {

  return (
    <main className="container h-screen mx-auto max-w-full bg-slate-50 dark:bg-gradient-to-b from-gray-950 from-10% to-blue-950 to-90% font-ff-poppins">
      <NavBar />
      <Projects />
    </main>
  )
}

export default App
