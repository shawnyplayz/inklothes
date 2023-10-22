import Link from "next/link";
import React from "react";
import { ImWhatsapp } from "react-icons/im";

function CarouselButtons() {
  return (
    <div className="w-full flex justify-center gap-32 my-14">
      <Link href="/services">
        <button
          className="btn flex flex-row justify-center items-center gap-3  rounded text-2xl"
          data-aos="fade-right"
        >
          <div className="">Learn More</div>
        </button>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=919082881360">
        <button
          className="btn-outline flex flex-row justify-center items-center gap-3 rounded text-2xl p-2"
          data-aos="fade-left"
        >
          <div className="">
            <ImWhatsapp />
          </div>
          <div className="">Ping Us</div>
        </button>
      </Link>
    </div>
  );
}

export default CarouselButtons;
