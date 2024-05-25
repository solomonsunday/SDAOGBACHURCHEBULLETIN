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
        <div className="text-xs"> Mrs Aina</div>

        <div className="col-span-3 text-sm capitalize">
          Welcome / Supt's Opening Remark
        </div>
        <div className="text-xs"> -</div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Welcome / Opening Hymn (SDAH 635)
        </div>
        <div className="text-xs capitalize"> Daniella Hillary</div>

        <div className="col-span-3 text-sm capitalize"> Keeping on Course</div>
        <div className="text-xs capitalize"> Elder Chilaka </div>

        <div className="col-span-3 text-sm capitalize"> Mission Spotlight </div>
        <div className="text-xs capitalize"> David Obikara </div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Family Presentation{" "}
        </div>
        <div className="text-xs capitalize">
          {" "}
          The families of Elder Gbenga Adeoti, Deac. Ferdinand Obikara, Bro.
          Christopher Egbu, Elder Emeka Agbara, Sister Favour Emmanuel and
          Sister Bridget Nworu.
        </div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Study Time, Lesson Introduction
        </div>
        <div className="text-xs capitalize"> Mrs Aina </div>
        <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
        <div className="text-xs capitalize"> - </div>
        <div className="col-span-3 text-sm capitalize">Friend's time</div>
        <div className="text-xs capitalize"> Mrs. Iheabunike </div>
        <div className="col-span-3 text-sm capitalize">Special Features:</div>
        <div className="text-xs capitalize"> Mrs Adebayo </div>
        <div className="col-span-3 text-sm capitalize">
          Lesson Preview/Announcement / Closing Remark
        </div>
        <div className="text-xs capitalize"> Sabbath School Crew </div>
        <div className="col-span-3 text-sm capitalize">
          Director’s Greeting Video
        </div>
        <div className="text-xs"> MG Adiele Ogbonna</div>

        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (SDAH 539)
        </div>
        <div className="text-xs"> Glory Obi</div>
        <div className="col-span-3 text-sm capitalize">Closing Prayer</div>
        <div className="text-xs"> Keyu </div>
      </div>
    </section>
  );
};

export default SabbathSchool;
