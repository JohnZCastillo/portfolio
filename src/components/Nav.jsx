export default function Nav() {
  return (
    <nav className="bg-[#0e0d11]/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-[#f8b659] tracking-tight">
          John<span className="text-white">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Projects", "Experience"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="nav-link-animated text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle — simple, no JS needed for basic version */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-48 bg-[#19191c] border border-white/10 rounded-xl shadow-xl overflow-hidden">
              {["Home", "About", "Projects", "Experience"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
