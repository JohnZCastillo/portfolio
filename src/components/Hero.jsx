export default function Hero() {
  return (
    <section className="scrollHero grid grid-cols-1 md:grid-cols-2">
      <div className="order-2 md:order-1 flex items-center justify-center">
        <div>
          <span>I'm John</span>
          <h1>Web Developer</h1>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img src="id.png" />
      </div>
    </section>
  );
}
