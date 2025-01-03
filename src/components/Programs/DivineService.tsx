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
          <div className="col-span-3 text-sm">Call to Worship: (Luke 2:52)</div>
          <div className="text-xs">Tofunmi Abioye</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs">Pst. Happy Kona </div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 312.)</div>
          <div className="text-xs">Semilore Olusona </div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs">Pst. Happy Kona </div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs">Glory Kelechi</div>
          <div className="col-span-3 text-sm">
            {" "}
            Musical Selection: (Radiance Choir/ Ogba Choir){" "}
          </div>
          <div className="text-xs">Joy Kelechi</div>
          <div className="col-span-3 text-sm">
            Scripture Reading: (2Cor 5: 14)
          </div>
          <div className="text-xs">Semilore Olusona</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (Praise Team - SDAH 258)
          </div>
          <div className="text-xs">Tofunmi Abioye</div>
          <div className="col-span-3 text-sm">
            Sermon Title: <span className="font-bold text-orange-500">"Dare to Stand out, Dare to make a difference"</span>
          </div>
          <div className="text-xs">Dr Bolanle Adebawojo</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 330)</div>
          <div className="text-xs">Joy Kingsley</div>
          <div className="col-span-3 text-sm">
            Benediction / Prayer for the Church
          </div>
          <div className="text-xs">Pastor H. Kona</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
