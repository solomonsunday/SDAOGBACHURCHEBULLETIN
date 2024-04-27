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
            <p className="dark:text-white">Psalm 51:17.</p>
          </div>
          <p className="text-orange-500">
            'The sacrifices of God are a broken spirit, A broken and a contrite
            heart- These, O God, You will not despise. May we be humble before
            God in worship today. Happy Sabbath!'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
