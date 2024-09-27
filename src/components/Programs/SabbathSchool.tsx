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
          Opening Remark / Welcome
        </div>
        <div className="text-xs"> Sis. Chika Promise</div>

        <div className="col-span-3 text-sm capitalize">Opening Prayer</div>
        <div className="text-xs">Sis. Adaoha Alala</div>

        {/* <div className="col-span-3 text-sm capitalize">
          Welcome / Supt's Opening Remark
        </div>
        <div className="text-xs"> Bro. Chimezie Mbagwu </div> */}

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Opening Hymn (SDAH 251)
        </div>
        <div className="text-xs capitalize">Bro. Benjamin Oshiotse</div>
        <div className="col-span-3 text-sm capitalize">
          Bible Reading (Mark 16:6)
        </div>
        <div className="text-xs"> Sis. Nkeiruka Ihesiaba Wogu</div>

        {/* <div className="col-span-3 text-sm capitalize"> Keeping on Course</div>
        <div className="text-xs capitalize">-</div>

        <div className="col-span-3 text-sm capitalize"> Mission Spotlight </div>
        <div className="text-xs capitalize"> - </div>

        <div className="col-span-3 text-sm capitalize">
          {" "}
          Family Presentation{" "}
        </div>
        <div className="text-xs capitalize">-</div> */}
        <div className="col-span-3 text-sm capitalize"> Lesson Study</div>
        <div className="text-xs capitalize"> Bro. Chiemzie Mbagwu </div>

        <div className="col-span-3 text-sm capitalize"> Summary</div>
        <div className="text-xs capitalize"> Bro. Chiemzie Mbagwu </div>
        {/* <div className="col-span-3 text-sm capitalize">
          Unit Activities / Lesson Study (40 Mins)
        </div>
        <div className="text-xs capitalize"> - </div> */}
        {/* <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
        <div className="text-xs capitalize"> -</div> */}
        {/* 
        <div className="col-span-3 text-sm capitalize">Friend's time</div>
        <div className="text-xs capitalize">-</div>
        <div className="col-span-3 text-sm capitalize">
          Lesson Preview/Announcement / Closing Remark
        </div>
        <div className="text-xs capitalize">Com. Goodluck Eze</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn (Let the beauty of Jesus)
        </div>
        <div className="text-xs">Sis. Nikeiru Ihesiaba Wogu</div>
        <div className="col-span-3 text-sm capitalize">Closing Prayer</div>
        <div className="text-xs">Sis. Chika Promise</div> */}
      </div>

      <div className="border-8 rounded-md border-orange-500 p-3 text-center my-3">
        <div className="col-span-3  capitalize font-extrabold text-lg text-orange-500 ">
          Community Guest Day
        </div>
        <div className="text-sm font-bold capitalize">
          {" "}
          (Bro. Uchendu Imo) - Anchor
        </div>
        <div className="underline"></div>

        <div> (1)</div>
        <div> Acknowledgement & Songs of Praise</div>
        <br />
        <div>(2)</div>
        <div>
          {" "}
          Symposium & Interaction (Living with Uncertainty in times of Trouble)
        </div>
        <br />

        <div> (3) </div>
        <div>
          {" "}
          Welcoming & Friends Time: (Questions about the church, Song
          Presentation)
        </div>
        <br />

        <div> (4) </div>
        <div> Presentation: (Children, Church Choir, Youth Choir)</div>
        <br />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* <div className="col-span-3 text-sm capitalize">Friend's time</div>
        <div className="text-xs capitalize">-</div> */}
        <div className="col-span-3 text-sm capitalize">
          Lesson Preview/Announcement / Closing Remark
        </div>
        <div className="text-xs capitalize">Bro. Chimezie Mbagwu</div>
        <div className="col-span-3 text-sm capitalize">
          Closing Hymn ((Let the beauty of Jesus)
        </div>
        <div className="text-xs">Sis. Nikeiru Ihesiaba Wogu</div>
        <div className="col-span-3 text-sm capitalize">Closing Prayer</div>
        <div className="text-xs">Sis. Chika Promise</div>
      </div>
    </section>
  );
};

export default SabbathSchool;
