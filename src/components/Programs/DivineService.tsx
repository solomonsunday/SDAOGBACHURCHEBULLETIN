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
            Call to Worship:(Zechariah 2:1-5)
          </div>
          <div className="text-xs">Elder O. Alala</div>
          {/* <div className="col-span-3 text-sm"> Doxology</div>
          <div className="text-xs"> Congregation </div> */}
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Congregation</div>
          <div className="col-span-3 text-sm"> Welcome</div>
          <div className="text-xs">Bro. U. Imo </div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 532)</div>
          <div className="text-xs"> Shepherdess O. Kona</div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Elder A. Chilaka</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs">Elder A.B. Adedokun</div>
          <div className="col-span-3 text-sm"> Musical Selection: (Choir) </div>
          <div className="text-xs">Elizabeth Nwaesiaba</div>
          {/* <div className="col-span-3 text-sm">
            Induction: (Adventurer & Pathfinder Clubs)
          </div>
          <div className="text-xs">MG. F.L. Alonge </div> */}
          <div className="col-span-3 text-sm">
            Scripture Reading: (2 Peter 1:19-21)
          </div>
          <div className="text-xs">Sis. Inioluwa Olusona </div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (Go forth on Wings)
          </div>
          <div className="text-xs">Sis. Inioluwa Olusona</div>
          <div className="col-span-3 text-sm">
            Sermon Title:{" "}
            <span className="font-bold text-orange-500">
              {" "}
              "Sermon Title: The Spirit of Prophecy connects us to Jesus and the
              Bible: God Speaks, We will listen?"
            </span>
          </div>
          <div className="text-xs"> Elder O. Alala</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 350)</div>
          <div className="text-xs"> Elder A.B. Adedokun </div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs">Elder O. Alala</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
