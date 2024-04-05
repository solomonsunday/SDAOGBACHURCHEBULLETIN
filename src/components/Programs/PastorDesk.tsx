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
            <p className="dark:text-white">(Ellen G. White Letter 140,1901) </p>
          </div>
          <p className="text-orange-500">
            Do not seek to shun responsibilities. To do this is to dishonor the
            claim of discipleship. In His ministry on this earth Christ
            represented His Father. We are to follow in His steps. (Ellen G.
            White Letter 140,1901)
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
