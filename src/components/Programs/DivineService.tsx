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
          <div className="text-xs">Pst. D. Alabi</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Congregation</div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 159)</div>
          <div className="text-xs"> Mrs. A.O. Lasisi </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Elder C. Nwaogu</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs">Bro. O. Young</div>
          <div className="col-span-3 text-sm"> Musical Selection: (Choir) </div>
          <div className="text-xs">Bro. O. Young</div>
          <div className="col-span-3 text-sm">
            Scripture Reading: (Romans 10:13-18)
          </div>
          <div className="text-xs">Mrs. E. Egbu </div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAC 109)
          </div>
          <div className="text-xs">Mrs. E. Egbu</div>
          <div className="col-span-3 text-sm">
            Sermon Title:{" "}
            <span className="font-bold text-orange-500">
              {" "}
              "Believe and Share the Good News"
            </span>
          </div>
          <div className="text-xs">Pst. D. Alabi</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 198)</div>
          <div className="text-xs">Elder C. Nwaogu Benediction </div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs">Pst. D. Alabi</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
