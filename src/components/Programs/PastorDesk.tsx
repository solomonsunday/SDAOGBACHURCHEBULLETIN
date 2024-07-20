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
            <p className="dark:text-white"> Isaiah 54:10</p>
          </div>
          <p className="text-orange-500">
            'For the mountains shall depart and the hills be removed, But My
            kindness shall not depart from you, Nor shall My covenant of peace
            be removed” Says the Lord, who has mercy on you. Shalom'
            <br /> Shalom
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
