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
            Call to Worship: (Ezek. 34:1 & Isa. 49:16)
          </div>
          <div className="text-xs">Elder. A. Ajie</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Congregation </div>
          <div className="col-span-3 text-sm">
            {" "}
            Welcome / opening Hymn (Go Forth)
          </div>
          <div className="text-xs">MG. F. Chidera </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs"> MG. K. Ejukwu</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs">MG. N. Wogu </div>
          <div className="col-span-3 text-sm"> Musical Selection (Choir)</div>
          <div className="text-xs"> Audrey Gospel</div>

          <div className="col-span-3 text-sm">
            Induction: (Adventurer & Pathfinder Clubs)
          </div>
          <div className="text-xs">MG. F.L. Alonge </div>
          <div className="col-span-3 text-sm">
            Spiritual Reading (Mathew 11:19)
          </div>
          <div className="text-xs">David Lucky </div>
          <div className="col-span-3 text-sm">
            Hymn of Concecration (SDAH 367)
          </div>
          <div className="text-xs">MG. K. Ejukwu</div>
          <div className="col-span-3 text-sm">
            Sermon Title{" "}
            <span className="font-bold">Lifting the Fallen in your City”</span>
          </div>
          <div className="text-xs"> Elder. A. Ajie </div>
          <div className="col-span-3 text-sm">Closing Hymn (Go Forth) </div>
          <div className="text-xs"> MG. F. Chidera Benediction </div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs"> Elder. A. Ajie</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
