import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-5xl" ref={ref}>
          <div className="reveal active inline-flex items-center space-x-3 mb-10">
            <span className="w-8 h-px bg-black/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
              Silicon to Software
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.95] mb-12 reveal active"
            style={{ transitionDelay: '0.1s', fontFamily: 'var(--font-display)' }}
          >
            SoC-first product engineering. Built end to end.
          </h1>

          <div className="grid md:grid-cols-12 gap-8 reveal active" style={{ transitionDelay: '0.2s' }}>
            <div className="md:col-span-7">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-500 leading-relaxed">
                In partnership with global chip manufacturers, we deliver full-stack hardware and
                software development for market-leading B2C products and enterprise B2B solutions.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 mt-16 reveal active"
            style={{ transitionDelay: '0.3s' }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-premium inline-flex items-center justify-center px-12 py-6 bg-black text-white rounded-full font-bold text-[11px] uppercase tracking-[0.2em]"
            >
              Talk to Us
            </a>
            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#capabilities')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-12 py-6 border border-gray-200 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-gray-50 transition-colors"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute right-[-5%] bottom-[-5%] hidden lg:block opacity-[0.02] pointer-events-none"
        aria-hidden="true"
      >
        <svg width="1000" height="1000" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>
    </section>
  );
}
