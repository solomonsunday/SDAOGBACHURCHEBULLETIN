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
            Call to Worship: (Psalms 1:1-3)
          </div>
          <div className="text-xs">Pst. M. Bambi</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Pst. M. Bambi </div>
          <div className="col-span-3 text-sm">
            {" "}
            Welcome / opening Hymn (SDAH 008)
          </div>
          <div className="text-xs"> Elder E.J. Agbara</div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Elder O. Alala</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs"> Bro. S. Oyelekan</div>
          <div className="col-span-3 text-sm"> Musical Selection (Choir)</div>
          <div className="text-xs"> Bro. S. Oyelekan </div>
          <div className="col-span-3 text-sm">
            Spiritual Reading (2 Peter 1:3,4)
          </div>
          <div className="text-xs"> Sis. K. Ejukwu </div>
          <div className="col-span-3 text-sm">
            Hymn of Concecration (SDAH 260)
          </div>
          <div className="text-xs"> Sis. K. Ejukwu </div>
          <div className="col-span-3 text-sm">
            Sermon Title{" "}
            <span className="font-bold">“The Battle is of the Lord”</span>
          </div>
          <div className="text-xs"> Pst. M. Bambi </div>
          <div className="col-span-3 text-sm">Closing Hymn (SDAH 522) </div>
          <div className="text-xs"> Elder O. Alala</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs"> Pst. M. Bambi</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
