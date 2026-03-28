export default function Bottom() {
  return (
    <footer className="bg-[#0e0d11] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-bold text-[#f8b659]">
          John<span className="text-white">.</span>
        </span>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} John Castillo. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/JohnZCastillo" target="_blank" aria-label="GitHub"
            className="text-gray-500 hover:text-white transition-colors">
            <img src="./bxl-github.svg" className="w-5 h-5" alt="GitHub" />
          </a>
          <a href="mailto:johnzunigacastillo@gmail.com" aria-label="Email"
            className="text-gray-500 hover:text-white transition-colors">
            <img src="./bxl-gmail.svg" className="w-5 h-5" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/john-castillo-b3b015249/" target="_blank" aria-label="LinkedIn"
            className="text-gray-500 hover:text-white transition-colors">
            <img src="./bxl-linkedin.svg" className="w-5 h-5" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}
