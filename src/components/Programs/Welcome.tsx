import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [todaysDate, setTodaysDate] = useState<string>("");

  function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

  useEffect(() => {
    setTodaysDate(getFormattedDate());
  }, []);

  return (
    <section className="pt-5 md:pt-10" id="sabbathschool">
      <div className="font-serif text-3xl pb-2 mb-5 dark:text-orange-400 text-[#304D30] text-center italic ">
        Welcome to{" "}
        <span className="text-base italic text-orange-500">
          Seventh-Day Adventist Church, OGBA{" "}
          <span className="text-sm text-[#304D30] dark:text-orange-400">
            ( {todaysDate} )
          </span>
        </span>
        <div className="border border-orange-500 "></div>
      </div>
      <div className="space-y-2">
        <div className="text-center flex justify-center">
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2  w-full ">
            <p className="text-orange-400 underline">THEME FOR THIS QUARTER</p>
            Themes in the Gospel of John
          </blockquote>
        </div>
        <div className="text-center flex justify-center">
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2  w-full">
            <p className="text-orange-400 underline">TOPIC FOR THE WEEK</p>
            The Source of Life
          </blockquote>
        </div>
        <div className="text-center flex justify-center">
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 w-full">
            <p className="text-orange-400 underline">MEMORY TEXT</p>

            <span className="px-1 text-xs italic">
              “‘I am the way, the truth, and the life. No one comes to the
              Father except through Me”
              <span className="font-bold">(John 14:6 NKJV)</span>
            </span>
          </blockquote>
        </div>

        <div className="text-center flex justify-center">
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 w-full  overflow-auto">
            <a
              href="https://us02web.zoom.us/j/82591974493?pwd=Yk8vUEwrR1ZtZ1hvWEcvdFdjLzVWZz09"
              target="_blank"
              className="text-blue-700 cursor-pointer"
            >
              <div className="">
                <p className="underline">Join us Online via Zoom</p>

                <p>Click here to join us online </p>
                <span className="text-xs text-orange-500">
                  Time 9:00 AM Every Sabbath Morning
                </span>
              </div>
            </a>
          </blockquote>
        </div>
        <div className="text-center flex justify-center">
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 w-full  overflow-auto bg-cover bg-no-repeat bg-[url('/assets/imgs/welcome/midweek-img.jpg')] h-36">
            <a
              href="https://us02web.zoom.us/j/83976497702?pwd=TmJpa3VBU05XUWlHb1JVOTY3S1gyQT09"
              target="_blank"
              className="cursor-pointer "
            >
              <div className=" text-green-950 font-bold shadow-2xl">
                {/* <p className="underline">Join us to pray on Midweek</p> */}
                <p>Click here to join us online</p>
                <span className="">
                  Time: 8:00 PM Every Wednesday
                </span>
              </div>
            </a>
          </blockquote>
        </div>
        <div className="text-center flex justify-center">
          <blockquote className="rounded-lg capitalize py-2 w-full relative overflow-auto bg-cover bg-no-repeat bg-[url('/assets/imgs/welcome/early-morning.jpg')] h-36">
            <div className="right-0 pr-1 pt-0 absolute">
              {/* <div className="bg-red-700 text-white px-2 rounded-lg">New</div> */}
            </div>
            <a
              href="https://us02web.zoom.us/j/82044972297?pwd=GmOaK1QcBfhnphBQ4KEQiUQnBwWilA.1"
              target="_blank"
              className="cursor-pointer "
            >
              <div className="text-black text-lg font-bold shadow-2xl">
                {/* <p className="underline">Early Morning Prayer</p> */}
                <p className="">Click here to join us online</p>
                <span className=" text-white">
                   5AM Every Wednesday & Sunday
                </span>
              </div>
            </a>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
