import React from "react";
import aboutBgImg from "../../assets/aboutBG.jpg";
import Whychoose from "../Home/Whychoose";
import Testimonials from "../home/Testimonials";

const About = () => {
  return (
    <section className="relative">
      {/* banner */}
      <div
        className="relative w-full h-[300px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutBgImg})` }}
      >
        {/* gradient fade at bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-white dark:to-stone-950" />

        <h1 className="relative z-10 text-4xl font-bold text-white text-center">
          About Us
        </h1>
      </div>

      {/* blend into next section */}
      <div className="relative -mt-8 z-20">
        <Whychoose />
      </div>

      <Testimonials />
    </section>
  );
};

export default About;
