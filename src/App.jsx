import websiteContent from "./data";
function App() {
  const latest = [
    "/latest/one.jpg",
    "/latest/two.jpg",
    "/latest/three.jpg",
    "/latest/four.jpg",
  ];
  return (
    <>
      <section id="hero" className="relative w-full h-[85vh]">
        <img
          src="/hero-blur.jpg"
          className="w-full object-cover blur-xs h-full"
        />
        <div className="absolute top-[20%] right-0 max-lg:top-70 w-[60%] h-[60%]">
          <img
            src="/flower-hero.jpg"
            className="object-cover rounded-tl-full rounded-bl-full w-full h-full shadow-lg relative"
          />
        </div>
        <div className="absolute max-lg:h-90 top-[20%] max-lg:top-10 left-[10%] max-h-[60%] aspect-square overflow-hidden rounded-full shadow-lg">
          <img
            src="/hero-secondary.jpg"
            className="object-cover w-full h-full relative"
          />
        </div>
        <div className="absolute max-lg:top-[80%] max-lg:left-[25%] top-[50%] left-[50%] -translate-[50%] max-md:-translate-[35%]  text-right">
          <h1 className="text-6xl max-sm:text-2xl">
            {websiteContent.hero.title}
          </h1>
          <h2 className="text-xl max-sm:text-sm mt-4 tracking-wide">
            {websiteContent.hero.subtitle}
          </h2>
          <button className="bg-foreground/90 text-background rounded px-2 py-1 shadow-lg mt-8 text-lg tracking-wider">
            Place Order
          </button>
        </div>
      </section>
      <section className="py-12">
        <h3 className="text-3xl text-center">Latest Creation</h3>
        <div className="flex flex-wrap max-lg:px-8 justify-center px-40 gap-8 mt-6">
          {latest.map((image) => (
            <div className="w-80 aspect-[3/5] rounded-lg shadow-lg overflow-hidden">
              <img
                src={image}
                className="hover:scale-110 duration-300 object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-12">
        <h3 className="text-3xl text-center">
          {websiteContent.sections.services.title}
        </h3>
        <div className="flex flex-wrap max-lg:px-8 justify-center px-40 gap-8 mt-6">
          {websiteContent.sections.services.items.map((content) => (
            <div className="group relative w-80  rounded-lg shadow-lg overflow-hidden">
              <div className="absolute w-full h-full to-20% bg-linear-to-t from-black/60 group-hover:from-black/80 group-hover:to-60% to-transparent"></div>
              <div className="absolute bottom-0 translate-y-12 group-hover:translate-y-0 duration-200">
                <span className="pl-3">{content.icon}</span>
                <span className="px-3 text-xl tracking-wide text-lg">
                  {content.title}
                </span>
                <p className="px-3 text-secondary tracking-wider">
                  {content.description}
                </p>
              </div>

              <img
                src={content.image || "https://placehold.co/450x250"}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 flex flex-wrap  max-lg:px-6 px-70 justify-center gap-8">
        <div>
          <h3 className="text-3xl text-center">
            {websiteContent.sections.order.title}
          </h3>
          <div className="max-w-150 bg-background-secondary mx-auto bg mt-6 px-8 py-4 rounded-lg shadow-md">
            <ul className="text-xl space-y-4">
              {websiteContent.sections.order.steps.map((step) => (
                <li>
                  <span className="mr-3">{step.icon}</span>
                  <span className="tracking-wide">{step.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-3xl text-center">
            {websiteContent.sections.latest.title}
          </h3>
          <div className="max-w-150 bg-background-secondary mx-auto bg mt-6 px-8 py-4 rounded-lg shadow-md">
            <ul className="text-xl space-y-4">
              {websiteContent.sections.latest.items.map((item) => (
                <li>
                  <span className="mr-3">{item.icon}</span>
                  <span className="tracking-wide">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <footer className="px-8 py-12">
        <h3 className="text-xl">Follow us on insta</h3>
       
        <span>@petalcraft</span>
      </footer>
    </>
  );
}

export default App;
