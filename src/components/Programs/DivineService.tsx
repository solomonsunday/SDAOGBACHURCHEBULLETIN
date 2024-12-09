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
            Call to Worship: (Proverbs 3:9-10)
          </div>
          <div className="text-xs">Mrs. Adeola Adedokun</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs">Congregation</div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 308)</div>
          <div className="text-xs">Timileyin Abioye </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Elder Gbenga Adeoti</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs">Elder Moses Okorji</div>
          <div className="col-span-3 text-sm"> Musical Selection: (Choir) </div>
          <div className="text-xs">Elder Moses Okorji</div>
          <div className="col-span-3 text-sm">
            Scripture Reading: (Matt 6:33 & 1Cor 10:31)
          </div>
          <div className="text-xs">Mrs. Funke Oyekale</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAH 330)
          </div>
          <div className="text-xs">Mrs. Funke Oyekale</div>

          <div className="col-span-3 text-sm">
            Sermon Title:{" "}
            <span className="font-bold text-orange-500">
              "(i) A life spent for the course of God (ii) An urgent call to
              seek God first{" "}
            </span>
          </div>
          <div className="text-xs">Mrs. Adeola Adedokun</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 330)</div>
          <div className="text-xs"> Elder Gbenga Adeoti</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs">Mrs. Adeola Adedokun</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
