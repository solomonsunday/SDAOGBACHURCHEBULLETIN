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

        <div className="col-span-3 text-sm capitalize">
          Welcome / Supt's Opening Remark
        </div>
        <div className="text-xs"> - </div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Welcome / Opening Hymn (SDAH 359)
        </div>
        <div className="text-xs capitalize"> Bright Enyia</div>

        <div className="col-span-3 text-sm capitalize"> Keeping on Course</div>
        <div className="text-xs capitalize"> Sis. Dawn Walson</div>

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
        <div className="text-xs capitalize"> Bro. Chimezie</div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
        <div className="text-xs capitalize"> -</div>
        <div className="col-span-3 text-sm capitalize">Friend's time</div>
        <div className="text-xs capitalize"> Bro. Uchendu Imo</div>

        <div className="col-span-3 text-sm capitalize">AMO Special Feature</div>
        <div className="text-xs capitalize"> Bro. Lucky Ezekiel</div>
        <div className="col-span-3 text-sm capitalize">
          Lesson Preview/Announcement / Closing Remark
        </div>
        <div className="text-xs capitalize"> Bro. Chimezie/Sis Dawn </div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH 286)
        </div>
        <div className="text-xs"> SIs. Chika Promise </div>
        <div className="col-span-3 text-sm capitalize">Closing Prayer</div>
        <div className="text-xs"> Bro. Bright Enyia </div>
      </div>
    </section>
  );
};

export default SabbathSchool;
