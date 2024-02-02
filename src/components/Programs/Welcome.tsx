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
    <section className="pt-5 md:pt-10 " id="sabbathschool">
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
        <div>
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8 ">
            <p className="underline text-orange-400">THEME FOR THIS QUARTER</p>
            Psalms
          </blockquote>
        </div>
        <div>
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8 ">
            <p className="underline text-orange-400">TOPIC FOR THE WEEK</p>
            Singing the Lords song in a Strange Land
          </blockquote>
        </div>
        <div>
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8 ">
            <p className="underline text-orange-400">MEMORY TEXT</p>

            <span className="text-xs italic px-1">
              {" "}
              How shall we sing The LORD's song in a strange land?{" "}
              <span className="font-bold">(Psalm 137: 4 NKJV)</span>
            </span>
          </blockquote>
        </div>

        <div>
          <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8  overflow-auto">
            <a
              href="https://us02web.zoom.us/j/82591974493?pwd=Yk8vUEwrR1ZtZ1hvWEcvdFdjLzVWZz09"
              target="_blank"
              className="cursor-pointer text-blue-700"
            >
              <div className="">
                <p className="underline">Join us Online via Zoom</p>

                <p>Click here to join us online </p>
                <span className="text-xs text-orange-500">
                  Every Sabbath Morning
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
