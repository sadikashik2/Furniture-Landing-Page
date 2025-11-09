import React from "react";
import contactBgImg from "../../assets/contactBG.jpg";

const Contact = () => {
  return (
    <section>
      {/* banner */}
      <div
        className="relative w-full h-[300px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${contactBgImg})` }}
      >
        {/* gradient fade at bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-white dark:to-stone-950" />

        <div>
          <h1 className="relative z-10 text-4xl font-bold">Contact us</h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
