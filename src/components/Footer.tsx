export default function Footer() {
  return (
    <footer className="py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">
          &copy; {new Date().getFullYear()} Zenali Innovative Technologies.
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300"
        >
          <a
            href="mailto:admin@zenalitech.com"
            className="hover:text-black transition-colors"
          >
            Contact
          </a>
          <a
            href="mailto:careers@zenalitech.com"
            className="hover:text-black transition-colors"
          >
            Careers
          </a>
        </nav>
      </div>
    </footer>
  );
}
