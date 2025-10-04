import React from "react";

const DivineService = () => {
  return (
    <div id="divineservice">
      <section className="pt-10 dark:text-white " id="features">
        <div className="font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center dark:text-orange-400 border-b border-[#304D30]">
          Divine Service{" "}
          <span className="text-base">(11:00 AM - 12:30 PM)</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-3 text-sm "> Prelude</div>
          <div className="text-xs"> Organist/Student Praise Team</div>
          <div className="col-span-3 text-sm">
            Call to Worship: (Isaiah 41:10){" "}
          </div>
          <div className="text-xs"> Elder Chukwuma Ihesiaba</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs">Congregation</div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 529)</div>
          <div className="text-xs"> Deacon Kingsley Udo</div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs"> Elder Gbenga Adeoti</div>
          <div className="col-span-3 text-sm"> Stewardship/Offertory </div>
          <div className="text-xs"> Elder Aham Chilaka</div>
          <div className="col-span-3 text-sm">
            Musical Selection(Choir Time)
          </div>
          <div className="text-xs">Elder Aham Chilaka</div>
          <div className="col-span-3 text-sm">
            Scripture Reading: (Ephesians 6:12)
          </div>
          <div className="text-xs">Mrs. Mourine Gospel</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration:(SDAH 309)
          </div>
          <div className="text-xs"> Deacon Kingsley Udo</div>
          <div className="col-span-3 text-sm">
            Sermon Title:{" "}
            <span className="font-bold text-orange-500">
              {" "}
              “Behind the Scenes”
            </span>
          </div>
          <div className="text-xs">Elder Chukwuma Ihesiaba</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 99) </div>
          <div className="text-xs"> Mrs. Chinyere Nwachukwu </div>
          <div className="col-span-3 text-sm">
            Benediction / Prayer for the Church
          </div>
          <div className="text-xs"> Elder Chukwuma Ihesiaba</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
