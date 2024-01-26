"use client";

import BackButton from "@/components/Admin/backButton";
import Button from "@/components/Admin/button";
import Container from "@/components/Admin/Container";
import Form from "./form";
import Table from "@/components/Admin/Table";
import AdminLayout from "@/components/Admin/layout";

export default function CreatePriceList() {
  const data = [
    { key: 1, id: 1, name: "John Doe", age: 30 },
    { key: 2, id: 2, name: "Jane Smith", age: 25 },
    { key: 2, id: 2, name: "Jane Smith", age: 25 },
    { key: 2, id: 2, name: "Jane Smith", age: 25 },
    { key: 2, id: 2, name: "Jane Smith", age: 25 },
    { key: 2, id: 2, name: "Jane Smith", age: 25 },
    { key: 2, id: 2, name: "Jane Smith", age: 25 },
    { key: 2, id: 2, name: "Jane Smith", age: 25 },
  ];

  const columns = [
    { column: "id", key: "id" },
    { column: "name", key: "name" },
    { column: "age", key: "age" },
  ];

  return (
    <AdminLayout>
      <Container className=" md:px-[3.125rem] px-[2.5rem] pt-6 pb-7 ">
        <div className=" flex flex-wrap gap-5 justify-between ml-[.125rem] mr-[.625rem]">
          <BackButton text="Create price list" />

          <Button type="button" className=" w-[15.8125rem]">
            Save Changes
          </Button>
        </div>
        <div className=" mt-4 flex flex-wrap gap-5 justify-between">
          <Form />
          <Table data={data} columns={columns} />
        </div>
      </Container>
    </AdminLayout>
  );
}
