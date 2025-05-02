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
            <p className="dark:text-white">Luke 19:32 ESV</p>
          </div>
          <p className="text-orange-500">
            “You shall stand up before the gray head and honor the face of an
            old man, and you shall fear your God: I am the LORD. Today is Senior
            Citizens Sabbath. Let us learn to treat the aged and elderly with
            respect and dignity, not only for their sake, but also for the
            Lord’s sake who commands us to do so. Happy Sabbath."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
