"use client";
import Container from "@/components/Admin/Container";
import TableGroup from "@/components/Admin/TableGroup";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/Admin/layout";

const OrderHistory = () => {
  const router = useRouter();

  const data = [
    { key: 1, id: 1, name: "John Doe", age: 30 },
    { key: 2, id: 2, name: "Jane Smith", age: 25 },
  ];

  const columns = [
    { column: "id", key: "id" },
    { column: "name", key: "name" },
    { column: "age", key: "age" },
  ];

  return (
    <div>
      <AdminLayout>
        <Container className=" md:pl-[3.75rem] md:pr-[4.625rem] px-[2.5rem] pt-10 pb-7 bg-white">
          <TableGroup
            data={data}
            columns={columns}
            tableRowOnClick={() => router.push("/admin/view-order")}
          />{" "}
        </Container>
      </AdminLayout>
    </div>
  );
};

export default OrderHistory;
