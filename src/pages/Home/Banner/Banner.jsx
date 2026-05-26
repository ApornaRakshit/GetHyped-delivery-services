import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";

const slides = [
  {
    image: banner1,
    paragraph:
      "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
    top: "72%",
    buttons: [
      { text: "Track Your Parcel", style: "primary" },
      { text: "Be A Rider", style: "secondary" },
    ],
  },
  {
    image: banner2,
    paragraph:
      "Fastest delivery service with secure pickup and real-time tracking for all your parcel needs.",
    top: "78%",
    buttons: [
      { text: "Order Now", style: "primary" },
      { text: "Learn More", style: "secondary" },
    ],
  },
  {
    image: banner3,
    paragraph:
      "Get your parcel delivered at your doorstep in just 30 minutes with our trusted riders.",
    top: "74%",
    buttons: [
      { text: "Get Started", style: "primary" },
      { text: "Contact Us", style: "secondary" },
    ],
  },
];

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={true}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Banner Image */}
          <img
            src={slide.image}
            alt={`Banner ${index + 1}`}
            className="w-full h-[600px] object-cover"
          />

          {/* Paragraph + Buttons */}
          <div
            className="absolute left-16 ml-5 w-[450px] text-left"
            style={{ top: slide.top }}
          >
            <p className="text-gray-700 text-base leading-relaxed">
              {slide.paragraph}
            </p>

            {/* Dynamic Buttons */}
            <div className="mt-6 flex gap-4">
              {slide.buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`px-6 py-3 rounded-full font-semibold transition ${
                    btn.style === "primary"
                      ? "bg-lime-400 hover:bg-lime-500 text-black"
                      : "bg-white border border-gray-300 hover:bg-gray-100 text-black"
                  }`}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;