import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";

const slides = [
  {
    image: banner1,
    title: "Delivery in 30 Minutes at your Doorstep",
    paragraph:
      "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.",
    buttons: [
      { text: "Track Your Parcel", style: "primary" },
      { text: "Be A Rider", style: "secondary" },
    ],
  },
  {
    image: banner2,
    title: "Fast & Reliable Delivery Service",
    paragraph:
      "Fastest delivery service with secure pickup and real-time tracking for all your parcel needs.",
    buttons: [
      { text: "Order Now", style: "primary" },
      { text: "Learn More", style: "secondary" },
    ],
  },
  {
    image: banner3,
    title: "Parcel Delivered in Just 30 Minutes",
    paragraph:
      "Get your parcel delivered at your doorstep in just 30 minutes with our trusted riders.",
    buttons: [
      { text: "Get Started", style: "primary" },
      { text: "Contact Us", style: "secondary" },
    ],
  },
];

const Banner = () => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-6 mt-4">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        showArrows={true}
        swipeable
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-[30px]"
          >
            {/* Banner Image */}
            <img
              src={slide.image}
              alt={`Banner ${index + 1}`}
              className="
                w-full
                h-[260px]
                sm:h-[360px]
                md:h-[480px]
                lg:h-[580px]
                xl:h-[650px]
                object-cover
              "
            />

            {/* Overlay Content */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-start
                text-left
              "
            >
              <div
                className="
                  pl-4
                  sm:pl-8
                  md:pl-12
                  lg:pl-16
                  max-w-[95%]
                  sm:max-w-[70%]
                  md:max-w-[55%]
                  lg:max-w-[45%]
                "
              >
                {/* Heading */}
                <h1
                  className="
    text-lg
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    xl:text-6xl
    font-bold
    leading-tight
    text-[#0B1F2A]
  "
                >
                  {index === 0 && (
                    <>
                      <span className="block sm:hidden">
                        Delivery in 30 Minutes <br />
                        at your Doorstep
                      </span>

                      <span className="hidden sm:block">
                        Delivery in 30 Minutes at your Doorstep
                      </span>
                    </>
                  )}

                  {index === 1 && (
                    <>
                      <span className="block sm:hidden">
                        Fast & Reliable <br />
                        Delivery Service
                      </span>

                      <span className="hidden sm:block">
                        Fast & Reliable Delivery Service
                      </span>
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <span className="block sm:hidden">
                        Parcel Delivered <br />
                        in Just 30 Minutes
                      </span>

                      <span className="hidden sm:block">
                        Parcel Delivered in Just 30 Minutes
                      </span>
                    </>
                  )}
                </h1>

                {/* Paragraph */}
                <p
                  className="
    mt-2
    sm:mt-4
    text-[11px]
    sm:text-sm
    md:text-base
    lg:text-lg
    text-gray-700
    leading-relaxed
    max-w-[300px]
    sm:max-w-[450px]
  "
                >
                  <span className="block sm:hidden">
                    Enjoy fast, reliable parcel delivery <br />
                    with real-time tracking and zero hassle.
                  </span>

                  <span className="hidden sm:block">
                    {slide.paragraph}
                  </span>
                </p>

                {/* Buttons */}
                <div
                  className="
                    mt-4
                    sm:mt-6
                    flex
                    flex-col
                    items-start
                    sm:flex-row
                    gap-2
                    sm:gap-3
                  "
                >
                  {slide.buttons.map((btn, i) => (
                    <button
                      key={i}
                      className={`
                        px-3
                        sm:px-5
                        md:px-6
                        py-1.5
                        sm:py-2.5
                        md:py-3
                        rounded-full
                        font-semibold
                        text-[10px]
                        sm:text-sm
                        md:text-base
                        transition-all
                        duration-300
                        w-auto
                        ${btn.style === "primary"
                          ? "bg-lime-400 hover:bg-lime-500 text-black"
                          : "bg-white border border-gray-300 hover:bg-gray-100 text-black"
                        }
                      `}
                    >
                      {btn.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;