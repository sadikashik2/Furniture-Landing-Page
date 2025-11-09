import React from "react";
import "../../App.css"; 
import { reviews } from "../../utils/reviews.js";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Rating from "../../components/Rating.jsx";

const Testimonials = () => {
  return (
    <section className="max-w-screen container mx-auto py-6 px-8 min-[400px]:px-16">
      <div className="text-center mb-12">
        <h3 className="uppercase text-lg font-semibold text-orange-400 mb-4">
          Testimonials
        </h3>

        <h2 className="capitalize text-4xl font-bold mb-4">
          Our Client Reviews
        </h2>
      </div>

      {/* review cards slider */}
      <div className="swiper-container relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Autoplay continues after user interacts
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next", // Custom next button
            prevEl: ".swiper-button-prev", // Custom previous button
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="md:max-w-7xl mx-auto relative"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundImage: `url(${review.coverImg})` }}
            >
              <div className="md:h-[547px] flex justify-center items-center mb-4">
                <div className="mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative">
                  <img
                    src={review.image}
                    alt=""
                    className="size-20 absolute -top-10 left-1/2 -translate-x-1/2 ring-2 ring-orange-400 object-cover rounded-full"
                  />
                  <div className="mt-16 text-center">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="mb-3">Verified Customer</p>
                    <p className="text-gray-500 mb-4">{review.review}</p>
                    <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                      <Rating rating={review.rating}></Rating>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
          
        </div>
        <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
