export default function Hero() {

  return (
    <section className="scrollHero grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #f8b659 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Text side */}
      <div className="order-2 md:order-1 flex items-center justify-center relative z-10">
        <div className="px-6 py-8 text-center md:text-left max-w-lg">
          <span className="inline-block text-sm font-medium text-[#f8b659] bg-[#f8b659]/10 border border-[#f8b659]/20 rounded-full px-3 py-1 mb-4">
            Available for work
          </span>
          <p className="text-gray-400 text-lg mb-1">Hey, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
            John Castillo
          </h1>
          <div className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Web Developer</span>
          </div>
          <p className="text-gray-400 text-base mb-8 max-w-[45ch]">
            I build clean, performant web apps and love turning ideas into real products.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-[#f8b659] text-black font-semibold rounded-lg hover:bg-[#f8b659]/90 transition-colors text-sm"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-5 py-2.5 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 hover:bg-white/5 transition-colors text-sm"
            >
              About Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
            <a href="https://github.com/JohnZCastillo" target="_blank" aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors">
              <img src="./bxl-github.svg" className="w-6 h-6" alt="GitHub" />
            </a>
            <a href="mailto:johnzunigacastillo@gmail.com" aria-label="Email"
              className="text-gray-400 hover:text-white transition-colors">
              <img src="./bxl-gmail.svg" className="w-6 h-6" alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/john-castillo-b3b015249/" target="_blank" aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors">
              <img src="./bxl-linkedin.svg" className="w-6 h-6" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Image side */}
      <div className="order-1 md:order-2 flex items-end justify-center relative z-10">
        <div className="relative">
          {/* Gold glow under photo */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-48 bg-[#f8b659]/20 rounded-full blur-3xl" />
          {/* Side glow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-32 h-64 bg-[#f8b659]/10 rounded-full blur-2xl" />
          <img
            className="relative mx-auto w-auto drop-shadow-2xl"
            style={{
              height: 500,
              filter: 'drop-shadow(0 20px 40px rgba(248,182,89,0.15)) contrast(1.05) brightness(1.05)',
            }}
            src="john1.png"
            alt="John Castillo"
          />
          {/* Bottom fade blend */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0e0d11] to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-indicator text-gray-500 text-xs flex flex-col items-center gap-1">
        <span>scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
