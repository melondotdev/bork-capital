import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import borkLogo from '/assets/bork-transparent.png';

export function Hero() {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const particles = document.querySelectorAll('.particle') as NodeListOf<HTMLDivElement>;
      particles.forEach((particle) => {
        const speed = parseFloat(particle.dataset.speed || '1');
        const yPos = window.scrollY * speed * 0.1;
        particle.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src={borkLogo} 
              alt="Bork Capital Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold text-gray-900">Bork Capital</h1>
          </div>
          <a
            href="https://x.com/borkinstitute"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </header>

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-gray-50 pt-16">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full bg-blue-100/30"
              data-speed={Math.random() * 2 + 0.5}
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <div className="inline-block animate-fade-in-up">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
                Betting on Communities &amp; Supporting the Future
              </span>
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-8 animate-fade-in-up animation-delay-150">
              Backing <span className="relative">
                <span className="relative z-10 text-blue-600">Communities</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -skew-x-12" />
              </span>{' '}
              Because <span className="text-blue-600">WAGMI</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
              At Bork Capital, we believe in the unstoppable power of communities. Our mission is to build robust tools that support grassroots innovation and ensure tokens stay in the treasury—fueling long-term growth. WAGMI – we’re all in, together.
            </p>
            
            <div className="flex justify-center gap-6 mb-16 animate-fade-in-up animation-delay-450">
              <button
                onClick={scrollToFeatures}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all transform hover:-translate-y-2 hover:shadow-lg"
              >
                Learn More
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="https://x.com/borkinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-600 hover:text-blue-600 transition-all transform hover:-translate-y-2"
              >
                Follow for Updates
                <FaXTwitter size={20} className="transition-transform group-hover:scale-110" />
              </a>
            </div>

            <button
              onClick={scrollToFeatures}
              className="animate-bounce hover:text-blue-600 transition-colors"
              aria-label="Scroll to features section"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
      <div ref={featuresRef} />
    </>
  );
}
