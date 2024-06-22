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
            <p className="dark:text-white">Psalms 51:10-12</p>
          </div>
          <p className="text-orange-500">
            'Create in me a clean hear, O God, And renew a steadfast spirit
            within me. Do not cast me away from Your presence, And do not take
            Your Holy Spirit from me. Restore to me the joy of Your Salvation,
            And uphold me by Your generous Spirit. May the Holy Spirit of the
            Most God take over our heart as we worship together in God’s
            presence today. Happy Sabbath!'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
