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
            Call to Worship: (1 Peter 3:1-12)
          </div>
          <div className="text-xs">Pst. Happy Kona</div>
          {/* <div className="col-span-3 text-sm">
            {" "}
            Welcome/Introduction of Officiating Ministers
          </div>
          <div className="text-xs"> Deacon Kelechi Nwogu</div> */}
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs">Congregation</div>
          <div className="col-span-3 text-sm">Adoration Hymn: (SDAH 422)</div>
          <div className="text-xs">  Sister Comfort Esinwa</div>
          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs"> Elder Anthony Ajie</div>
          <div className="col-span-3 text-sm"> Stewardship/Offertory </div>
          <div className="text-xs"> Bro. Benjamin Oshotse</div>
          <div className="col-span-3 text-sm">SDA Choir Presentation</div>
          <div className="text-xs">  Bro. Benjamin Oshotse</div>

          <div className="col-span-3 text-sm">
            Musical Selection(Choir Time)
          </div>
          <div className="text-xs">Mrs. Francesca Azomaukwu</div>
          <div className="col-span-3 text-sm">
            Scripture Reading: 1 Peter 2:9) 		   
          </div>
          <div className="text-xs"> Mrs. Funke Adeoti</div>
          <div className="col-span-3 text-sm">Hymn of Consecration:(SDAH 350)</div>
          <div className="text-xs">Mrs. Funke Adeoti</div>
          <div className="col-span-3 text-sm">
            Sermon Title: <span className="font-bold text-orange-500"> “The Christian Commitment to our Church Community”</span>
          </div>
          <div className="text-xs">Pst. Happy Kona</div>
          <div className="col-span-3 text-sm">Closing Hymn: (SDAH 579) </div>
          <div className="text-xs">Elder Anthony Ajie</div>
          <div className="col-span-3 text-sm">
            Benediction / Prayer for the Church
          </div>
          <div className="text-xs"> Pst. Happy Kona</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
