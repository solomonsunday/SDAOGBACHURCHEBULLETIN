import React from "react";
// import SpecialFeature from "./SpecialFeature";

const SabbathSchool = () => {
  return (
    <section className="pt-10 dark:text-white" id="sabbathschool">
      <div className="font-serif dark:text-orange-400 text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
        Sabbath School <span className="text-base">(8:45 - 10:45 AM)</span>
      </div>
      <div className="grid grid-cols-4 gap-2 border-x-8 rounded-md border-orange-500 p-3">
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Song service & Prayer (15 Mins)
        </div>
        <div className="text-xs capitalize">Song Leader</div>
        <div className="col-span-3 text-sm capitalize">
          Welcome / Opening Remark
        </div>
        <div className="text-xs">Sis. Chika Promise</div>
        <div className="col-span-3 text-sm capitalize">
          Opening Hymn (SDAH 103)
        </div>
        <div className="text-xs capitalize">Sis Nkeiru Iheasiaba </div>
        <div className="col-span-3 text-sm capitalize">Opening Prayer</div>
        <div className="text-xs">Sis Nkeiru Iheasiaba</div>
        {/* <div className="col-span-3 text-sm capitalize">
          SPecial Feature: “Men of Faith in Action –{" "}
        </div>
        <div className="text-xs"> Elder Chukwuma Ihesiaba</div> */}

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Mission Spotlight / Keeping on Course (5 - 7 Mins)
        </div>
        <div className="text-xs capitalize"> Sis Nkeiru Iheasiaba </div>
        <div className="col-span-3 text-sm capitalize">
          Scripture Reading (2mins){" "}
        </div>
        <div className="text-xs capitalize"> Sis. Kelechi Nwachukwu</div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Special Music / (Choir) (3-5mins)
        </div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">
          Lesson Study / Introduction (9:30am-10:15a.m)
        </div>
        <div className="text-xs capitalize">Sis. Chika Promise </div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Interactive Session (Lesson Recap)
        </div>
        <div className="text-xs capitalize"> Eld. Adeoti </div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="text-xs capitalize">-</div>
        {/* <div className="col-span-3 text-sm capitalize">Panel Discussion</div>
        <div className="text-xs capitalize">Elder Emeka Agbara</div> */}
        <div className="col-span-3 text-sm capitalize">
          Welcome / Friend's time (5mins)
        </div>
        <div className="text-xs capitalize">Sis Nkeiru Ihesiaba</div>
        {/* <div className="col-span-3 text-sm capitalize">
          Sabbath School Report
        </div>
        <div className="text-xs capitalize">Bro. Benjamin Oshiotse</div> */}
        <div className="col-span-3 text-sm capitalize">
          Closing Remark / Announcement (3mins)
        </div>
        <div className="text-xs capitalize">Sis. Chika Promise</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH 100) (2mins)
        </div>
        <div className="text-xs capitalize"> Sis. Kelechi Nwachukwu</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Prayer (2mins)
        </div>
        <div className="text-xs">Sis Nkeiru Ihesiaba</div>
      </div>
    </section>
  );
};

export default SabbathSchool;
