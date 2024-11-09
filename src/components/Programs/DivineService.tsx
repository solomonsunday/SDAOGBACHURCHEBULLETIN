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
            Call to Worship:(Hebrew 4:11-12)
          </div>
          <div className="text-xs">Elder V.O. Oyenuga</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Congregation</div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 272)</div>
          <div className="text-xs">Mrs. O. Happy Kona </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs"> Elder A. Ajie</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs"> Elder T. Aina </div>
          <div className="col-span-3 text-sm"> Musical Selection: (Choir) </div>
          <div className="text-xs"> Elder T. Aina </div>
          <div className="col-span-3 text-sm">
            Scripture Reading: (Revelation 14:6-12)
          </div>
          <div className="text-xs">Bro. C. Nwaesiaba</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAC 216)
          </div>
          <div className="text-xs">Bro. C. Nwaesiaba</div>
          <div className="col-span-3 text-sm">
            Sermon Title:{" "}
            <span className="font-bold text-orange-500">
              {" "}
              "The Word and the Final Proclamation of the Gospel"
            </span>
          </div>
          <div className="text-xs">Elder V.O. Oyenuga</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 272)</div>
          <div className="text-xs">Elder A. Ajie </div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs">Elder V.O. Oyenuga</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
