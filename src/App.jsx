import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Certifications from './components/Certifications/Certifications';
import Projects from './components/Projects/Projects';
import Research from './components/Research/Research';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <br/> */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
