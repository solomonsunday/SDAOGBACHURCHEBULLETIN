import React from "react";

export default function OrderDetails() {
  return (
    <div className=" md:col-span-2 rounded-lg border border-black h-[10.0625rem] pt-[1.3125rem] pb-[1.875rem]">
      <p className=" font-bold ml-[4.25rem]">Order Details</p>
      <div className=" ml-6 mr-[1.0625rem] mt-5 ">
        <div className=" flex justify-between items-center mb-[1.125rem]">
          <p>
            <span className=" font-bold">Collected :</span> 23- 04-23
          </p>
          <p>
            <span className=" font-bold">Delivered : </span> 26- 04-23
          </p>
        </div>

        <p>
          <span className=" font-bold">Address : </span> 29, Ondo street, Off
          Ajayi road, Oke-ira, Lagos.
        </p>
      </div>
    </div>
  );
}
