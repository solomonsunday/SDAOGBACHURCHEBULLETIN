import React from "react";

const PastorDesk = () => {
  return (
    <div id="pastordesk">
      <section className="pt-10 pb-10" id="features">
        <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        <div className="space-y-3">
          <div className="text-lg font-semibold underline">
            <p className="dark:text-white">
              Ellen White ... Message to Young people,941.
            </p>
          </div>
          <p className="text-orange-500">
            “Nothing is apparently more helpless, yet really more invincible,
            than the soul that feels its nothingness, and relies wholly on the
            merits of the Saviour. God would send every angel in heaven to the
            aid of such an one, rather than allow him to be overcome. "
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
