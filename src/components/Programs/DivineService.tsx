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
          <div className="col-span-3 text-sm">Call to Worship: (Hebrew 9:27)</div>
          <div className="text-xs">Elder Anthony Ajie</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs">Congregation</div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 523)</div>
          <div className="text-xs">Mrs. Olanike Davies </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Elder Promise Nwaejigh</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs">Deacon Ugo Azomaukwu</div>
          <div className="col-span-3 text-sm"> Musical Selection: (Choir) </div>
          <div className="text-xs">Deacon Ugo Azomaukwu</div>
          <div className="col-span-3 text-sm">
            Scripture Reading: (Deuteronomy 30:19)
          </div>
          <div className="text-xs">Sis. Kelechi Ejukwu</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAH 212)
          </div>
          <div className="text-xs">Sis. Kelechi Ejukwu</div>
          <div className="col-span-3 text-sm">
            Sermon Title:{" "}
            <span className="font-bold text-orange-500">
              "BIRTH and DEATH"
            </span>
          </div>
          <div className="text-xs">Elder Anthony Ajie</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 430)</div>
          <div className="text-xs">Elder Promise Nwaejigh</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs">Elder Anthony Ajie</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
