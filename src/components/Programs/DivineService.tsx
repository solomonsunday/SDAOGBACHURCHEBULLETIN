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
            Call to Worship: (2 Cor. 5:17)
          </div>
          <div className="text-xs"> Pst. Uchegbue U.O</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Pst. Adeleye E.A.</div>
          <div className="col-span-3 text-sm">
            {" "}
            Welcome / opening Hymn (SDAH 319)
          </div>
          <div className="text-xs"> Pst. Kona Happy U.</div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Pst. Oyinloye E.</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs"> Elder. Adedokun A.B.</div>
          <div className="col-span-3 text-sm"> Musical Selection (Choir)</div>
          <div className="text-xs">Pst. Salami A. </div>
          <div className="col-span-3 text-sm">
            Spiritual Reading (Jeremiah 18:1-4)
          </div>
          <div className="text-xs"> Elder Edafe D.</div>
          <div className="col-span-3 text-sm">
            Hymn of Concecration (SDAH 265)
          </div>
          <div className="text-xs"> Elder Edafe D.</div>
          <div className="col-span-3 text-sm">
            Sermon Title <span className="font-bold">“A New Vessel”</span>
          </div>
          <div className="text-xs"> Pst. Adeleye E.A.</div>
          <div className="col-span-3 text-sm">Closing Hymn (SDAH 109)</div>
          <div className="text-xs"> Pst. Uchegbue U.O</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs"> Pst. Adeleye E.A.</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
