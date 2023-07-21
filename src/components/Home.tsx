import Skills from './Skills'
import Projects from './Projects'
import Hero from './Hero'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home