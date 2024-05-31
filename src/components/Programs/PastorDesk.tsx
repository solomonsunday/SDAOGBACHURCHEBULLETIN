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
            <p className="dark:text-white">Joel 2:25 (Amp)</p>
          </div>
          <p className="text-orange-500">
            'I will restore to you the years that the swarming locust has eaten,
            the crawling locust, the consuming locust, and the chewing locust,
            my great army which I sent among you. May the Almighty God, who is
            the great restore, restore to you whatever good things the enemy
            deceitfully stole from you , in Jesus Christ name'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
