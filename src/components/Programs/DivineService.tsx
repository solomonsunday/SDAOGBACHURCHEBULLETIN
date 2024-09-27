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
            Call to Worship: (Psalm 146:1-10)
          </div>
          <div className="text-xs"> Pst. (Dr) O. Ogbonna</div>
          <div className="col-span-3 text-sm"> Doxology</div>
          <div className="text-xs"> Congregation </div>
          <div className="col-span-3 text-sm"> Invocation</div>
          <div className="text-xs"> st. (Dr) O. Ogbonna </div>
          <div className="col-span-3 text-sm">
            {" "}
            Welcome/Introduction of Officiating Ministers
          </div>
          <div className="text-xs">Elder O. Alala </div>

          <div className="col-span-3 text-sm">
            {" "}
            Welcome /Opening Hymn (SDAH 422)
          </div>
          <div className="text-xs">Mrs. B. Chilaka </div>

          <div className="col-span-3 text-sm"> Pastoral Prayer</div>
          <div className="text-xs"> Elder G. Adeoti</div>
          <div className="col-span-3 text-sm"> Stewardship </div>
          <div className="text-xs">Elder A. Ajie</div>
          <div className="col-span-3 text-sm"> Musical Selection</div>
          <div className="text-xs">Deacon I.Oyeniyi</div>

          {/* <div className="col-span-3 text-sm">
            Induction: (Adventurer & Pathfinder Clubs)
          </div>
          <div className="text-xs">MG. F.L. Alonge </div> */}
          <div className="col-span-3 text-sm">
            Scripture Reading (Luke 12:35-40)
          </div>
          <div className="text-xs"> Elizabeth Ihesiaba</div>
          <div className="col-span-3 text-sm">
            Hymn of Consecration (SDAH 593)
          </div>
          <div className="text-xs">Mrs. B. Chilaka</div>
          <div className="col-span-3 text-sm">
            Sermon Title{" "}
            <span className="font-bold text-orange-500">
              {" "}
              Hope Beyond the Present Crises
            </span>
          </div>
          <div className="text-xs"> Pst. (Dr) O. Ogbonna </div>

          <div className="col-span-3 text-sm">
            Appreciation/Closing Hymn(SDAH 483)
          </div>
          <div className="text-xs">Elder O Alala</div>
          <div className="col-span-3 text-sm">Closing Hymn (SDAH 330) </div>
          <div className="text-xs">Mrs. M. Alabi</div>
          <div className="col-span-3 text-sm">Benediction</div>
          <div className="text-xs"> Pst. (Dr) O. Ogbonna</div>
          <div className="col-span-3 text-sm">Doxology</div>
          <div className="text-xs"> Congregation</div>
        </div>
      </section>
    </div>
  );
};

export default DivineService;
