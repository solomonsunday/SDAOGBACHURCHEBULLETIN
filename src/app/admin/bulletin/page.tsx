"use client";
import Container from "@/components/Admin/Container";
import AdminLayout from "../../../components/Admin/layout";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useGetbulletins } from "@/hooks/useGetBulletins";
import { Spinner } from "@/components/Common/Spinner";
import dayjs from "dayjs";
import Search from "@/components/Admin/Search";
import Button from "@/components/Admin/button";
import { useRouter } from "next/navigation";

const BulletinListPage = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [usersData] = useState([
    {
      firstName: "solomon",
      surName: "Sunday",
      email: "s.king@gmail.com",
      phoneNumber: "898824822",
    },
  ]);

  const { bulletins, loading } = useGetbulletins();
  console.log(bulletins, "bulletins");

  return (
    <AdminLayout>
      <Container className=" md:pl-[3.75rem] md:pr-[4.625rem] pl-[2.5rem] pt-10 pb-7 min-h-screen">
        <div className=" flex flex-col lg:flex-row gap-y-5 justify-between mb-5">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />

          <Button
            type="button"
            className="py-2 px-8 bg-orange-400 hover:bg-orange-500"
            onClick={() => router.push("/admin/bulletin/create")}
          >
            Create
          </Button>
        </div>
        <hr className="w-full" />
        <div className="mb-4 overflow-auto rounded-lg">
          <table className="w-full">
            <thead className="border-b border-b-gray-400 borer">
              <tr className="">
                <th className="p-3 text-sm font-bold tracking-wide text-left">
                  ID
                </th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">
                  Created Date
                </th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">
                  Topic For The Week
                </th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">
                  Email Name
                </th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">
                  Phone Number
                </th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">
                  Network Provider
                </th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-y-50">
              {!loading &&
                bulletins.map((data: any, idx: number) => {
                  return (
                    <tr className="" key={idx}>
                      <td className="p-2 text-sm text-gray-700 capitalize whitespace-nowrap">
                        {idx + 1}
                      </td>
                      <td className="p-2 text-sm text-gray-700 capitalize whitespace-nowrap">
                        {dayjs(data?.createdDate).format("MMM D, YYYY")}
                      </td>
                      <td className="p-2 text-sm text-gray-700 capitalize whitespace-nowrap">
                        {" "}
                        {data.topicForTheWeek}
                      </td>
                      <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                        {data.email}{" "}
                      </td>
                      <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                        {data.phoneNumber}{" "}
                      </td>
                      <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                        {data.phoneNumber}{" "}
                      </td>
                      <td className="p-2 text-sm text-gray-700">
                        {" "}
                        <div className="z-10">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                  />
                                </svg>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-50 w-40 mt-0 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        className={`${
                                          active
                                            ? "bg-gray-200 text-black"
                                            : "text-black-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                      >
                                        View Detail
                                      </button>
                                    )}
                                  </Menu.Item>
                                </div>

                                <div className="px-1 py-1 ">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        onClick={() => {}}
                                        className={`${
                                          active
                                            ? "bg-gray-200 text-black"
                                            : "text-black-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                      >
                                        Edit
                                      </button>
                                    )}
                                  </Menu.Item>
                                </div>
                                <div className="px-1 py-1 ">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        onClick={() => {}}
                                        className={`${
                                          active
                                            ? "bg-gray-200 text-black"
                                            : "text-black-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                      >
                                        Publish
                                      </button>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          {loading ? (
            <div className="flex justify-center items-center h-96">
              {" "}
              <Spinner color="orange" />
            </div>
          ) : (
            usersData.length === 0 && "No Data created yet"
          )}
        </div>
      </Container>
    </AdminLayout>
  );
};

export default BulletinListPage;
