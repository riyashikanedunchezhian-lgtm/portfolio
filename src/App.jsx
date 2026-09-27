import { ThemeProvider } from './contexts/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Affiliations from './components/Affiliations';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Affiliations />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
