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
        <div className="text-xs"> Sis. Nkeiru Ihesiaba Wogu </div>
        <div className="col-span-3 text-sm capitalize">
          Opening Hymn (SDAH 518)
        </div>
        <div className="text-xs capitalize">Sis. Chinyere Nwachukwu </div>
        <div className="col-span-3 text-sm capitalize">Opening Prayer</div>
        <div className="text-xs"> Sis. Nkeiru Ihesiaba Wogu</div>
        <div className="col-span-3 text-sm capitalize">Insider Story</div>
        <div className="text-xs"> Sis. Blessing Chimezie</div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Mission Spotlight / Keeping on Course (5 - 7 Mins)
        </div>
        <div className="text-xs capitalize"> -</div>
        <div className="col-span-3 text-sm capitalize">
          Scripture Reading (2mins){" "}
        </div>
        <div className="text-xs capitalize"> - </div>
        {/* <div className="col-span-3 text-sm capitalize">
          {" "}
          Special Feature (Short Drama on Seizure) (3-5mins)
        </div>
        <div className="text-xs capitalize">Sis. Jessica Hillary</div> */}

        <div className="col-span-3 text-sm capitalize">
          Lesson Study / Introduction (9:30am-10:15a.m)
        </div>
        <div className="text-xs capitalize">Bro. Chimezie Mbagwu</div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">Interactive Session</div>
        <div className="text-xs capitalize">Lesson Recap/Quiz</div>

        <div className="col-span-3 text-sm capitalize">
          Welcome / Friend's time (5mins)
        </div>
        <div className="text-xs capitalize"> Sis. Nkeiru Ihesiaba Wogu</div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Special Song/Testimony (Mrs. Rejoice Ugochukwu) (3-5mins)
        </div>
        <div className="text-xs capitalize">Sis. Blessing Chimezie</div>

        <div className="col-span-3 text-sm capitalize">
          Closing Remark / Announcement (3mins)
        </div>
        <div className="text-xs capitalize">Bro. Chimezie Mbagwu</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH 422) (2mins)
        </div>
        <div className="text-xs capitalize">Sis. Nkeiru Ihesiaba Wogu</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Prayer (2mins)
        </div>
        <div className="text-xs">Sis. Chinyere Nwachukwu </div>
      </div>
    </section>
  );
};

export default SabbathSchool;
