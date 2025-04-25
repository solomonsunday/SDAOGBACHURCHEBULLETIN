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
            <p className="dark:text-white">Psalm 92:1-2</p>
          </div>
          <p className="text-orange-500">
            “ It is good to give thanks to the Lord, And to sing praises to Your
            name, O Most High; To declare Your lovingkindness in the morning,
            And Your faithfulness every night, Man the Lord accept our
            expressions of praise and worship as sweet smelling incense before
            His altar of Praise in Jesus Christ name. Amen Happy Sabbath.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
