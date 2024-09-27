import React from "react";

const SabbathSchool = () => {
  return (
    <section className="pt-10 dark:text-white " id="sabbathschool">
      <div className="font-serif dark:text-orange-400 text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
        Sabbath School <span className="text-base">(8:45 - 10:45 AM)</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Singspiration (8:45 AM)
        </div>
        <div className="text-xs capitalize">Song Leaders</div>

        <div className="col-span-3 text-sm capitalize">
          Opening Remark (Welcome & Prayer)
        </div>
        <div className="text-xs"> Sis. Chika Promise</div>

        <div className="col-span-3 text-sm capitalize">Welcome & Prayer</div>
        <div className="text-xs">Sis. Adaoha Alala</div>

        {/* <div className="col-span-3 text-sm capitalize">
          Welcome / Supt's Opening Remark
        </div>
        <div className="text-xs"> Bro. Chimezie Mbagwu </div> */}

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Welcome / Opening Hymn (SDAH 251)
        </div>
        <div className="text-xs capitalize">Bro. Benjamin Oshiotse</div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Welcome / Opening Hymn (Mark 16:6)
        </div>
        <div className="text-xs capitalize">Sis. Nkeiruka Ihesiaba Wogu</div> 

        <div className="col-span-3 text-sm capitalize"> Keeping on Course</div>
        <div className="text-xs capitalize">-</div>

        <div className="col-span-3 text-sm capitalize"> Mission Spotlight </div>
        <div className="text-xs capitalize"> - </div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Family Presentation{" "}
        </div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Study Time, Lesson Introduction
        </div>
        <div className="text-xs capitalize"> Bro. Chiemzie Mbagwu </div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
        <div className="text-xs capitalize"> -</div>
        <div className="col-span-3 text-sm capitalize">Friend's time</div>
        <div className="text-xs capitalize"> Nifemi Adeoti</div>
        <div className="col-span-3 text-sm capitalize">
          Lesson Preview/Announcement / Closing Remark
        </div>
        <div className="text-xs capitalize">Com. Goodluck Eze</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH 506)
        </div>
        <div className="text-xs">Expl. Chiamaka Chukwuemeka </div>
        <div className="col-span-3 text-sm capitalize">Closing Prayer</div>
        <div className="text-xs">Izuchukwu Chukwuma</div>
      </div>
    </section>
  );
};

export default SabbathSchool;
