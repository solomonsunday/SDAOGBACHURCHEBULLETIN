import { LockOpenIcon } from "@heroicons/react/20/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const DASHBOARD_SIDEBAR_LINK = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: (
      <Image
        src={"/assets/svgs/dashboard-icon.svg"}
        className=""
        alt="icon"
        width={27}
        height={27}
      />
    ),
  },
  {
    key: "sabbathschool",
    label: "Sabbath School",
    path: "/admin/sabbathschool",
    icon: (
      <Image
        src={"/assets/svgs/price-list-icon.svg"}
        className=""
        alt="icon"
        width={21.75}
        height={29}
      />
    ),
  },

  {
    key: "divine Service",
    label: "Divine Service",
    path: "/admin/divineservice",
    icon: (
      <Image
        src={"/assets/svgs/price-list-icon.svg"}
        className=""
        alt="icon"
        width={21.75}
        height={29}
      />
    ),
  },
  {
    key: "announcement",
    label: "Announcement",
    path: "/admin/announcement",
    icon: (
      <Image
        src={"/assets/svgs/price-list-icon.svg"}
        className=""
        alt="icon"
        width={21.75}
        height={29}
      />
    ),
  },
  {
    key: "pastordesk",
    label: "Pastor Desk",
    path: "/admin/pastordesk",
    icon: (
      <Image
        src={"/assets/svgs/price-list-icon.svg"}
        className=""
        alt="icon"
        width={21.75}
        height={29}
      />
    ),
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINK = [
  {
    key: "settings",
    label: "Settings",
    path: "/admin/settings",
    icon: <Cog6ToothIcon className="text-white h-6 w-6" />,
  },
  {
    key: "permission",
    label: "Permission",
    path: "/admin/permission",
    icon: <LockOpenIcon className="text-white h-6 w-6" />,
  },
];