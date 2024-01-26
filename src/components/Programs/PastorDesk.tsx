import React from "react";

const PastorDesk = () => {
  return (
    <div id="pastordesk">
      <section className="pt-10 bg-white text-black pb-10" id="features">
        <div className="font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        <div className="space-y-3">
          <div className="underline text-lg font-semibold">
            <p>Romans 15: 3</p>
          </div>
          <p className="text-orange-500">
            For Christ did not please himself, but as it is written, "The
            reproaches of those who reproached you fell on me." 3 For even
            Christ didn't live to please himself. As the Scriptures say, “The
            insults of those who insult you, O God, have fallen on me.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
