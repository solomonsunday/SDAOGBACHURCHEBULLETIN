import React from "react";
import { useToggleModalContext } from "@/contexts/toggleRightModalContext";
import Image from "next/image";

const SuccessPage = () => {
  const { setModal } = useToggleModalContext();
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div>
      <div className="py-5 text-xl font-semibold text-center">
        Your Laundry order has been registered successfully!
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/imgs/successpage/Order_confirmed.svg"
          alt="success image"
          width={400}
          height={0}
        />
      </div>
      <div className="text-center">
        <p className="py-2">Incase you missed this.</p>
        <div className="text-sm">
          Account Number : <span className="text-blue-500">1234567890 </span>{" "}
          FirstBank
          <div className="grid grid-cols-3">
            <div className="text-xs"></div>
            <div className="text-xs">The dry-cleaners'sson</div>
            <div className="text-xs"></div>
          </div>
        </div>
      </div>
      <div className="my-4 cursor-pointer">
        <button
          className="w-full p-3 text-white rounded-xl bg-primary hover:bg-secondary"
          onClick={closeModal}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
