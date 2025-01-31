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
            <p className="dark:text-white"> 1 Thes. 5:24 NIV</p>
          </div>
          <p className="text-orange-500">
            “The one who calls you is faithful, and he will do it. Let‘s be
            faithful in our carious callings as elect of God. ”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
