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
          <div className="text-xs"> Organist</div>

          <div className="col-span-3 text-sm">
            Call to Worship: (Deut. 10:18-19)
          </div>
          <div className="text-xs"> Elder E.J. Agbara</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Congregation </div>
          <div className="col-span-3 text-sm">
            {" "}
            Welcome / opening Hymn (SDAH 373)
          </div>
          <div className="text-xs"> Bro. Stanley Hillary</div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Elder G. Olusona</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs"> Mrs. E. Oguntade</div>
          <div className="col-span-3 text-sm"> Musical Selection (Choir)</div>
          <div className="text-xs"> Bro. Stanley Hillary </div>

          {/* <div className="col-span-3 text-sm">
            Induction: (Adventurer & Pathfinder Clubs)
          </div>
          <div className="text-xs">MG. F.L. Alonge </div> */}
          <div className="col-span-3 text-sm">
            Scripture Reading (Matthew 25:35-40)
          </div>
          <div className="text-xs"> Deacon C. Ihesiaba</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAH 367)
          </div>
          <div className="text-xs"> Deacon C. Ihesiaba</div>
          <div className="col-span-3 text-sm">
            Sermon Title{" "}
            <span className="font-bold"> "Ye have done it unto Me" </span>
          </div>
          <div className="text-xs">Elder E.J. Agbara</div>
          <div className="col-span-3 text-sm">Closing Hymn (SDAH 367) </div>
          <div className="text-xs"> Mrs. E. Oguntade</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs">Elder E.J. Agbara</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
