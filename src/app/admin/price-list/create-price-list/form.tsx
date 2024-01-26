import Button from "@/components/Admin/button";
import Input from "@/components/Admin/input";
import SelectDropdown from "@/components/Admin/selectDropdown";
import Image from "next/image";
import React from "react";

export default function Form() {
  const selectOptions = ["hello", "world", "there"];

  return (
    <div className=" w-full flex flex-wrap gap-5 justify-between  md:flex-row flex-col h-fit rounded-lg gap-y-[1.125rem] gap-x-[6.125rem] pb-8 pt-6 px-[3.3125rem] bg-white font-poppins">
      <div className=" h-[16.25rem] md:w-full lg:w-[40%] w-full flex flex-col gap-y-3">
        <div className=" h-[3.75rem]">
          <SelectDropdown placeholder="Category" options={selectOptions} />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="test" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="test" />
        </div>
      </div>
      <div className=" h-[16.25rem] md:w-full lg:w-[40%] w-full flex flex-col gap-y-[1.1875rem]">
        <div
          className="w-full h-[8.4375rem] border-dashed border-black rounded-xl border flex flex-col justify-center items-center gap-y-3 cursor-pointer"
          onClick={() =>
            document.getElementById("category-image-input")?.click()
          }
        >
          <Image
            src={"/assets/svgs/image-icon.svg"}
            alt="icon"
            width={58.567}
            height={59}
          />
          <p>Click here to select image</p>
          <input
            type="file"
            className="hidden"
            id="category-image-input"
            accept=".png, .jpg, .jpeg"
          />
        </div>

        <Button type="button" className=" w-full">
          Add Item
        </Button>
      </div>
    </div>
  );
}
