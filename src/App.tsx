import Navbar from './components/Navbar';
import Hero from './components/Hero';   // We'll do Hero next
import ServicesSection from "./components/ServicesSection";
import WhyHireMe from "./components/WhyHireMe";
import './index.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyHireMe />
      {/* Other sections will come later */}
    </>
  );
}

export default App;