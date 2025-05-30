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
              Testimony for the Church, Vol. 2 page 522
            </p>
          </div>
          <p className="text-orange-500">
            “All who profess to be followers of Jesus should feel that a duty
            rests upon them to preserve their bodies in the best condition of
            health, that their minds may be clear to comprehend heavenly things.
            – Happy Health Sabbath"
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
