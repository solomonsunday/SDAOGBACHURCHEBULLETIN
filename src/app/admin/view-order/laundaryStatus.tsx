import Image from "next/image";
import React from "react";

export default function LaundaryStatus() {
  return (
    <div className=" md:col-span-2 rounded-lg border border-black md:h-[19.5rem] h-fit pt-6 pb-[1.375rem] px-[1.6875rem] ">
      <p className=" font-bold mb-2">Update Laundry Status</p>
      <p className=" text-sm">
        Click on each accordingly to update laundry status.
      </p>

      <div className=" grid grid-cols-2 md:grid-cols-3 mt-[1.5625rem] text-sm gap-y-6">
        <div className=" flex gap-x-[.9137rem]">
          <Image
            src={"/assets/svgs/checked-icon.svg"}
            className=" self-start"
            alt="icon"
            width={20.375}
            height={20.375}
          />
          <div>
            Received
            <Image
              src={"/assets/svgs/received-icon.svg"}
              className=" mt-[.9375rem]"
              alt="icon"
              width={34}
              height={41.503}
            />
          </div>
        </div>

        <div className=" flex gap-x-[.9137rem]">
          <Image
            src={"/assets/svgs/unchecked-icon.svg"}
            className=" self-start"
            alt="icon"
            width={20.375}
            height={20.375}
          />
          <div>
            Washed
            <Image
              src={"/assets/svgs/washed-icon.svg"}
              className=" mt-[.9375rem]"
              alt="icon"
              width={52}
              height={54}
            />
          </div>
        </div>
        <div className=" flex gap-x-[.9137rem]">
          <Image
            src={"/assets/svgs/unchecked-icon.svg"}
            className=" self-start"
            alt="icon"
            width={20.375}
            height={20.375}
          />
          <div>
            Ironed
            <Image
              src={"/assets/svgs/ironed-icon.svg"}
              className=" mt-[.9375rem]"
              alt="icon"
              width={39}
              height={42.656}
            />
          </div>
        </div>
        <div className=" flex gap-x-[.9137rem]">
          <Image
            src={"/assets/svgs/unchecked-icon.svg"}
            className=" self-start"
            alt="icon"
            width={20.375}
            height={20.375}
          />
          <div>
            Ready for pickup
            <Image
              src={"/assets/svgs/pickup-ready-icon.svg"}
              className=" mt-[.9375rem]"
              alt="icon"
              width={45}
              height={45}
            />
          </div>
        </div>
        <div className=" flex gap-x-[.9137rem]">
          <Image
            src={"/assets/svgs/unchecked-icon.svg"}
            className=" self-start"
            alt="icon"
            width={20.375}
            height={20.375}
          />
          <div>
            Laundry delivered
            <Image
              src={"/assets/svgs/delivered-icon.svg"}
              className=" mt-[.9375rem]"
              alt="icon"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
