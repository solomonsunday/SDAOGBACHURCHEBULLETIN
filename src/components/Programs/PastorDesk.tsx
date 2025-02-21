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
            <p className="dark:text-white">
              Ellen G. White, Review and Herald, Oct. 30, 1888.
            </p>
          </div>
          <p className="text-orange-500">
            “We must have the spirit of supplication to God. The enemy holds
            many of you from prayer, by telling you that you do not feel your
            prayers, and that you would better wait until you realize more of
            the spirit of intercession, lest your prayers should be a mockery.
            But you must say to Satan, “It is written” that “men ought always to
            pray, and not to faint”.. ”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
