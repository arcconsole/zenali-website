import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Solutions from './components/Solutions';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Solutions />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
