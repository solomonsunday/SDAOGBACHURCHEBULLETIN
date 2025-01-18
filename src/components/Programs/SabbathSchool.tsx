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
          Singspiration (8:45 AM)
        </div>
        <div className="text-xs capitalize">Song Leader</div>
        <div className="col-span-3 text-sm capitalize">
          Welcome/Opening Remark
        </div>
        <div className="text-xs">-</div>

        <div className="col-span-3 text-sm capitalize">Opening Prayer</div>
        <div className="text-xs">-</div>
        <div className="col-span-3 text-sm capitalize">
          Opening Hymn (SDAH -)
        </div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize"> Keeping on Course</div>
        <div className="text-xs capitalize">- </div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Mission Spotlight(5 - 7 Mins){" "}
        </div>
        <div className="text-xs capitalize"> -</div>

        <div className="col-span-3 text-sm capitalize">
          Scripture Reading (2mins){" "}
        </div>
        <div className="text-xs capitalize"> - </div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Special Music/Poem (3-5mins)
        </div>
        <div className="text-xs capitalize"> -</div>

        <div className="col-span-3 text-sm capitalize">
          Lesson Study (9:30am-10:15a.m)
        </div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="col-span-3 text-sm capitalize">
          {" "}
          Family Presentation
        </div>
        <div className="text-xs capitalize">-</div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Interactive Session (Lesson Recap/Quiz/Game)
        </div>
        <div className="text-xs capitalize">-(10mins)</div>
        <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">
          Welcome / Friend's time
        </div>
        <div className="text-xs capitalize"> - (5mins)</div>
        {/* <div className="col-span-3 text-sm capitalize">
          Special Presentation
        </div>
        <div className="text-xs capitalize">Bro. Benjamin Oshiotse</div> */}
        {/* 
        <div className="col-span-3 text-sm capitalize">Couples Quiz</div>
        <div className="text-xs capitalize">-</div> */}
        <div className="col-span-3 text-sm capitalize">
          Closing Remark/Announcement
        </div>
        <div className="text-xs capitalize">- (3mins)</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH -) (2min)
        </div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Prayer (2min)
        </div>
        <div className="text-xs">-</div>
      </div>
      {/* <SpecialFeature /> */}
    </section>
  );
};

export default SabbathSchool;
