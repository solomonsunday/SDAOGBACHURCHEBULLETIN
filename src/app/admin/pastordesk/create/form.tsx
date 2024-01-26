import Input from "@/components/Admin/input";
import React from "react";

export default function Form() {
  return (
    <div className="w-full flex flex-wrap gap-5 justify-between  md:flex-row flex-col h-fit rounded-lg gap-y-3 gap-x-3 pb-8 pt-6 px-3 bg-white font-poppins">
      <div className="font-semibold text-2xl">
        <h2>Pastor's Desk</h2>
      </div>
      <div className=" md:w-full w-full grid grid-cols-2 gap-4 gap-y-3">
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="bible verse" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="bible text" />
        </div>
      </div>
    </div>
  );
}
