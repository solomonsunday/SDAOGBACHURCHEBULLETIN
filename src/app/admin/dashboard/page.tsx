"use client";
import AdminLayout from "@/components/Admin/layout";
import Container from "@/components/Admin/Container";
import OrdersChart from "@/components/Admin/OrdersChart";
import SalesChart from "@/components/Admin/SalesChart";
import StatisticsCardGroup from "@/components/Admin/StatisticsCardGroup";
import UsersChart from "@/components/Admin/UsersChart";

const Dashboard = () => {
  return (
    <div>
      <AdminLayout>
        <Container className="px-[2.125rem] pb-[1.8125rem]">
          <p
            className={`mt-[2.625rem] ml-[1.375rem] my-[1.5rem] text-black text-xl font-bold font-poppins`}
          >
            Hey, Welcome back
          </p>
          <div className=" flex flex-col gap-y-3">
            <div className=" bg-white w-full h-fit rounded-[.7684rem] pb-[1.6875rem] pt-[.875rem] ">
              <p className="ml-[1.1875rem] font-poppins">Today&apos;s Sales</p>
              <StatisticsCardGroup />
            </div>
            <div className=" w-full md:flex-row flex-col h-fit flex justify-between rounded-[.7684rem] gap-[1.125rem]">
              <UsersChart />
              <OrdersChart />
            </div>
            <SalesChart />
          </div>
        </Container>
      </AdminLayout>
    </div>
  );
};

export default Dashboard;
