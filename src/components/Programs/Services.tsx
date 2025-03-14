import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <section className="pt-10 bg-white text-black" id="features">
        <div className="mx-auto pb-20 md:px-16 px-5 pt-5">
          <div className="font-serif pl-16 pb-5 text-lg text-[#B6C4B6]">
            Our Services
          </div>
          <div className="flex flex-col space-y-10 text-center md:flex-row md:space-y-0">
            {/* item 1 */}
            <div className="pb-5 md:pb-0 flex flex-col items-center space-y-2 md:w-1/3 ">
              <div className="flex items-center justify-center h-24 mb-6">
                <Image
                  src={"/assets/imgs/service/pickup.svg"}
                  className=""
                  alt="icon"
                  width={200}
                  height={20}
                />
              </div>
              <h3 className="text-xl font-bold ">Pickup Items</h3>
              <p className="max-w-xs ">
                Access professional drycleaning from the confort of your home
              </p>
            </div>
            {/* item 2 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/3 md:pt-10">
              <div className="flex items-center justify-center h-24 mb-6">
                <Image
                  src={"/assets/imgs/service/wash-stage.svg"}
                  className=""
                  alt="icon"
                  width={200}
                  height={0}
                />
              </div>
              <h3 className="text-xl font-bold ">Washing</h3>
              <p className="max-w-xs">
                Access professional drycleaning from the comfort of your home
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 md:w-1/3">
              <div className="flex items-center justify-center h-24 mb-6">
                <Image
                  src={"/assets/imgs/service/iron-stage.svg"}
                  className=""
                  alt="icon"
                  width={200}
                  height={20}
                />
              </div>
              <h3 className="text-xl font-bold ">Ironing</h3>
              <p className="max-w-xs">
                Access professional drycleaning from the comfort of your home
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 md:w-1/3">
              <div className="flex items-center justify-center h-24 mb-6">
                <Image
                  src={"/assets/imgs/service/cleaned.svg"}
                  className=""
                  alt="icon"
                  width={100}
                  height={20}
                />
              </div>
              <h3 className="text-xl font-bold ">Ready to Pick up</h3>
              <p className="max-w-xs ">
                Access professional drycleaning from the comfort of your home
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-10 mt-28 text-center md:flex-row md:space-y-0">
            {/* item 3 */}

            <div className="flex flex-col items-center space-y-2 md:w-1/3">
              <div className="flex items-center justify-center h-24 mb-6">
                <Image
                  src={"/assets/imgs/service/mobile.svg"}
                  className=""
                  alt="icon"
                  width={120}
                  height={20}
                />
              </div>
              <h3 className="text-xl font-bold ">Delivering</h3>
              <p className="max-w-xs">
                Access professional drycleaning from the comfort of your home
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 md:w-1/3">
              <div className="flex items-center justify-center h-24 mb-6">
                <Image
                  src={"/assets/imgs/service/delivery.svg"}
                  className=""
                  alt="icon"
                  width={120}
                  height={20}
                />
              </div>
              <h3 className="text-xl font-bold ">Door step delivery</h3>
              <p className="max-w-xs">
                Access professional drycleaning from the comfort of your home
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 md:w-1/3">
              <div className="flex items-center justify-center h-24 mb-6">
                <Image
                  src={"/assets/imgs/home/ready-items.svg"}
                  className=""
                  alt="icon"
                  width={200}
                  height={20}
                />
              </div>
              <h3 className="text-xl font-bold ">Delivered</h3>
              <p className="max-w-xs">
                Access professional drycleaning from the comfort of your home
                services
              </p>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-no-repeat bg-[url(/assets/imgs/home/service-sample.svg)]">
          <div className="md:h-[59vh]  h-[40vh] flex flex-col justify-center sm:items-center md:items-start px-3 md:px-20 md:w-full bg-black bg-opacity-60">
            <p className="text-xl text-white font-bold max-w-2xl">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              eligendi quidem sapiente atque, vel reiciendis voluptate mollitia,
              eligendi quidem sapiente atque, vel reiciendis voluptate mollitia,
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
