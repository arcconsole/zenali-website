import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const PILLARS = [
  {
    num: '01',
    title: 'Silicon Partnership',
    description:
      'Direct collaboration with global chip manufacturers to design systems that leverage the full potential of next-generation SoC architectures.',
  },
  {
    num: '02',
    title: 'System Optimization',
    description:
      'Deep integration of hardware and firmware to ensure maximum stability, performance, and industry-leading power efficiency.',
  },
  {
    num: '03',
    title: 'Market Readiness',
    description:
      'Transforming complex engineering into production-grade B2C and B2B solutions ready for global mass manufacturing.',
  },
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  useInView(leftRef);
  useInView(rightRef);

  return (
    <section id="about" className="section-padding border-y border-gray-100 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div ref={leftRef} className="reveal">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-10">
              The Vision
            </h2>
            <h3
              className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95] mb-12"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Engineering for the silicon era.
            </h3>
            <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed max-w-md">
              We don't just build products; we optimize them for the silicon they inhabit.
            </p>
          </div>

          <div ref={rightRef} className="reveal space-y-12" style={{ transitionDelay: '0.2s' }}>
            {PILLARS.map((pillar) => (
              <article key={pillar.num} className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[10px] font-bold px-2 py-1 bg-black text-white rounded">
                    {pillar.num}
                  </span>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em]">{pillar.title}</h4>
                </div>
                <p className="text-gray-500 leading-relaxed pl-14">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
