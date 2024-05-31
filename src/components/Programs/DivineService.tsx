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
            Call to Worship: (Mathew 6:33)
          </div>
          <div className="text-xs"> Pst. Happy Kona</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Congregation </div>
          <div className="col-span-3 text-sm">
            {" "}
            Welcome / opening Hymn (SDAH 439)
          </div>
          <div className="text-xs">Deac. C.C. Nwaogwugwu </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Elder A.Ajie</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs"> Bro. D. Akinwale</div>
          <div className="col-span-3 text-sm"> Musical Selection (Choir)</div>
          <div className="text-xs"> Bro. D. Akinwale </div>

          {/* <div className="col-span-3 text-sm">
            Induction: (Adventurer & Pathfinder Clubs)
          </div>
          <div className="text-xs">MG. F.L. Alonge </div> */}
          <div className="col-span-3 text-sm">
            Scripture Reading (John 14:1-4)
          </div>
          <div className="text-xs"> Bro. O. Young</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAH 159)
          </div>
          <div className="text-xs"> Bro. O. Young</div>
          <div className="col-span-3 text-sm">
            Sermon Title{" "}
            <span className="font-bold"> Our Greatest Need... </span>
          </div>
          <div className="text-xs">Pst. Happy Kona</div>
          <div className="col-span-3 text-sm">Closing Hymn (SDAH 632) </div>
          <div className="text-xs"> Elder A.Ajie</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs">Pst. Happy Kona</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
