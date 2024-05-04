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
            <p className="dark:text-white">(The Great Controversy, p.19)</p>
          </div>
          <p className="text-orange-500">
            'Satan well knows that all whom he can lead to neglect prayer and
            the searching of the Scriptures will be overcome by his attacks.
            Therefore he invites every possible device to engross the mind.'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
