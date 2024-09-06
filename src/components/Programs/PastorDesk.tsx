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
            <p className="dark:text-white">Luke 10:39-40</p>
          </div>
          <p className="text-orange-500">
            Mary, sat..at Jesus’ feet and heard His word. But Martha was
            distracted with much serving… As we come into God’s presence in
            worship today, may we not be distracted from beholding the graceful
            face of Christ and hearing His life-impacting words.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
