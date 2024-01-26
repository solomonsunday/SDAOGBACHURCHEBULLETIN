import React from "react";

const DivineService = () => {
  return (
    <div id="divineservice">
      <section className="pt-10 bg-white text-black" id="features">
        <div className="font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Divine Service{" "}
          <span className="text-base">(11:00 AM - 12:30 PM)</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-3 text-sm "> Prelude</div>
          <div className="text-xs"> Organist</div>

          <div className="col-span-3 text-sm">
            Call to Worship: (SDAH 852 or psalm 63:1-5)
          </div>
          <div className="text-xs"> Past. H. Kona</div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> Pst. H. kona</div>
          <div className="col-span-3 text-sm">
            {" "}
            Welcome / opening Hymn (SDAH 375)
          </div>
          <div className="text-xs"> Deacon K. Nwaogu</div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs"> Eld E. Agbara</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs"> Eld G.A.I Olusona</div>
          <div className="col-span-3 text-sm"> Musical Selection (Choir)</div>
          <div className="text-xs"> Eld G.A.I Olusona</div>
          <div className="col-span-3 text-sm">
            Spiritual Reading (Psalm: 63:3)
          </div>
          <div className="text-xs"> Mrs. J. Chima</div>
          <div className="col-span-3 text-sm">
            Hymn of Concecration (SDAH: 330)
          </div>
          <div className="text-xs"> Mrs. J. Chima</div>
          <div className="col-span-3 text-sm">
            Sermon Title "Called to Serve
          </div>
          <div className="text-xs"> Pst. H. kona</div>
          <div className="col-span-3 text-sm">Closing Hymn (SDAH 306)</div>
          <div className="text-xs"> Eld E. Agbara</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs"> Pst. H. kona</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
