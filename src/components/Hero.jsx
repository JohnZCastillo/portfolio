export default function Hero() {
  return (
    <section className="scrollHero grid grid-cols-1 md:grid-cols-2 ">
      <div  className="order-2 md:order-1 flex items-center justify-center">
        <div className="px-3 py-4 text-center md:text-left">
          <span className="text-xl">I'm John</span>
          <h1 className="family-poppins text-5xl font-bold">Web Developer</h1>
          <div className="flex items-center justify-center md:justify-start">
          <img src="./bxl-github.svg"/>
          <img src="./bxl-gmail.svg"/>
          <img src="./bxl-linkedin.svg"/>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 flex items-end justify-center">
        <img className="mx-auto w-auto" style={{height: 500}} src="id.png" />
      </div>
    </section>
  );
}
