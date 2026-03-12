import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ROLES = ['Embedded/Firmware', 'Hardware Design', 'Systems/Platform Engineering'];

export default function Careers() {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref);

  return (
    <section id="careers" className="section-padding border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-5xl" ref={ref}>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-10 reveal">
            Careers
          </h2>
          <h3
            className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-12 tracking-tight reveal"
            style={{ transitionDelay: '0.1s', fontFamily: 'var(--font-display)' }}
          >
            Join the Builders
          </h3>
          <p
            className="text-xl sm:text-2xl text-gray-500 mb-16 leading-relaxed reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            We're always looking for builders across embedded, hardware, and systems engineering. If
            you thrive at the intersection of silicon and software, we want to hear from you.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-20 reveal"
            style={{ transitionDelay: '0.3s' }}
          >
            {ROLES.map((role) => (
              <span
                key={role}
                className="px-8 py-4 border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                {role}
              </span>
            ))}
          </div>

          <a
            href="mailto:careers@zenalitech.com"
            className="reveal inline-flex items-center space-x-4 text-black font-bold text-sm uppercase tracking-[0.3em] group"
            style={{ transitionDelay: '0.4s' }}
          >
            <span>careers@zenalitech.com</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
