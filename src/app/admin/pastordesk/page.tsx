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
      bibleverse: "john 3:16",
      bibletext:
        "For God so loved the world, that he gave his only begotten son, that whosoever believe in him, shold not perish but have eternal life",
    },
    {
      key: 2,
      id: 2,
      bibleverse: "james 1: 5",
      bibletext:
        "If any of you lacks wisdom, he should ask God, who gives generously to all without finding fault, and it will be given to him.",
    },
  ];

  const columns = [
    { column: "id", key: "id" },
    { column: "bibleverse", key: "bibleverse" },
    { column: "bibletext", key: "bibletext" },
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
          buttonOnClick={() => router.push("/admin/pastordesk/create")}
        />
      </Container>
    </AdminLayout>
  );
};

export default AdminPriceList;
