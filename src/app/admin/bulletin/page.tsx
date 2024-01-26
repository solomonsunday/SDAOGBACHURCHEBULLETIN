"use client";
import Container from "@/components/Admin/Container";
import TableGroup from "@/components/Admin/TableGroup";
import AdminLayout from "../../../components/Admin/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AdminPriceList = () => {
  const router = useRouter();

  const data = [
    { key: 1, id: 1, name: "John Doe", date: "30 / 12 / 2023" },
    { key: 2, id: 2, name: "Jane Smith", date: "25 / 12 / 2023" },
  ];

  const columns = [
    { column: "id", key: "id" },
    { column: "name", key: "name" },
    { column: "date", key: "date" },
  ];

  return (
    <AdminLayout>
      <Container className=" md:pl-[3.75rem] md:pr-[4.625rem] pl-[2.5rem] pt-10 pb-7 bg-white">
        <TableGroup
          data={data}
          columns={columns}
          buttonClassName={
            " w-[15.8125rem] flex gap-x-[1.875rem] items-center justify-center bg-[#304D30]"
          }
          buttonText="Update Bulletin"
          buttonIcon={
            <Image
              src={"/assets/svgs/refresh-icon.svg"}
              className=""
              alt="icon"
              width={18}
              height={18}
            />
          }
          hasButton
          buttonOnClick={() => router.push("/admin/bulletin/create")}
        />
      </Container>
    </AdminLayout>
  );
};

export default AdminPriceList;
