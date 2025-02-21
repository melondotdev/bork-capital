import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <Features />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;