import AboutMe from "./components/AboutMe"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import ProjectSection from "./components/ProjectSection"

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <ProjectSection />
    </div>
  )
}

export default App