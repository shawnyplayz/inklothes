import React from "react";
import { FaAmazon, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function page() {
  return (
    <div className="flex flex-col bg-black text-white justify-center">
      <div className="flex flex-col justify-center my-4 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 pb-7 border-b-8  border-solid rounded-b-lg">
          <div className="firstGrid">
            <div className="firstGridTop flex flex-col">
              <div className="text-2xl font-semibold my-2">INKLOTHES</div>
              <div className="">Your Tattoo Apparel</div>
            </div>
            <div className="firstGridMid flex flex-col">
              <div className="text-2xl font-semibold my-2">ABOUT US</div>
              <div className="overflow-clip max-w-xs">
                We're a startup based in Mumbai, who sell Tattooed apparel
              </div>
            </div>
            {/* <div className="firstGridLast flex flex-col">
            <div className="text-2xl font-semibold my-2"></div>
            <div className="overflow-clip max-w-xs">
              Raj Palace, I.C. Colony Borivali West, Mumbai 400103
            </div>
          </div> */}
          </div>
          <div className="secondGrid">
            <div className="flex flex-col">
              <div className="text-2xl font-semibold my-2">
                CUSTOMER SERVICE
              </div>
              <div className="flex flex-col gap-1">
                <div className="">Contact Us</div>
                <div className="">Track Order</div>
                <div className="">Return Order</div>
                <div className="">Cancel Order</div>
              </div>
            </div>
          </div>
          <div className="thirdGrid">
            <div className="flex flex-col">
              <div className="text-2xl font-semibold my-2">MORE INFO</div>
              <div className="flex flex-col gap-1">
                <div className="">FAQ</div>
                <div className="">Terms and conditions</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center my-4">
          <div className="flex flex-row my-4 gap-6">
            <div className="bg-white rounded-lg text-3xl p-2 text-black flex justify-center items-center">
              <FaFacebookF />
            </div>
            <div className="bg-white rounded-lg text-3xl p-2 text-black  flex justify-center items-center">
              <FaInstagram />
            </div>
            <div className="bg-white rounded-lg text-3xl p-2 text-black  flex justify-center items-center">
              <FaAmazon />
            </div>
            <div className="bg-white rounded-lg text-3xl p-2 text-black  flex justify-center items-center">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          Copyright © 2023 Inklothes Pvt Ltd. All rights reserved.
        </div>
      </div>

      {/* <div className="flex w-full h-1 rounded-full"></div> */}
      {/* <div className="w-full flex h-1">asd</div> */}
    </div>
  );
}

export default page;
