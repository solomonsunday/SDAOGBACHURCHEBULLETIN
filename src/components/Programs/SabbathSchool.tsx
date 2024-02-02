import React from "react";

const SabbathSchool = () => {
  return (
    <section className="pt-10  dark:text-white " id="sabbathschool">
      <div className="font-serif dark:text-orange-400 text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
        Sabbath School <span className="text-base">(8:45 - 10:45 AM)</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Singspiration (8:30 AM)
        </div>
        <div className="text-xs capitalize"> Song Leader</div>

        <div className="col-span-3 text-sm capitalize">
          Openning Remark (Welcome & Prayer):
        </div>
        <div className="text-xs"> Mrs Chika Nwaejigh</div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Welcome / Opening Hymn (SDAH 297)
        </div>
        <div className="text-xs capitalize"> Bro U. Imo</div>
        <div className="col-span-3 text-sm capitalize"> Mission Spotlight </div>
        <div className="text-xs capitalize"> Bro Bright</div>
        <div className="col-span-3 text-sm capitalize"> Keeping on Course</div>
        <div className="text-xs capitalize"> Mrs Walson</div>
        <div className="col-span-3 text-sm capitalize"> Special Feature</div>
        <div className="text-xs capitalize"> Ogba & Akiode Churches</div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Study Time, Lession Introduction
        </div>
        <div className="text-xs capitalize"> Deacon Chimezie Mbagwu</div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities (35 Minutes)
        </div>
        <div className="text-xs capitalize"> Mrs. J. Chima</div>
        <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
        <div className="text-xs capitalize"> Deacon Chimezie Mbagwu</div>
        <div className="col-span-3 text-sm capitalize">Friend's time</div>
        <div className="text-xs capitalize"> Bro U. Imo</div>
        <div className="col-span-3 text-sm capitalize">
          Announcement / Closing Remark
        </div>
        <div className="text-xs capitalize"> Deacon Chimezie Mbagwu</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH 537)
        </div>
        <div className="text-xs"> Mrs Walson</div>
        <div className="col-span-3 text-sm capitalize">
          Sabbath School Closing Prayer
        </div>
        <div className="text-xs"> Mrs Chika Nwaejigh</div>
      </div>
    </section>
  );
};

export default SabbathSchool;
