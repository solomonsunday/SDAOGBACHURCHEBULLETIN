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
        <div className="text-xs"> Sis. Nkiruka Chibuike Wogu</div>

        <div className="col-span-3 text-sm capitalize">
          Welcome / Supt's Opening Remark
        </div>
        <div className="text-xs"> - </div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Welcome / Opening Hymn (SDAH 522)
        </div>
        <div className="text-xs capitalize"> Bro. Sunday Oyelekan </div>

        <div className="col-span-3 text-sm capitalize"> Keeping on Course</div>
        <div className="text-xs capitalize">Sis. Adaoha Alala </div>

        <div className="col-span-3 text-sm capitalize"> Mission Spotlight </div>
        <div className="text-xs capitalize"> Bro. Lucky Njoku</div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Family Special Song:{" "}
        </div>
        <div className="text-xs capitalize">
          {" "}
          he families of Elder Adeyemi Adedokun, Deac. Kingsly Udo, Deac. Lucky
          Njoku, Deac. Vincent Katchy, Bro. Sunday Oyelekan, Mrs. Eno Oguntade,
          & Chibuike Wogu.
        </div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Study Time, Lesson Introduction
        </div>
        <div className="text-xs capitalize"> Sis. Chika Promise</div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">Friend's time</div>
        <div className="text-xs capitalize"> Sis. Adaoha Alala </div>
        {/* <div className="col-span-3 text-sm capitalize">
          Special Feature: Birthday / Anniversary Clelebration (March & April)
        </div>
        <div className="text-xs capitalize"> Bro. Ben. Oshiotse </div> */}
        <div className="col-span-3 text-sm capitalize">
          Announcement / Closing Remark
        </div>
        <div className="text-xs capitalize"> Sis. Chika Promise </div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH 304)
        </div>
        <div className="text-xs"> Bro. Lucky Njoku</div>
        <div className="col-span-3 text-sm capitalize">Closing Prayer</div>
        <div className="text-xs"> Bro. Sunday Oyelekan</div>
      </div>
    </section>
  );
};

export default SabbathSchool;
