"use client";
import Container from "@/components/Admin/Container";
import TableGroup from "@/components/Admin/TableGroup";
import AdminLayout from "../../../components/Admin/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AdminPriceList = () => {
  const router = useRouter();

  const data = [
    {
      key: 1,
      id: 1,
      description: "We will be lunching our E-bulletin soon",
      action: "delete",
    },
    {
      key: 2,
      id: 2,
      description: "We will be lunching out e-bullettin soon",
      action: "delete",
    },
  ];

  const columns = [
    { column: "id", key: "id" },
    { column: "description", key: "description" },
    { column: "action", key: "action" },
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
          buttonText="Create/Update"
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
          buttonOnClick={() => router.push("/admin/announcement/create")}
        />
      </Container>
    </AdminLayout>
  );
};

export default AdminPriceList;
