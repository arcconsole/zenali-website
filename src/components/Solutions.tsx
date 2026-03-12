import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function Solutions() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useInView(headerRef);
  useInView(gridRef);

  return (
    <section id="solutions" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 md:mb-32 reveal" ref={headerRef}>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-700 mb-10">
            Solutions
          </h2>
          <p
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Dual-Market Focus
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 reveal"
        >
          <article className="p-12 sm:p-16 md:p-24 bg-black">
            <h3
              className="text-3xl md:text-4xl font-semibold mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              B2C Products
            </h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-16 max-w-md">
              Consumer-ready devices built on SoC platforms: optimized for performance, reliability,
              and cost. We handle the complexity of modern consumer electronics from concept to
              shelf.
            </p>
            <div className="h-px w-16 bg-white/20" />
          </article>

          <article className="p-12 sm:p-16 md:p-24 bg-black">
            <h3
              className="text-3xl md:text-4xl font-semibold mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              B2B Solutions
            </h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-16 max-w-md">
              Custom engineering for clients: from reference designs to deployable systems. We
              provide the technical foundation for enterprise-grade hardware solutions.
            </p>
            <div className="h-px w-16 bg-white/20" />
          </article>
        </div>
      </div>
    </section>
  );
}
