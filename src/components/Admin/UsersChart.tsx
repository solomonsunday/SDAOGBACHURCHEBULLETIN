import Image from "next/image";
import StatusCount from "./StatusCount";

export default function UsersChart() {
  return (
    <div className=" bg-white w-full md:w-1/2 rounded-[.7684rem] px-5 pt-[.875rem] pb-[.9375rem] font-poppins h-[14.8125rem]">
      Users
      <div className=" flex justify-between items-center">
        <Image
          src={"/assets/svgs/pie-chart.svg"}
          className=""
          alt="icon"
          width={168}
          height={84}
        />

        <div className=" flex gap-y-[1.1875rem] flex-col">
          <StatusCount className="bg-[#0FC6C2]" count={83} status="Regular" />
          <StatusCount className="bg-[#3B82F6]" count={46} status="New" />
          <StatusCount className="bg-[#FFC700]" count={28} status="Inactive" />
        </div>
      </div>
    </div>
  );
}
