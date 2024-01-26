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
    )
  },
  {
    key: "price-list",
    label: "Price List",
    path: "/admin/price-list",
    icon: (
      <Image
        src={"/assets/svgs/price-list-icon.svg"}
        className=""
        alt="icon"
        width={21.75}
        height={29}
      />
    )
  },
  {
    key: "new-order",
    label: "New Orders",
    path: "/admin/new-order",
    icon: (
      <Image
        src={"/assets/svgs/new-orders-icon.svg"}
        className=""
        alt="icon"
        width={20}
        height={23}
      />
    )
  },
  {
    key: "pending-order",
    label: "Pending Orders",
    path: "/admin/pending-order",
    icon: (
      <Image
        src={"/assets/svgs/pending-orders-icon.svg"}
        className=""
        alt="icon"
        width={20}
        height={23}
      />
    )
  },
  {
    key: "order-history",
    label: "Order History",
    path: "/admin/order-history",
    icon: (
      <Image
        src={"/assets/svgs/order-history-icon.svg"}
        className=""
        alt="icon"
        width={21}
        height={22}
      />
    )
  },
  {
    key: "user-data",
    label: "User Data",
    path: "/admin/user-data",
    icon: (
      <Image
        src={"/assets/svgs/user-data-icon.svg"}
        className=""
        alt="icon"
        width={24}
        height={24}
      />
    )
  },
  {
    key: "discounts",
    label: "Discounts",
    path: "/admin/discounts",
    icon: (
      <Image
        src={"/assets/svgs/discounts-icon.svg"}
        className=""
        alt="icon"
        width={30}
        height={28}
      />
    )
  }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINK = [
  {
    key: "settings",
    label: "Settings",
    path: "/admin/settings",
    icon: <Cog6ToothIcon className="text-white h-6 w-6" />
  },
  {
    key: "permission",
    label: "Permission",
    path: "/admin/permission",
    icon: <LockOpenIcon className="text-white h-6 w-6" />
  }
];
