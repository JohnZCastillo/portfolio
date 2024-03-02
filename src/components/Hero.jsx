export default function Hero() {
  return (
    <section className="bg-[#0e0d11] scrollHero grid grid-cols-1 md:grid-cols-2 ">
      <div className="order-2 md:order-1 flex items-center justify-center">
        <div className="px-3 py-4 text-center md:text-left">
          <span className="text-xl">I'm John</span>
          <h1 className="family-poppins text-5xl md:text-6xl font-bold text-[#f8b659]">
            Web Developer
          </h1>
          <div className="flex items-center justify-center md:justify-start">
            <a href="https://github.com/JohnZCastillo" target="_blank">
              <img src="./bxl-github.svg" />
            </a>
            <a href="mailto:johnzunigacastillo@gmail.com">
              <img src="./bxl-gmail.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-castillo-b3b015249/"
              target="_blank"
            >
              <img src="./bxl-linkedin.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 flex items-end justify-center">
        <img
          className="mx-auto w-auto"
          style={{ height: 500 }}
          src="john1.png"
        />
      </div>
    </section>
  );
}
