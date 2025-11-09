import React from "react";
import banner from "../../assets/shopBG.jpg";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="relative">
      {/* banner */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* gradient fade at bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-white dark:to-stone-950" />

        <h1 className="relative z-10 text-4xl font-bold text-white text-center">
          Shop Our Products
        </h1>
      </div>

      {/* next section */}
      <div className="relative -mt-8 z-20">
        <Products headline={"What's Your Choice"} />
      </div>
    </section>
  );
};

export default Shop;
