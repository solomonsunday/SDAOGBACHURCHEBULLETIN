import React from "react";

export default function LaundaryDetails() {
  return (
    <div className=" md:row-span-2 h-[26.6875rem] rounded-lg border border-black pt-6 px-6 pb-[1.875rem] text-center">
      <p className=" font-bold mb-[.375rem]"> Laundry Details</p>
      <p className=" mb-[1.5625rem]">Daniel Regha</p>
      <div className=" grid gap-y-3">
        <p className=" text-left mb-3">Wash, Iron and Fold...</p>
        <div className=" flex justify-between items-center">
          <p>T-shirt</p>
          <p>4</p>
          <p>
            <span className=" font-bold">N</span> 1,200
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <p>Jacket</p>
          <p>1</p>
          <p>
            <span className=" font-bold">N</span> 400
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <p>Shorts</p>
          <p>3</p>
          <p>
            <span className=" font-bold">N</span> 900
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <p>Native</p>
          <p>2</p>

          <p>
            <span className=" font-bold">N</span> 600
          </p>
        </div>
      </div>
      <div className=" float-right mt-[.5625rem]">
        <hr className=" w-[3.75rem]" />
        <p className="mt-[.5625rem]">
          <span className=" font-bold">N</span> 3,100
        </p>
      </div>
    </div>
  );
}
