import Image from "next/image";
import React from "react";

export default function CustomerNote() {
  return (
    <div className=" md:col-span-2 rounded-lg border border-black h-[10.0625rem] py-6 px-[1.6875rem]">
      <div className=" flex items-center gap-x-5 font-bold">
        <Image
          src={"/assets/svgs/document-icon.svg"}
          className=""
          alt="icon"
          width={29}
          height={34}
        />
        CUSTOMER&apos;S NOTE
      </div>
      <p className=" ml-[3.0625rem] text-sm">
        The native attire is lace and it shrinks when excess heat is applied. So
        please, avoid putting it into the dryer and handle with extra care.
      </p>
    </div>
  );
}
