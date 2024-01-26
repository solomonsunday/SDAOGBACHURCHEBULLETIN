import Input from "@/components/Admin/input";
import React from "react";

export default function Form() {
  return (
    <div className="w-full flex flex-wrap gap-5 justify-between  md:flex-row flex-col h-fit rounded-lg gap-y-3 gap-x-3 pb-8 pt-6 px-3 bg-white font-poppins">
      <div className="font-semibold text-2xl">
        <h2>Divince Service Form</h2>
      </div>
      <div className=" md:w-full w-full grid grid-cols-3 gap-4 gap-y-3">
        {/* <div className=" h-[3.75rem]">
          <SelectDropdown placeholder="Category" options={selectOptions} />
        </div> */}
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Singspiration time" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Song Leader" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Opening Prayer by" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Welcome /Supt's Openning Remark by" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Welcome / Opening Hymn" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Welcome / Opening Hymn by" />
        </div>{" "}
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="keeping On Course by" />
        </div>{" "}
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Mission Spotlight by" />
        </div>{" "}
        <div className=" h-[3.75rem]">
          <Input
            type="text"
            placeHolder="study Time, Lession Introduction by"
          />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Unit Activities (35 Minutes) by" />
        </div>{" "}
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Lesson Summary by" />
        </div>{" "}
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Friend's Time by" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Announcement / Closing Remark by" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Closing Hymn" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Closing Hymn by" />
        </div>
        <div className=" h-[3.75rem]">
          <Input type="text" placeHolder="Sabbath School Closing Prayer by" />
        </div>
      </div>
    </div>
  );
}
