import Image from "next/image";

export default function Search({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: (a: string) => void;
}) {
  return (
    <div className=" w-[17.9375rem] h-[2.9375rem] border border-black rounded-lg flex pl-[.9375rem] gap-x-5 font-poppins">
      <Image
        src={"/assets/svgs/search-icon.svg"}
        className=""
        alt="icon"
        width={18}
        height={18}
      />
      <input
        type="text"
        value={searchValue}
        className=" w-full h-full focus:outline-none rounded-lg"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
