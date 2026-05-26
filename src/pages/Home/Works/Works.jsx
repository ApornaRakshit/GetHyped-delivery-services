import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";
import booking from "../../../assets/booking.png"
import cashDelivery from "../../../assets/cash-on-delivery.png"
import fastDelivery from "../../../assets/fast-delivery.png"

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
    <section className="py-16 px-6 md:px-12 bg-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#0B1F2A] mb-10">
        How it Works
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {worksData.map((item, index) => (
          <div
            key={index}
            className="bg-[#f8eeee] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mb-4"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0B1F2A] mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;