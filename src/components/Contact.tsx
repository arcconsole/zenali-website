import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  useInView(leftRef);
  useInView(formRef);

  return (
    <section id="contact" className="section-padding grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 reveal" ref={leftRef}>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-10">
              Contact
            </h2>
            <h3
              className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-16 leading-[1] tracking-tighter"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let's discuss your next product.
            </h3>

            <address className="space-y-16 not-italic">
              <div>
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em] font-bold mb-6">
                  General Inquiries
                </p>
                <a
                  href="mailto:admin@zenalitech.com"
                  className="text-2xl md:text-3xl font-medium hover:text-gray-400 transition-colors tracking-tight"
                >
                  admin@zenalitech.com
                </a>
              </div>
              <div>
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em] font-bold mb-6">
                  Careers
                </p>
                <a
                  href="mailto:careers@zenalitech.com"
                  className="text-2xl md:text-3xl font-medium hover:text-gray-400 transition-colors tracking-tight"
                >
                  careers@zenalitech.com
                </a>
              </div>
            </address>
          </div>

          <div
            ref={formRef}
            className="lg:col-span-6 lg:col-start-7 bg-white p-10 sm:p-12 md:p-20 border border-gray-100 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.04)] reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            <form
              action="mailto:admin@zenalitech.com"
              method="GET"
              encType="text/plain"
              className="space-y-12"
            >
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label
                    htmlFor="name"
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="subject"
                    required
                    autoComplete="name"
                    className="w-full px-0 py-4 bg-transparent input-premium outline-none transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <label
                    htmlFor="company"
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    autoComplete="organization"
                    className="w-full px-0 py-4 bg-transparent input-premium outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="email"
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  autoComplete="email"
                  className="w-full px-0 py-4 bg-transparent input-premium outline-none transition-all"
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="message"
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={4}
                  required
                  className="w-full px-0 py-4 bg-transparent input-premium outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-black text-white rounded-full font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-gray-900 transition-all cursor-pointer"
              >
                Send Message
              </button>
              <p className="text-[9px] text-gray-400 text-center uppercase tracking-[0.2em]">
                No spam. We'll respond within business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
