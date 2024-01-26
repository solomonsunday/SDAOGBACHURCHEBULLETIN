"use client";

import BackButton from "@/components/Admin/backButton";
import Button from "@/components/Admin/button";
import Container from "@/components/Admin/Container";
import Form from "./form";
import AdminLayout from "@/components/Admin/layout";

export default function CreatePriceList() {
  return (
    <AdminLayout>
      <Container className=" md:px-[3.125rem] px-[2.5rem] pt-6 pb-7 ">
        <div className=" flex flex-wrap gap-5 justify-between ml-[.125rem] mr-[.625rem]">
          <BackButton text="Create Bulletin Information" />

          <Button type="button" className=" w-[15.8125rem]">
            Save Changes
          </Button>
        </div>
        <div className=" mt-4 flex flex-wrap gap-5 justify-between">
          <Form />
        </div>
      </Container>
    </AdminLayout>
  );
}
