import React from "react";

export default function PaymentDetails() {
  return (
    <div className=" h-[10.0625rem] rounded-lg border border-black text-center pl-6 pr-[1.0625rem] pt-[1.3125rem] pb-9 font-bold">
      Payment Details
      <div className=" font-normal mt-[1.25rem]">
        <div className="flex justify-between items-center ">
          <p>
            <span className=" font-bold">N</span> 2,100
          </p>
          <p>23- 04-23</p>
        </div>
        <div className="flex justify-between items-center ">
          <p>
            <span className=" font-bold">N</span> 2,100
          </p>
          <p>23- 04-23</p>
        </div>
      </div>
    </div>
  );
}
