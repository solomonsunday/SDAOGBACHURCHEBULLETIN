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
            <p className="dark:text-white">Ecclesiastes 12:1 </p>
          </div>
          <p className="text-orange-500">
            Remember your Creator in the days of your Youth, before the days of
            trouble come and the years approach when you will say, “I find no
            pleasure in them” Let’s continue to pray and work for the Spiritual
            and moral well-being of our young people so that they do not partake
            in the corruption and decay in the society. Happy Sabbath!
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
