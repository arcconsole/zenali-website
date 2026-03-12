import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const CAPABILITIES = [
  {
    num: '01',
    title: 'SoC-first Product Architecture',
    description: 'Optimizing system design around specific silicon capabilities for peak performance.',
  },
  {
    num: '02',
    title: 'Embedded Systems & Firmware',
    description: 'Low-level software that powers hardware with mathematical precision.',
  },
  {
    num: '03',
    title: 'Hardware Design & Bring-up',
    description: 'From schematic capture to first-boot validation and stability testing.',
  },
  {
    num: '04',
    title: 'Board Support Packages & Drivers',
    description: 'Custom OS integration and peripheral enablement for complex platforms.',
  },
  {
    num: '05',
    title: 'System Software & Performance',
    description: 'Tuning for maximum throughput and industry-leading power efficiency.',
  },
  {
    num: '06',
    title: 'Productization & Manufacturing',
    description: 'Design for excellence and mass production readiness at global scale.',
  },
  {
    num: '07',
    title: 'B2B Solution Engineering',
    description: 'Customized enterprise platforms and reference designs for vertical markets.',
  },
  {
    num: '08',
    title: 'Validation, QA & Compliance',
    description: 'Rigorous testing protocols to meet global industry and safety standards.',
  },
];

export default function Capabilities() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useInView(headerRef);
  useInView(gridRef);

  return (
    <section id="capabilities" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 md:mb-32 reveal" ref={headerRef}>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-10">
            Expertise
          </h2>
          <p
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Core Engineering Capabilities
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 reveal"
        >
          {CAPABILITIES.map((cap) => (
            <article key={cap.num} className="capability-card p-10 md:p-12 bg-white">
              <div className="text-[10px] font-bold text-gray-200 mb-12">{cap.num}</div>
              <h3
                className="text-lg md:text-xl font-semibold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {cap.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
