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
          <div className="col-span-3 text-sm">Call to Worship: (SDAH 832)</div>
          <div className="text-xs">Pst. Uchegbue U.O.</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs">Pst. Uchegbue U.O.</div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 528)</div>
          <div className="text-xs">Elder Njoku Vitalis </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Pst. Kona Happy U.</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs"> Elder Gbenga Adeoti</div>
          <div className="col-span-3 text-sm"> Musical Selection: (Choir) </div>
          <div className="text-xs">Mrs. Saturday Esther </div>
          <div className="col-span-3 text-sm">
            Scripture Reading: (Exodus 18:13-23)
          </div>
          <div className="text-xs">MG Francis Chidera</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAH 359)
          </div>
          <div className="text-xs">Sis. Chioma Otti</div>

          <div className="col-span-3 text-sm">
            Sermon Title:{" "}
            <span className="font-bold text-orange-500">
              " Called to Hold the Prophet’s Hand"
            </span>
          </div>
          <div className="text-xs">Pst. Uchegbue U,O.</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 576)</div>
          <div className="text-xs"> Elder Gbenga Adeoti</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs">Pst. Uchegbue U,O.</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
