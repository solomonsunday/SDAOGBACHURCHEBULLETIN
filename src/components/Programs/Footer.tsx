import Image from "next/image";
import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="bg-[#304D30]  text-white ">
      <div className="md:px-20 px-8 pb-10 py-5 space-y-10 text-center md:text-left">
        <div>
          <Image
            src="/assets/imgs/sda-logo.jpeg"
            alt="Church-logo"
            width={50}
            height={10}
            className="h-15 w-15 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center space-y-24 md:flex-row md:space-y-0">
          {/* Menus */}
          <div className="flex flex-col space-y-14  text-xl md:text-base md:space-x-48 md:space-y-0 md:flex-row">
            <div className="flex flex-col text-center">
              <p className="text-lg">Church Pastor</p>
              <span className="text-sm text-orange-400">Happy Kona</span>
              <span className="text-sm text-orange-400">07036586617</span>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-lg">Head Elder</p>
              <span className="text-sm text-orange-400">Gbenga Adeoti</span>
              <span className="text-sm text-orange-400">07036074086</span>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-lg">Church Clerk</p>
              <span className="text-sm text-orange-400">
                Ugochukwu Azomaukwu
              </span>
              <span className="text-sm text-orange-400">08020581351</span>
            </div>
          </div>
        </div>

        <div className="flex xs:flex-col justify-between md:justify-center md:space-x-10 pt-5  md:px-0 px-20 items-center">
          {/* <div>
            <p>Follow us on: </p>
          </div> */}
          <div>
            <a
              href="https://www.facebook.com/seventhday.adventist.church.ogba.2024?mibextid=ZbWKwL"
              target="_blank"
            >
              <img
                src="/assets/imgs/facebook.svg"
                alt="facebook"
                className="p-2 bg-slate-900 rounded-full hover:bg-[#304D30]"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UC8RNOVtNHwBx4cA_5zN2Dgw"
              target="_blank"
            >
              <img
                src="/assets/svgs/youtube.svg"
                width={40}
                height={20}
                alt="twitter"
                className="p-2 bg-slate-900 rounded-full hover:bg-[#304D30]"
              />
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/seventhdayadventist_ogba/"
              target="_blank"
            >
              <img
                src="/assets/imgs/instagram.svg"
                alt="instagram"
                className="p-2 bg-slate-900 rounded-full hover:bg-[#304D30]"
              />
            </a>
          </div>
        </div>
        <div className="border border-x-white "></div>
        <div className="text-center text-sm text-orange-400">
          &copy; {year} Seventh-Day Adventist Church, OGBA. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
