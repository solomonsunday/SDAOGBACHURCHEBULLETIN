import React from "react";

const SabbathSchool = () => {
  return (
    <section className="pt-10 dark:text-white " id="sabbathschool">
      <div className="font-serif dark:text-orange-400 text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
        Sabbath School <span className="text-base">(8:45 - 10:45 AM)</span>
      </div>
      <div className="grid grid-cols-4 gap-2 border-8 rounded-md border-orange-500 p-3">
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Singspiration (8:45 AM)
        </div>
        <div className="text-xs capitalize">Song Leaders</div>
        {/* <div className="col-span-3 text-sm capitalize">
          Welcome/Opening Remark
        </div>
        <div className="text-xs">Bro. Chimezie Mbagwu</div> */}
        <div className="col-span-3 text-sm capitalize">Opening Prayer</div>
        <div className="text-xs">-</div>
        <div className="col-span-3 text-sm capitalize">
          Opening Hymn (SDAH 245)
        </div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize"> Keeping on Course</div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize"> Mission Spotlight </div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Lesson Study (Witnesses of Christ as the Messiah)
        </div>
        <div className="text-xs capitalize">-</div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Family Presentation{" "}
        </div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">
          Welcome / Friend's time
        </div>
        <div className="text-xs capitalize"> -</div>
        <div className="col-span-3 text-sm capitalize">Special Song</div>
        <div className="text-xs capitalize">Shepherdess International</div>

        <div className="col-span-3 text-sm capitalize">Couples Quiz</div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Remark/Announcement
        </div>
        <div className="text-xs capitalize">-</div>

        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH 457)
        </div>
        <div className="text-xs capitalize"> -</div>
        <div className="col-span-3 text-sm capitalize">Closing Prayer -</div>
        <div className="text-xs">-</div>
      </div>
    </section>
  );
};

export default SabbathSchool;
