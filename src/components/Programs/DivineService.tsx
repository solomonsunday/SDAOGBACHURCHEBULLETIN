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
            Call to Worship: (Jeremiah 29:12-13)
          </div>
          <div className="text-xs">M.G. Miriam Okorie</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs">Congregation</div>
          <div className="col-span-3 text-sm"> Doxology</div>
          <div className="text-xs">M.G. Miriam Okorie.</div>

          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 359)</div>
          <div className="text-xs">M.G. Mourin Gospel </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">M.G. Anthony Ajie</div>
          <div className="col-span-3 text-sm"> Stewardship/Offertory </div>
          <div className="text-xs"> M.G. Victor Ajuzie</div>

          <div className="col-span-3 text-sm">Musical Selection(Choir)</div>
          <div className="text-xs"> M.G. Victor Ajuzie</div>

          <div className="col-span-3 text-sm">
            Scripture Reading: (2 Timothy 4:1-5)
          </div>
          <div className="text-xs">M.G. Esther Kelechi</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAH 359)
          </div>
          <div className="text-xs">M.G. Esther Kelechi </div>

          <div className="col-span-3 text-sm">
            {" "}
            Induction - Area Coordinator
          </div>
          <div className="text-xs"> M.G. Fikayo Alonge</div>
          <div className="col-span-3 text-sm">
            Sermon Title:{" "}
            <span className="font-bold text-orange-500">
              {" "}
              “Revelation Reveals History’s Greatest HOAX ”
            </span>
          </div>
          <div className="text-xs">M.G. Miriam Okorie</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 359)</div>
          <div className="text-xs">M.G. Joshua Ayodeji</div>
          <div className="col-span-3 text-sm">
            Benediction / Prayer for the Church
          </div>
          <div className="text-xs">M.G. Miriam Okorie</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
