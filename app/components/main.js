import Product from "./product";

const Main = () => {
  const products_hardware = [
    {
      heading: " We offer a variety of ball valves for controlling flow in industrial settings, available in all sizes. They're reliable and durable.",
      src: "ball valve.jpeg",
    },
    {
      heading: "We deal in multiple brands of bearings, including SKF, renowned for quality and longevity, suitable for various machinery. ",
      src: "bearings.jpeg",
    },
    {
      heading: "We offer bend pipes in all sizes and materials, including mild steel (MS), stainless steel (SS), and various quality grades.",
      src: "bend pipe.jpeg",
    },
    {
      heading: "We provide complete fire hydrant systems, including all necessary accessories like hydrant valves and hoses to nozzles and pumps",
      src: "fire_hydrant_system.jpg",
    },
    {
      heading: "We offer flanges in all sizes and materials, including mild steel (MS), stainless steel (SS), and various quality grades.",
      src: "flange.jpeg",
    },
    {
      heading: "We deal in multiple brands of grease, including SKF, renowned for quality and longevity, suitable for various machinery.",
      src: "grease.jpeg",
    },
    {
      heading: "We provide machine oils from top brands like Mobil, Shell, and Castrol, available in all viscosity grades.",
      src: "machine oils.jpeg",
    },
    {
      heading: "We offer pipes in all sizes and materials, including mild steel (MS), stainless steel (SS), and various quality grades",
      src: "ms pipe.jpeg",
    },
    {
      heading: " We offer a comprehensive range of sanitary fittings, including faucets, sinks, toilets, showers, and more",
      src: "fittings.jpeg",
    },
    {
      heading: "We offer a diverse range of V-belts in various sizes and qualities to cater to different industrial and automotive requirements.",
      src: "vbelt.jpeg",
    },
  ];
  const products_electronics = [
    {
      heading: "We provide control panels in all sizes, equipped with comprehensive components to meet various industrial needs. ",
      src: "control-panel.jpg",
    },
    {
      heading: " We offer an extensive range of ceiling lights from various top brands, ensuring quality and style for every preference from all brands.",
      src: "lights.jpeg",
    },
    {
      heading: " We offer MCBs and MCCBs from trusted brands like Siemens, Schneider Electric, and Legrand. ",
      src: "mcb.avif",
    },
    {
      heading: "We offer electrical wires from reputable brands like Polycab in various sizes, ensuring availability in all millimeter measurements ",
      src: "polycab.jpeg",
    },
    {
      heading: "Our relay inventory includes a diverse range of products from top brands, providing solutions for diverse industrial and commercial applications.",
      src: "relay.jpeg",
    },
  ];
  return (
    <section id="products" className="bg-white">
      <h1 className="text-4xl font-bold p-5">We deal in </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pl-10 md:mx-10 ">
        {products_hardware.map((product) => (
          <Product heading={product.heading} src={product.src} />
        ))}
      </div>

      <h1 className="text-4xl font-bold p-5">
        Explore Our Electrical Products
      </h1>
      <div className="grid md:grid-cols-2 pl-10 md:mx-10 ">
        {products_electronics.map((product) => (
          <Product heading={product.heading} src={product.src} />
        ))}
      </div>
    </section>
  );
};

export default Main;
