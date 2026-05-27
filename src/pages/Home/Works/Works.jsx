import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";
import booking from "../../../assets/booking.png";
import cashDelivery from "../../../assets/cash-on-delivery.png";
import fastDelivery from "../../../assets/fast-delivery.png";

const worksData = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: bookingIcon,
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: cashDelivery,
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: fastDelivery,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: booking,
  },
];

const Works = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 bg-white">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F2A] mb-8 md:mb-10 text-center md:text-left">
        How it Works
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {worksData.map((item, index) => (
          <div
            key={index}
            className="bg-lime-50 rounded-2xl p-5 sm:p-6 shadow-sm hover:bg-lime-200 transition duration-300 text-center sm:text-left"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 sm:w-14 sm:h-14 mb-4 mx-auto sm:mx-0"
            />

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-[#0B1F2A] mb-2 sm:mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;